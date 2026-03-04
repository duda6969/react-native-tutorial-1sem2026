import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView, SafeAreaView } from 'react-native'; // Importamos ScrollView e SafeAreaView
import Header from './components/Header';
import CardUser from './components/CardUser';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* 1. O ScrollView fica por fora para rolar a tela inteira */}
      <ScrollView showsVerticalScrollIndicator={false}>
        
        <Header />

        {/* 2. Esta View agrupa os cards em duas colunas */}
        <View style={styles.vitrine}>
          <CardUser />
          <CardUser />
          <CardUser />
          <CardUser />
          <CardUser />
          <CardUser />
          <CardUser />
          <CardUser />
        </View>

        <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    // Removemos o alignItems: 'center' daqui para não quebrar o layout da vitrine
  },
  vitrine: {
    flexDirection: 'row',     // Coloca um ao lado do outro
    flexWrap: 'wrap',        // Pula para a linha de baixo quando não cabe
    justifyContent: 'space-between', // Dá o espaçamento entre as colunas
    padding: 10,             // Espaçamento nas bordas da tela
  }
});