import { StyleSheet } from "react-native";
import colors from '../../color';

const styles = StyleSheet.create({
  container: {
    margin: 5,
    backgroundColor: colors.buttonPrimary,
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  content: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 5,
  },
  text: {
    color: colors.white,
    fontSize: 14,
  },
});

export default styles;
