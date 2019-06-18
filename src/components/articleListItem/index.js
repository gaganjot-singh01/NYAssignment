import React from 'react';
import { Text, Image, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './styles';

const ArticleListItem = (data = {}) => (
  <View style={styles.itemContainer}>
    <View style={styles.leftImageContainer}>
      <Image style={styles.leftImage} />
    </View>
    <View style={styles.centerContentContainer}>
      <Text style={styles.titleText}>{data.title}</Text>
      <Text style={styles.byLineText}>{data.byline}</Text>
      <View style={styles.dateContainer}>
        <Icon name="calendar" size={14} color="grey" />
        <Text style={styles.dateText}>{data.published_date}</Text>
      </View>
    </View>
    <View style={styles.rightArrowContainer}>
      <Icon size={18} name="chevron-right" />
    </View>
  </View>
);
export default ArticleListItem;
