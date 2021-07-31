/* eslint-disable comma-dangle */
import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { COLORS, SIZES, FONTS, images, icons } from '../../constants';
import Svg, { Polygon } from 'react-native-svg';
import { styles } from './styles';

import { data, bottomShoes } from './data';

const Home = () => {
  const [trending, setTrending] = useState(data);
  const [recentlyViewed, setRecentlyViewed] = useState(bottomShoes);

  function renderShoes(item, index) {
    var trendStyle = {};
    if (index === 0) {
      trendStyle = { marginLeft: SIZES.padding };
    }

    return (
      <TouchableOpacity style={[styles.shoeContainer, { ...trendStyle }]}>
        <Text style={styles.shoeCategory}>{item.type}</Text>
        <View
          style={[
            styles.shoes,
            styles.trendingShadow,
            { backgroundColor: item.bgColor }
          ]}>
          <View style={styles.shoeDetails}>
            <Text style={styles.shoeName}>{item.name}</Text>
            <Text style={styles.shoePrice}>{item.price}</Text>
          </View>
        </View>
        <View style={styles.svgContainer}>
          <Svg height="100%" width="100%">
            <Polygon points="0,0 160,0 160,80" fill="white" />
          </Svg>
        </View>
        <Image style={styles.shoeImage} resizeMode="cover" source={item.img} />
      </TouchableOpacity>
    );
  }

  function renderRecent(item, index) {
    return (
      <TouchableOpacity
        style={styles.itemContainer}
        onPress={() => {
          console.log('Recent');
        }}>
        {/* Image */}
        <View style={styles.itemInner}>
          <Image
            source={item.img}
            resizeMode="contain"
            style={styles.itemImage}
          />
        </View>

        {/* Words */}
        <View style={styles.itemWords}>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.itemPrice}>{item.price}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>TRENDING</Text>

      {/* Trending */}
      <View style={styles.trendContainer}>
        <FlatList
          horizontal
          data={trending}
          keyExtractor={item => `${item.id}`}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => renderShoes(item, index)}
        />
      </View>

      {/* Recently Viewed */}
      <View style={[styles.viewContainer, styles.recentContainerShadow]}>
        <View style={styles.labelContainer}>
          <Image
            resizeMode="contain"
            style={styles.label}
            source={images.recentlyViewedLabel}
          />
        </View>
        <View style={styles.bottomContainer}>
          <FlatList
            data={recentlyViewed}
            keyExtractor={item => `${item.id}`}
            showsVerticalScrollIndicator={false}
            renderItem={({ item, index }) => renderRecent(item, index)}
          />
        </View>
      </View>
    </View>
  );
};

export default Home;
