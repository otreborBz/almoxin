import { StyleSheet } from "react-native";
import colors from "../../color"


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  image: {
    width: 300,
    height: 300,
  },
  textIcon:{
    fontSize: 24,
  },
  buttonEntrar:{
    width: 300,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: colors.buttonPrimary
  },
  buttonEntrarText: {
   color: colors.white,
   fontSize: 20,
   fontWeight: 'bold',
  },
  
  

});

export default styles;