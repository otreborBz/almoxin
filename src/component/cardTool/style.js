import { StyleSheet } from "react-native";
import colors from '../../color'

const styles = StyleSheet.create({
  container: {
    margin: 5,
    backgroundColor: colors.buttonPrimary,
    borderRadius: 10,
    padding: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  content: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8, 
  },
  text: {
    color: colors.white,
    fontSize: 14,
  },
  labelText: {
    fontSize: 14,
    color: colors.white,
    opacity: 0.7,
  },
});

export default styles;
