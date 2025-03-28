import { StyleSheet, Text, View } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome6'

export default function Footer() {
  return (
    <View style={styles.footer}>
        <Text style={styles.textFooter}>Leticia Avolio</Text>
        <FontAwesome size={15} name="copyright" color='#fff'/>
        <Text style={styles.textFooter}>Todos os direitos reservados</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    textFooter: {
    color:'#fff',
    fontSize:10,
  },
    footer:{
        flex:0.25,
        alignItems:'center',
        justifyContent:'space-evenly',
        flexDirection:'row',

        
        width:'100%',
    }
});