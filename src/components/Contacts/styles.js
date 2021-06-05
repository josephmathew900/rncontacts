import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 20,
    alignItems: 'center',
  },

  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },

  name: {
    fontSize: 17,
  },

  phone_number: {
    opacity: 0.6,
    fontSize: 14,
    paddingVertical: 5,
  },
});
