import {StyleSheet} from 'react-native';
import colors from '../../../assets/theme/colors';
export default StyleSheet.create({
  wrapper: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    flex: 1,
    justifyContent: 'center',
  },
  modalView: {
    backgroundColor: colors.white,
    marginHorizontal: 20,
    borderRadius: 4,
  },
  header: {
    flexDirection: 'row',
    padding: 15,
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
  },

  separator: {
    height: 0.5,
    backgroundColor: colors.grey,
  },

  title: {
    fontSize: 18,
  },

  body: {
    minHeight: 300,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },

  footer: {
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 7,
  },

  footerItems: {
    width: '100%',
    padding: 10,
  },

  footerText: {
    fontSize: 12,
  },

  termsView: {
    width: 5,
    height: 5,
    borderRadius: 100,
    backgroundColor: colors.grey,
  },
});
