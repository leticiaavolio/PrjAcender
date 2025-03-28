import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from '../../components/Header/Header'
import Mensagem from '../../components/Mensagem/Mensagem'
import Lampada from '../../components/Lampada/Lampada'
import Footer from '../../components/Footer/Footer'

export default function Home() {
  return (
    <View style={styles.container}>
        <StatusBar style="auto" />
        <Header />
        <Mensagem />
        <Lampada />
        <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent:'center',
    alignItems:'center'
  },
});