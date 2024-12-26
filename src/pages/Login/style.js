import { StyleSheet } from "react-native";
import colors from '../../color'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentImage:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image:{
    width: 200,
    height: 200,
  },
  contentInput:{
    flex: 1,
    alignItems: 'center',
  },
  text:{
    fontSize: 20,
  },
  input: {
    width: 300,
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
  button:{
    width: 300,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: colors.buttonPrimary,
    marginTop: 20,
  },
  buttonText: {
    color: colors.white,
    fontSize: 20,
    fontWeight: 'bold',
  },
  textTermo: {
    fontSize: 16,
    marginTop: 15,
  },

});

export default styles;