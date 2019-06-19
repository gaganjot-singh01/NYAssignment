import React, { Component } from "react";
import { SafeAreaView, ActivityIndicator, View } from "react-native";
import { WebView } from "react-native-webview";

import styles from "./styles";

class ArticleDetailPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articleUrl: props.navigation.getParam("articleUrl", "blank"),
      loadingIndicatorVisible: true
    };
  }

  hideSpinner() {
    this.setState({ loadingIndicatorVisible: false });
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <WebView
          source={{ uri: this.state.articleUrl }}
          onLoad={() => this.hideSpinner()}
        />
        {this.state.loadingIndicatorVisible && (
          <ActivityIndicator style={styles.loader} size="large" />
        )}
      </SafeAreaView>
    );
  }

  static navigationOptions = {
    title: "Article Detail Page"
  };
}

export default ArticleDetailPage;
