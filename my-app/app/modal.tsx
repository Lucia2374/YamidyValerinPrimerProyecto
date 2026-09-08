import { View, Text, StyleSheet } from "react-native"
import { Link } from "expo-router"

const Modal = ()=>{
    return (
        <View style={[styles.contenedor]}>
            <Text style={[styles.titulo]}>Esto es un modal</Text>
            <Link href="/" dismissTo>Ir a la pantalla de inicio</Link>
        </View>
    );
}

const styles = StyleSheet.create({
    contenedor:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        padding:20
    },
    titulo:{
        fontSize:18,
        marginBottom:15
    }
})

export default Modal
