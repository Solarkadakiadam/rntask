import {Dimensions, StyleSheet, Platform} from 'react-native';

// export const colors = {
//   bgStart: 'white',
//   bgEnd: 'white',
//   bgStartPos: [0.2, 0.1],
//   bgEndPos: [0.8, 0.7],
// };

const footerHeight = (Dimensions.get('window').height * 8) / 100;
const smallDevice = Dimensions.get('window').height < 600;
const footerOrbDim = smallDevice ? 42 : 58;

const styles = StyleSheet.create({
  buttonsWrapper: {
    height: footerHeight,
    width: '100%',
    alignItems: 'center',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
    justifyContent: 'center',
    backgroundColor: '#fff',
    flexDirection: 'row',
  },

  footerButton: {
    width: smallDevice ? 18 : 28,
    height: smallDevice ? 18 : 28,
    marginBottom: 10,
    resizeMode: 'contain',
  },
  footerTouchable: {
    flex: 1,
    height: footerHeight,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
