import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  bigImage: {
    width: '60%',
    resizeMode: 'contain',
    alignSelf: 'flex-end',
    marginRight: '1%',
    marginTop: '-25%',
  },
  mainButtonContainer: {
    borderColor: '#FAAE0C',
    borderWidth: 1,
    borderRadius: 10,
    height: 50,
    width: '80%',
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  mainButtonText: {
    position: 'absolute',
    top: -11,
    left: 15,
    zIndex: 1,
    fontSize: 16,
    color: '#FAAE0C',
    paddingLeft: 3,
    paddingRight: 3,
    backgroundColor: '#f2f2f2',
    fontWeight: 'bold',
  },
  mainButtonTextInput: {
    height: '96%',
    width: '99%',
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    padding: 10,
    paddingLeft: 20,
  },
  smallTextButtonText: {
    fontSize: 15,
    color: '#7c7c7c',
  },
  smallTextButtonContainer: {
    flexDirection: 'row',
    flex: 1,
    width: '100%',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  scrollContainer: {
    flex: 1,
  },
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '3%',
    marginBottom: '3%',
  },
  line: {flex: 1, height: 2, backgroundColor: '#b3b3b3'},
  orText: {
    flex: 0.5,
    textAlign: 'center',
    color: 'gray',
    fontWeight: 'bold',
    fontSize: 20,
  },
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '5%',
  },
});
