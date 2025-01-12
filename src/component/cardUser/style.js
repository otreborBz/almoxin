import { StyleSheet } from "react-native";
import colors from '../../color';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 5,
    borderRadius: 8,
    padding: 10,
    borderWidth: 1,
    backgroundColor: '#fff'
  },
  content: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    color: '#000000',
    fontSize: 14,
  },
  contentPassword:{
    width: '100%',
    alignItems: 'flex-end',
  },
  buttonPassword:{
    backgroundColor: '#000000',
    padding: 5,
    borderRadius: 5,
  }, 

});

export default styles;
