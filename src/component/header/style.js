import { StyleSheet } from "react-native";
import colors from '../../color';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: colors.background,
    paddingTop: 40,
    paddingBottom: 20,
  },
  contentHeader: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  textLogo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.text,
  },
  welcomeText: {
    fontSize: 16,
    color: colors.text,
  },
  contentSearch: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    marginTop: 10, 
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginRight: 10,
    borderColor: colors.border,
    backgroundColor: colors.white, 
  },
});

export default styles;
