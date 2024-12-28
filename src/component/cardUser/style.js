import { StyleSheet } from "react-native";
import colors from '../../color'

const styles = StyleSheet.create({
  container: {
    margin: 3,
    backgroundColor: colors.buttonPrimary,
    borderRadius: 5,
    padding: 3,
  },
  content:{
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 2,
  }, 
  text:{
    color: colors.white,
  }


});

export default styles;