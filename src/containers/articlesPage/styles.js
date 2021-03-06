import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center"
  },
  loader: {
    position: "absolute",
    alignSelf: "center"
  },
  leftHeaderIcon: {
    marginLeft: 10
  },
  rightHeaderIconContainer: {
    flexDirection: "row"
  },
  searchIcon: {
    marginLeft: 5
  },
  verticalIcon: {
    marginLeft: 10,
    marginRight: 10
  }
});

export default styles;
