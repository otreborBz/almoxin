import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
    paddingTop: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  welcome: {
    fontSize: 14,
    color: '#555',
    flex: 1,
    marginHorizontal: 8,
  },
  exitButton: {
    padding: 8,
    backgroundColor: '#eee',
    borderRadius: 8,
  },
  contentSearch: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
  searchWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    paddingHorizontal: 8,
    marginRight: 8,
  },
  buttonSearch: {
    flex: 1,
    fontSize: 14,
    padding: 8,
    color: '#333',
  },
  actionButtonWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    marginLeft: 8,
  },
});
