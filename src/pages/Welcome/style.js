import { StyleSheet } from "react-native";
import colors from "../../color";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingHorizontal: 20,
  },
  image: {
    width: 250,
    height: 250,
    marginBottom: 20,
  },
  textIcon: {
    fontSize: 26,
    fontWeight: '600',
    textAlign: 'center',
    color: colors.primary,
    marginBottom: 30,
  },
  buttonEntrar: {
    width: 250,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    backgroundColor: colors.buttonPrimary,
    marginBottom: 20,
  },
  buttonEntrarText: {
    color: colors.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
  footerText: {
    fontSize: 14,
    color: colors.textSecondary,
    marginTop: 20,
    textAlign: 'center',
  },
});

export default styles;
