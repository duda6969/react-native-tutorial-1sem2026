<<<<<<< HEAD
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Image } from 'expo-image'; 


export default function LojaRoupas() {
  return (
   <View style={styles.list}>
      {/* Exemplo de 4 itens para mostrar a quebra de linha */}
      <CardProduto nome="Cachorro preto fofo" preco="R$ 89,90" img="https://picsum.photos/id/237/200/300" />
      <CardProduto nome="notbook legal" preco="R$ 149,00" img="https://picsum.photos/id/1/200/300" />
      <CardProduto nome="pintura de arvore maneira" preco="R$ 199,99" img="https://picsum.photos/id/10/200/300" />
      <CardProduto nome="caderno inteligente" preco="R$ 250,00" img="https://picsum.photos/id/20/200/300" />
    </View>
  );
}

// Transformando sua lógica de CardUser em CardProduto
function CardProduto({ nome, preco, img }) {
  return (
    <View style={styles.card}>
      <Image
        source={img}
        style={styles.image}
        contentFit="cover"
        transition={1000}
      />
      <View style={styles.info}>
        <Text style={styles.name} numberOfLines={1}>{nome}</Text>
        <Text style={styles.price}>{preco}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    flexDirection: 'row',     // Faz os itens ficarem um ao lado do outro
    flexWrap: 'wrap',        // Quando não couber mais, pula para a linha de baixo
    justifyContent: 'space-between', // Espaçamento igual entre as colunas
    padding: 10,
  },
  card: {
    width: '48%',            // Quase 50% para caber dois por linha com margem
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: "#CCC",
    borderRadius: 15,
    marginBottom: 15,
    overflow: 'hidden',      // Garante que a imagem não saia da borda arredondada
  },
  image: {
    width: '100%',
    height: 150,             // Altura fixa para as imagens da vitrine
  },
  info: {
    padding: 10,
  },
  name: {
    fontSize: 14,
    fontWeight: "700",
    color: "#333",
  },
  price: {
    fontSize: 14,
    color: "#2ecc71",        // Cor verde para o preço
    fontWeight: "bold",
    marginTop: 4,
  }
});
=======
import { StyleSheet, View, Text } from "react-native"
import { Image } from "expo-image"

export default function CardUser({avatar, name, email}){
    return (
        <View style={styles.container}>
            <Image 
                style={styles.avatar}
                //source={require("../../assets/adaptive-icon.png")} // Imagem local, pasta assets
                source={avatar} // Imagem externa, url
            />
            <View>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.email}>{email}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        borderWidth: 1,
        borderColor: "#d1d1d1",
        borderStyle: "solid",
        borderRadius: 20,
        flexDirection: "row",
        padding: 16,
        gap: 10,
        marginBottom: 20,
        width: "80%",
    },
    avatar:{
        backgroundColor: "#d0eaf1",
        borderRadius: 20, 
        width: 40,
        height: 40
    },
    name: {
        fontSize: 16,
        fontWeight: "700"
    },
    email: {
        fontSize: 14,
        color: "#505050"
    }
})
>>>>>>> 05782c2b7dd592fc2bcfb52e7fc3786d08585729
