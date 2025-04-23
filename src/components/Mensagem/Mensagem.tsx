import { StyleSheet, Text, View } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome6';
import React from 'react';
//Passo 1 = definir a prop
type Props = {
  nome: string,
  idade:number,
  status:boolean,
}
//Passo 2 = receber a prop como parametro da função que cria o componente
export default function Mensagem(props: Props) {
  return (
    //Passo3 = fazer algo com o parametro passado.No caso, estamos apenas exibindo no componente
    <View style={styles.mensagem}>
        <Text style={styles.textMsg}>Olá {props.nome}, você tem {props.idade} anos e seu status é {props.status?"ativo":"inativo"}.</Text>
        <FontAwesome size={15} name="face-smile" color='#fff'/>
    </View>
  );
}

const styles = StyleSheet.create({
    textMsg: {
    color:'#fff',
    fontSize:12,
  },
    mensagem:{
        flex:0.25,
        alignItems:'center',
        justifyContent:'space-evenly',
        flexDirection:'row',

        
        width:'100%',
    }
});