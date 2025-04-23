import { StyleSheet, View, Image, TouchableOpacity, Text} from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome6';
import lampOn from '../../../assets/lampOn.jpg';
import lampOff from '../../../assets/lampOff.jpg';
import React,{useState} from "react";

export default function Lampada() {

    const [ligada, setLigada] = useState(true); //hook
    const [msg,setApagou] = useState("Acendeu");

    function TurnOnOff(){
        /*if (ligada==true){
            setLigada(false);        
        }
        else{
            setLigada(true); 
        }*/
         setLigada(!ligada);

        /* if (ligada==false){
             setApagou("Acendeu");        
         }
         else{
             setApagou("Apagou"); 
         } */

         setApagou(ligada?"Apagou":"Acendeu")
    }

  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={TurnOnOff}>
            <Image
                source={ligada?lampOn:lampOff} resizeMode='contain'
            />
        </TouchableOpacity>

        <View style={styles.status}>  
            <Text style={styles.statusLamp}>{msg}</Text>
         </View>


        <View style={styles.helloWorld}>
            <Text style={styles.helloText}>Hello World!</Text>
            <FontAwesome size={15} name="star" color='yellow'/>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex:2,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#fff',
        width:'100%',
    },
    status:{
        backgroundColor:'#000',
        width:'50%',
        height:'20%',
        borderWidth:2,
        borderColor:'yellow',
        borderStyle:'solid',
        alignItems:'center',
        justifyContent:'center',
    },
    statusLamp:{
        color:'yellow',
        fontSize:20,
    },
    helloWorld:{
        flexDirection: 'row',
        
        backgroundColor:'#000',
        
        marginTop:20,
    },
    helloText:{
        backgroundColor:'#000',
        color:'yellow',
        fontSize:15,
        marginRight:20,
    }
});