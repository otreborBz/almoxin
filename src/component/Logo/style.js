import { StyleSheet } from 'react-native';
import colors from '../../color';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  logoBox: {
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    transform: [{ rotate: '10deg' }],
  },
  large: {
    width: 120,
    height: 120,
  },
  small: {
    width: 40,
    height: 40,
  },
  logoText: {
    color: colors.white,
    fontWeight: 'bold',
    transform: [{ rotate: '-10deg' }],
  },
  largeText: {
    fontSize: 80,
  },
  smallText: {
    fontSize: 24,
  },
  logoName: {
    fontSize: 32,
    fontWeight: 'bold',
    color: colors.primary,
    marginTop: 16,
  }
});

export default styles; 