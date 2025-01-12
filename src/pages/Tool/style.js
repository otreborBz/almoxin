import { FlatList, StyleSheet } from "react-native";
import colors from '../../color'

const styles = StyleSheet.create({

  container: {
    flex: 1,
  },
  listContent: {
    paddingBottom: 16,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyImage: {
    width: 120,
    height: 120,
  },
  emptyText: {
    fontSize: 18,
    textAlign: 'center',
    color: '#555',
  }

});

export default styles;