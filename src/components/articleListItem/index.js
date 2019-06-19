import React from 'react';
import { Text, Image, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './styles';

const ArticleListItem = data => (
  <TouchableOpacity onPress={data.onPressClick}>
  <View style={styles.itemContainer}>
    <View style={styles.leftImageContainer}>
      <Image style={styles.leftImage} />
    </View>
    <View style={styles.centerContentContainer}>
      <Text numberOfLines={2} style={styles.titleText}>{data.item.title}</Text>
      <Text style={styles.byLineText}>{data.item.byline}</Text>
      <View style={styles.dateContainer}>
        <Icon name="calendar" size={14} color="grey" />
        <Text style={styles.dateText}>{data.item.published_date}</Text>
      </View>
    </View>
    <View style={styles.rightArrowContainer}>
      <Icon size={18} color='rgb(154,154,154)' name="chevron-right" />
    </View>
  </View>
  </TouchableOpacity>
);
export default ArticleListItem;
