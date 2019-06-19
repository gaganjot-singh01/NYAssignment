import React, { Component } from "react";
import {
  SafeAreaView,
  Alert,
  FlatList,
  ActivityIndicator,
  View
} from "react-native";
import Icon from "react-native-vector-icons/Feather";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as articleActions from "../../redux/actions/articles";

import styles from "./styles";
import { ArticleListItem } from "../../components";
import { ARTICLE_DETAIL_PAGE_ROUTE } from "../../navigation";

class ArticlesPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { fetchArticlesData } = this.props;
    const data = {
      period: 7 // Change Period 1,7,30 here
    };
    fetchArticlesData && fetchArticlesData(data);
  }

  componentWillReceiveProps(nextProps) {
    const { error, isFetching, fetchError } = nextProps;
    if (
      !isFetching &&
      fetchError &&
      error !== null &&
      this.props.error !== error
    ) {
      Alert.alert(error);
    }
  }

  render() {
    const { articlesData = {} } = this.props;
    const { results = [] } = articlesData;
    const { isFetching } = this.props;

    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.id.toString()}
          data={results}
          renderItem={({ item }) => {
            return (
              <ArticleListItem
                item={item}
                onPressClick={() =>
                  this.props.navigation.navigate(ARTICLE_DETAIL_PAGE_ROUTE, {
                    articleUrl: item.url
                  })
                }
              />
            );
          }}
        />
        {isFetching && <ActivityIndicator style={styles.loader} size="large" />}
      </SafeAreaView>
    );
  }

  static navigationOptions = {
    title: "NY Times Most Popular",
    headerLeft: (
      <Icon name="menu" size={21} color="#fff" style={styles.leftHeaderIcon} />
    ),
    headerRight: (
      <View style={styles.rightHeaderIconContainer}>
        <Icon name="search" size={20} color="white" style={styles.searchIcon} />
        <Icon
          name="more-vertical"
          size={20}
          color="white"
          style={styles.verticalIcon}
        />
      </View>
    )
  };
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(articleActions, dispatch);
};

const mapStateToProps = state => ({
  articlesData: state.articles.articlesData,
  articles: state.articles,
  error: state.articles.error,
  isFetching: state.articles.isFetching,
  fetchError: state.articles.fetchError
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticlesPage);
