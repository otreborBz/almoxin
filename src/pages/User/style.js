import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5', 
  },
  listContent: {
    flex: 1,
    paddingHorizontal: 16,
    marginTop: 8, 
  },
  emptyMessage: {
    textAlign: 'center',
    fontSize: 16,
    color: '#888', 
    marginTop: 20,
  },
  headerContainer: {
    backgroundColor: '#fff',
    paddingVertical: 16,
    paddingHorizontal: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd', 
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
