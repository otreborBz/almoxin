import { StyleSheet } from 'react-native';
import colors from '../../color';

export default StyleSheet.create({
  container: {
    paddingVertical: 16,
    paddingHorizontal: 24,
    backgroundColor: colors.white,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  text: {
    color: colors.textSecondary,
    fontSize: 12,
    fontWeight: '500',
  },
  version: {
    color: colors.textSecondary,
    fontSize: 10,
    textAlign: 'center',
    marginTop: 4,
  }
}); 