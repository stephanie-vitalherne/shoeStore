/* eslint-disable react-native/no-inline-styles */
/* eslint-disable comma-dangle */
import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { COLORS, SIZES, images } from '../../constants';
import Svg, { Polygon } from 'react-native-svg';
import { styles } from './styles';

import { data, bottomShoes } from './data';
import { ShoeModal } from '../../components';

const Home = () => {
  const [trending] = useState(data);
  const [recentlyViewed] = useState(bottomShoes);
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedSize, setSelectedSize] = useState('');

  function renderShoes(item, index) {
    var trendStyle = {};
    if (index === 0) {
      trendStyle = { marginLeft: SIZES.padding };
    }

    return (
      <TouchableOpacity
        style={[styles.shoeContainer, { ...trendStyle }]}
        onPress={() => {
          setSelectedItem(item);
          setShowAddModal(true);
        }}>
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
          setSelectedItem(item);
          setShowAddModal(true);
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

  function renderSizes() {
    return selectedItem.sizes.map((item, index) => {
      return (
        <TouchableOpacity
          key={index}
          style={[
            styles.sizeBtn,
            {
              backgroundColor:
                selectedItem.sizes[index] === selectedSize ? COLORS.white : null
            }
          ]}
          onPress={() => setSelectedSize(item)}>
          <Text
            style={[
              styles.sizeTxt,
              {
                color:
                  selectedItem.sizes[index] === selectedSize
                    ? COLORS.black
                    : COLORS.white
              }
            ]}>
            {item}
          </Text>
        </TouchableOpacity>
      );
    });
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

      {/* Modal */}
      {selectedItem && (
        <ShoeModal
          name={selectedItem.name}
          type={selectedItem.type}
          price={selectedItem.price}
          showAddModal={showAddModal}
          bgColor={selectedItem.bgColor}
          selectedItem={selectedItem.img}
          onClosePress={() => {
            setSelectedItem(null);
            setSelectedSize('');
            setShowAddModal(false);
          }}
          renderSizes={renderSizes()}
        />
      )}
    </View>
  );
};

export default Home;
