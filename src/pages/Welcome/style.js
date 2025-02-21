import { StyleSheet } from 'react-native';
import colors from '../../color';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  logoContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subtitle: {
    color: colors.textSecondary,
    fontSize: 16,
    marginTop: 8,
  },
  footer: {
    flex: 1,
    backgroundColor: colors.white,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal: 30,
    paddingVertical: 50,
  },
  description: {
    color: colors.text,
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30,
  },
  button: {
    backgroundColor: colors.primary,
    borderRadius: 8,
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    flex: 1,
    color: colors.white,
    fontSize: 18,
    textAlign: 'center',
    marginLeft: 35,
  },
  buttonIcon: {
    marginRight: 35,
  },
  version: {
    color: colors.textSecondary,
    fontSize: 12,
    textAlign: 'center',
    marginTop: 30,
  }
});
