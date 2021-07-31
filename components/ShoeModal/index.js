import React from 'react';
import { TouchableOpacity, View, Modal, Image, Text } from 'react-native';
import { BlurView } from '@react-native-community/blur';
import { styles } from './styles';

const ShoeModal = props => {
  return (
    <Modal transparent animationType="slide" visible={props.showAddModal}>
      <BlurView
        blurAmount={20}
        blurType="light"
        style={styles.container}
        reducedTransparencyFallbackColor="white">
        {/* Close Button */}
        <TouchableOpacity
          onPress={props.onClosePress}
          style={styles.absolute}
        />
        {/* Modal Content */}
        <View
          style={[styles.contentContainer, { backgroundColor: props.bgColor }]}>
          <View style={styles.content}>
            <Image
              source={props.selectedItem}
              style={styles.image}
              resizeMode="contain"
            />
          </View>

          {/* Info */}
          <Text style={styles.name}>{props.name}</Text>
          <Text style={styles.type}>{props.type}</Text>
          <Text style={styles.price}>{props.price}</Text>
          <View style={styles.sizeContainer}>
            <View>
              <Text style={styles.size}>Select Size</Text>
            </View>
            <View style={styles.btnContainer}>{props.renderSizes}</View>
          </View>

          <TouchableOpacity style={styles.addBtn} onPress={props.onClosePress}>
            <Text style={styles.addTxt}>Add to Bag</Text>
          </TouchableOpacity>
        </View>
      </BlurView>
    </Modal>
  );
};

export default ShoeModal;
