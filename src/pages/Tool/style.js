import { FlatList, StyleSheet } from "react-native";
import colors from '../../color'

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  listContent: {
    paddingBottom: 16,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    margin: 16,
    borderRadius: 12,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  emptyImage: {
    width: 120,
    height: 120,
    tintColor: colors.primary,
    opacity: 0.5,
  },
  emptyText: {
    fontSize: 18,
    textAlign: 'center',
    color: colors.textSecondary,
    marginTop: 16,
  },
  countText: {
    fontSize: 14,
    color: colors.textSecondary,
    margin: 16,
  }

});

export default styles;