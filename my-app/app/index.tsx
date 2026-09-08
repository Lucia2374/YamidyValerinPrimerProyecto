import { View, Text, StyleSheet } from "react-native"
import { Link } from "expo-router"
import { Fonts, MenuColors } from "@/constants/theme"

const Home = ()=>{
    return (
        <View style={[styles.contenedor]}>
            <Text style={[styles.titulo]}>Bienvenido a My App</Text>
            <Text style={[styles.subtitulo]}>Menú de navegación</Text>

            <Link href="/fibonacci" style={[styles.opcion]}>1. Serie de Fibonacci</Link>
            <Link href="/factorial" style={[styles.opcion]}>2. Factorial</Link>
            <Link href="/tablas" style={[styles.opcion]}>3. Tablas del 1 al 10</Link>
            <Link href="/notas" style={[styles.opcion]}>4. Calculadora de notas</Link>
            <Link href="/datos" style={[styles.opcion]}>5. Datos de una persona</Link>
        </View>
    );
}

const styles = StyleSheet.create({
    contenedor:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        padding:24,
        backgroundColor:MenuColors.fondo
    },
    titulo:{
        fontSize:26,
        fontFamily:Fonts.serif,
        color:MenuColors.titulo
    },
    subtitulo:{
        fontSize:14,
        marginTop:8,
        marginBottom:28,
        color:MenuColors.subtitulo
    },
    opcion:{
        fontSize:16,
        color:MenuColors.botonTexto,
        backgroundColor:MenuColors.boton,
        paddingVertical:14,
        paddingHorizontal:24,
        borderRadius:12,
        marginBottom:14,
        width:"100%",
        textAlign:"center",
        overflow:"hidden",
        shadowColor:"#000",
        shadowOffset:{ width:0, height:2 },
        shadowOpacity:0.15,
        shadowRadius:4,
        elevation:3
    }
})

export default Home
