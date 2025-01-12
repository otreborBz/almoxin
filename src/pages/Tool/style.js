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
    marginTop: 20,
  },
  emptyImage: {
    width: 150,
    height: 150,
    marginBottom: 10,
  },
  emptyText: {
    fontSize: 18,
    textAlign: 'center',
    color: '#555',
  }

});

export default styles;