import { StyleSheet, Text, View } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome6'

export default function Mensagem() {
  return (
    <View style={styles.mensagem}>
        <Text style={styles.textMsg}>Olá Pedrinho, você tem 22 anos e seu status é inativo</Text>
        <FontAwesome size={15} name="face-smile" color='#fff'/>
    </View>
  );
}

const styles = StyleSheet.create({
    textMsg: {
    color:'#fff',
    fontSize:10,
  },
    mensagem:{
        flex:0.25,
        alignItems:'center',
        justifyContent:'space-evenly',
        flexDirection:'row',

        
        width:'100%',
    }
});