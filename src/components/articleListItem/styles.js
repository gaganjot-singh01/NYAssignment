import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 10
  },
  leftImageContainer: {
    flex: 0.3,
    justifyContent: 'center'
  },
  leftImage: {
    height: 30,
    width: 30,
    backgroundColor: 'rgb(154,154,154)',
    borderRadius: 15,
    marginLeft: 30
  },
  centerContentContainer: {
    flex: 1,
    flexDirection: 'column'
  },
  titleText: {
    color: 'black',
    fontSize: 14
  },
  byLineText: {
    color: 'grey',
    fontSize: 12,
    marginTop: 5
  },
  dateContainer: {
    flexDirection: 'row',
    margin: 5,
    alignItems: 'center',
    alignSelf: 'flex-end'
  },
  dateText: {
    color: 'grey',
    fontSize: 12
  },
  rightArrowContainer: {
    flex: 0.1,
    justifyContent: 'center',
    marginLeft: 10,
    marginRight:20
  }
});

export default styles;
