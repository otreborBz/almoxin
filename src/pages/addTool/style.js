import { StyleSheet } from "react-native";
import Colors from '../../color'


export const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    paddingTop: 40,
    paddingBottom: 20,
  },
  contentHeader:{
    width: '100%',
    height: '10%',
    justifyContent: 'center',
    alignItems: 'center',
  }, 
  textName:{
    fontSize: 24,
    fontWeight: 'bold',
  },
  textDescription:{
    fontSize: 18,
    fontStyle: 'italic',
  }, 
  contentInput:{ 
   width: '100%',
   padding: 10,
  },
  textInput:{
    fontSize: 16,
    marginLeft: 12,
  },
  input:{
    width: '90%',
    height: 40,
    marginLeft: 12,
    marginRight: 12,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
  contentButton:{
    width: '100%',
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  button:{
    width: '40%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: Colors.buttonPrimary,
    marginTop: '15%',
  },
  buttonText:{
    color: '#fff',
    fontSize: 16,
  }



})