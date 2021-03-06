import { Platform } from "react-native";
import { createStackNavigator } from "react-navigation";

import { ArticlesPage, ArticleDetailPage } from "../containers";

export const ARTICLES_PAGE_ROUTE = "articlesPage";
export const ARTICLE_DETAIL_PAGE_ROUTE = "articleDetailPage";

export default createStackNavigator(
  {
    articlesPage: ArticlesPage,
    articleDetailPage: ArticleDetailPage
  },
  {
    initialRouteName: ARTICLES_PAGE_ROUTE,
    navigationOptions: {
      headerTintColor: "white",
      headerTitleStyle: {
        fontWeight: "bold"
      },
      headerStyle: {
        elevation: 0,
        shadowOpacity: 0,
        borderBottomWidth: 0,
        marginTop: Platform.OS === "ios" ? 0 : 24,
        backgroundColor: "rgb(71, 228, 194)"
      }
    }
  }
);
