import { StyleSheet } from "react-native";
import colors from '../../color'

const styles = StyleSheet.create({
  container: {
    // margin: 10,
    marginHorizontal: 10,
    marginBottom: 8,
  },
  touch:{
    padding: 10,
    borderWidth: 1,
    borderRadius: 5, 
    backgroundColor: '#fff'
  },
  content: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8, 
  },
  text: {
    color: '#000000',
    fontSize: 14,
  },
  button:{
    width: '100%',
    height: '50',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: 50,
  },
  share:{

  }
});

export default styles;
