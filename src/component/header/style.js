import { StyleSheet } from 'react-native';
import colors from '../../color';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 3,
  },
  topContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  welcome: {
    color: colors.text,
    fontSize: 16,
    fontWeight: '500',
    marginLeft: 12,
  },
  companyName: {
    color: colors.primary,
    fontWeight: '600',
  },
  userName: {
    color: colors.text,
    fontWeight: '600',
  },
  exitButton: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: colors.background,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  searchWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.background,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.border,
    overflow: 'hidden',
  },
  searchInput: {
    flex: 1,
    height: 40,
    paddingHorizontal: 16,
    fontSize: 14,
    color: colors.text,
  },
  searchButton: {
    padding: 8,
    marginRight: 4,
  },
  actionButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    backgroundColor: colors.background,
    borderWidth: 1,
    borderColor: colors.border,
  },
  addButton: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: colors.background,
  },
});
