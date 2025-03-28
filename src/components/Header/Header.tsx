import { StyleSheet, Text, View } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome6'

export default function Header() {
  return (
    <View style={styles.header}>
        <Text style={styles.textHeader}>Turn On/Off</Text>
        <FontAwesome size={30} name="lightbulb" color='#fff'/>
    </View>
  );
}

const styles = StyleSheet.create({
    textHeader: {
    color:'#fff',
    fontSize:30,
    marginRight:15,
  },
    header:{
        flex:2,
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',
        width:'100%',
    }
});