import { StyleSheet } from 'react-native';
import colors from '../../color';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  listContent: {
    flex: 1,
    paddingHorizontal: 16,
    marginTop: 8, 
  },
  emptyMessage: {
    textAlign: 'center',
    fontSize: 16,
    color: colors.textSecondary,
    marginTop: 20,
  },
  headerContainer: {
    backgroundColor: colors.white,
    paddingVertical: 16,
    paddingHorizontal: 8,
    borderBottomWidth: 1,
    borderBottomColor: colors.border, 
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
  },
});
