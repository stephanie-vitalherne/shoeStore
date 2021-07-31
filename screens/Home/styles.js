/* eslint-disable comma-dangle */
import { StyleSheet } from 'react-native';
import { SIZES, COLORS, FONTS } from '../../constants';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.white
  },
  trendingShadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7
  },
  recentContainerShadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 7 },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15
  },
  title: {
    marginTop: SIZES.radius,
    marginHorizontal: SIZES.padding,
    ...FONTS.largeTitleBold
  },
  trendContainer: {
    height: 260,
    marginTop: SIZES.radius
  },
  shoeContainer: {
    height: 240,
    width: 180,
    justifyContent: 'center',
    marginHorizontal: SIZES.base
  },
  shoeCategory: {
    color: COLORS.gray,
    ...FONTS.h5
  },
  shoes: {
    flex: 1,
    justifyContent: 'flex-end',
    marginTop: SIZES.base,
    borderRadius: 10,
    marginRight: SIZES.padding,
    paddingLeft: SIZES.radius,
    paddingRight: SIZES.padding,
    paddingBottom: SIZES.radius
  },
  shoeDetails: {
    height: '35%',
    justifyContent: 'space-between'
  },
  shoeName: {
    color: COLORS.white,
    ...FONTS.body4
  },
  shoePrice: {
    color: COLORS.white,
    ...FONTS.h3
  },
  shoeImage: {
    position: 'absolute',
    top: 50,
    right: 0,
    width: '98%',
    height: 80,
    transform: [{ rotate: '-15deg' }]
  },
  svgContainer: {
    position: 'absolute',
    top: 27,
    right: 0,
    width: '95%',
    height: '100%'
  },
  viewContainer: {
    flex: 1,
    marginTop: SIZES.padding,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: COLORS.white,
    flexDirection: 'row'
  },
  labelContainer: {
    width: 70,
    marginLeft: SIZES.base
  },
  label: {
    width: '100%',
    height: '100%'
  },
  bottomContainer: {
    flex: 1,
    paddingBottom: SIZES.padding
  },
  itemContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  itemInner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  itemImage: {
    width: 130,
    height: 100
  },
  itemWords: {
    flex: 1.5,
    marginLeft: SIZES.radius,
    justifyContent: 'center'
  },
  itemName: {
    color: COLORS.gray,
    ...FONTS.body3
  },
  itemPrice: {
    ...FONTS.h3
  },
  sizeBtn: {
    width: 35,
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: COLORS.white,
    borderRadius: 5
  },
  sizeTxt: {
    ...FONTS.body4
  }
});

export { styles };
