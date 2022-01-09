import {StyleSheet} from 'react-native';

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardView: {
    backgroundColor: '#FFF',
    paddingHorizontal: 15,
    borderRadius: 1,
    elevation: 2,
  },
  flexRow: {
    flexDirection: 'row',
  },
  cardBottomView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  IconView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemSaprater: {
    marginVertical: 5,
  },
  listContainer: {
    paddingBottom: 50,
    paddingHorizontal: 5,
    marginTop: 5,
  },
  marginHorizontal: {
    marginHorizontal: 5,
  },
  image: {
    resizeMode: 'cover',
  },
  paddingVertical: {
    paddingVertical: 5,
  },
  spinnerView: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
