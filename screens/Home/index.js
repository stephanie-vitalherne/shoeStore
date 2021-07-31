import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { COLORS, SIZES, FONTS, images, icons } from '../../constants';
import Svg, { Polygon } from 'react-native-svg';
import { styles } from './styles';

import { data } from './data';

const Home = () => {
  const [trending, setTrending] = useState(data);

  function renderShoes(item, index) {
    var trendStyle = {};
    if (index === 0) {
      trendStyle = { marginLeft: SIZES.padding };
    }

    return (
      <TouchableOpacity style={[styles.shoeContainer, { ...trendStyle }]}>
        <Text style={styles.shoeCategory}>{item.type}</Text>
        <View style={[styles.shoes, { backgroundColor: item.bgColor }]}>
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

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>TRENDING</Text>

      {/* Trending */}
      <View style={styles.trendContainer}>
        <FlatList
          horizontal
          data={data}
          keyExtractor={item => `${item.id}`}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => renderShoes(item, index)}
        />
      </View>
    </View>
  );
};

export default Home;
