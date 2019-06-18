import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 10
  },
  leftImageContainer: {
    flex: 0.2,
    justifyContent: 'center'
  },
  leftImage: {
    height: 40,
    width: 40,
    backgroundColor: 'red',
    borderRadius: 20,
    marginRight: 10,
    marginLeft: 10
  },
  centerContentContainer: {
    flex: 1,
    flexDirection: 'column'
  },
  titleText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 14
  },
  byLineText: {
    color: 'grey',
    fontWeight: 'bold',
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
    fontWeight: 'bold',
    fontSize: 12
  },
  rightArrowContainer: {
    flex: 0.1,
    justifyContent: 'center'
  }
});

export default styles;
