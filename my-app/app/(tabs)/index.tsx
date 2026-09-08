import { View, Text, StyleSheet } from "react-native"
import { Link } from "expo-router"

const Home = ()=>{
    return (
        <View style={[styles.contenedor]}>
            <Text style={[styles.titulo]}>Bienvenido a My App</Text>
            <Text style={[styles.subtitulo]}>Elige una opción</Text>

            <Link href="/fibonacci" style={[styles.opcion]}>Serie de Fibonacci</Link>
            <Link href="/factorial" style={[styles.opcion]}>Factorial</Link>
            <Link href="/tablas" style={[styles.opcion]}>Tablas de multiplicar</Link>
            <Link href="/notas" style={[styles.opcion]}>Calculadora de notas</Link>
            <Link href="/datos" style={[styles.opcion]}>Datos básicos</Link>
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
        fontSize:20,
        fontWeight:"bold"
    },
    subtitulo:{
        fontSize:14,
        marginTop:8,
        marginBottom:24
    },
    opcion:{
        fontSize:16,
        color:"#fff",
        backgroundColor:"#0a7ea4",
        paddingVertical:12,
        paddingHorizontal:24,
        borderRadius:8,
        marginBottom:12,
        width:"100%",
        textAlign:"center",
        overflow:"hidden"
    }
})

export default Home
