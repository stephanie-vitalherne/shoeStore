/* eslint-disable comma-dangle */
import { StyleSheet } from 'react-native';
import { SIZES, COLORS, FONTS } from '../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  absolute: {
    position: 'absolute',
    bottom: 0,
    top: 0,
    left: 0,
    right: 0
  },
  contentContainer: {
    justifyContent: 'center',
    width: '85%'
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -SIZES.padding * 2
  },
  image: {
    width: '90%',
    height: 170,
    transform: [{ rotate: '-15deg' }]
  },
  name: {
    marginTop: SIZES.padding,
    marginHorizontal: SIZES.padding,
    color: COLORS.white,
    ...FONTS.body2
  },
  type: {
    marginTop: SIZES.base / 2,
    marginHorizontal: SIZES.padding,
    color: COLORS.white,
    ...FONTS.body3
  },
  price: {
    marginTop: SIZES.radius,
    marginHorizontal: SIZES.padding,
    color: COLORS.white,
    ...FONTS.h1
  },
  sizeContainer: {
    flexDirection: 'row',
    marginTop: SIZES.radius,
    marginHorizontal: SIZES.padding
  },
  size: {
    color: COLORS.white,
    ...FONTS.body3
  },
  addBtn: {
    width: '100%',
    height: 70,
    marginTop: SIZES.base,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  addTxt: {
    color: COLORS.white,
    ...FONTS.largeTitleBold
  },
  btnContainer: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    marginLeft: SIZES.radius
  }
});

export { styles };
