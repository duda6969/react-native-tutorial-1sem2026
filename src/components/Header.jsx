import {View, Text, StyleSheet} from 'react-native'
<<<<<<< HEAD
import AntDesign from '@expo/vector-icons/AntDesign';
=======
import FontAwesome from '@expo/vector-icons/FontAwesome'
>>>>>>> 05782c2b7dd592fc2bcfb52e7fc3786d08585729

export default function Header(){
    return (
        <View style={styles.container}>
<<<<<<< HEAD
          <AntDesign name="bug" size={24} color="magenta" />
            <Text style={styles.logotipo}>Magenta</Text>
=======
            <FontAwesome style={styles.logo} name="users" size={26} color="#e7612b" />
            <Text style={styles.logotipo}>Logo</Text>
>>>>>>> 05782c2b7dd592fc2bcfb52e7fc3786d08585729
        </View>
    )
}

<<<<<<< HEAD
const styles = StyleSheet.create({// css in js
=======
const styles = StyleSheet.create({ // CSS in JS
>>>>>>> 05782c2b7dd592fc2bcfb52e7fc3786d08585729
    container: {
        flexDirection: "row",
        backgroundColor: "#000000",
        width: "100%",
        height: 46,
        marginBottom: 16,
        alignItems: "center",
        paddingHorizontal: 16
        //justifyContent: "center",
    },
    logo:{
        marginRight: 14
    },
    logotipo: {
        color: "#FFF"
    }
})