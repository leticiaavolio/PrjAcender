import { StyleSheet, View, Image, TouchableOpacity, Text} from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome6'

export default function Lampada() {
  return (
    <View style={styles.container}>
        <TouchableOpacity>
            <Image source={require('../../../assets/lampOn.jpg')} style={styles.LampImg} resizeMode='contain'/>
        </TouchableOpacity>


        <View style={styles.status}>  
            <Text style={styles.statusLamp}>Acendeu</Text>
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
    LampImg:{
        width:'25%',
    },status:{
        backgroundColor:'#000',
        width:'50%',
        height:'20%',
        borderWidth:2,
        borderColor:'yellow',
        borderStyle:'solid',
        alignItems:'center',
        justifyContent:'center'
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