import React, { Component } from 'react';
import { SafeAreaView, View, FlatList, Text } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as articleActions from '../../redux/actions/articles';

import styles from './styles';
import { ArticleListItem } from '../../components';

class ArticlesPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { fetchArticlesData } = this.props;
    const data = {
      period: 1 // Change Period 1,7,30 here
    };
    fetchArticlesData && fetchArticlesData(data);
  }

  render() {
    const { articlesData = {} } = this.props;
    const { results = [] } = articlesData;
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.id.toString()}
          data={results}
          renderItem={({ item }) => {
            return ArticleListItem(item);
          }}
        />
      </SafeAreaView>
    );
  }

  static navigationOptions = {
    title: 'NY Times Most Popular'
  };
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(articleActions, dispatch);
};

const mapStateToProps = state => ({
  articlesData: state.articles.articlesData
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticlesPage);
