import { View, Text, StyleSheet } from "react-native"

const Fibonacci = ()=>{
    return (
        <View style={[styles.contenedor]}>
            <Text style={[styles.titulo]}>Serie de Fibonacci</Text>
            <Text style={[styles.subtitulo]}>Próximamente</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    contenedor:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    },
    titulo:{
        fontSize:20,
        fontWeight:"bold"
    },
    subtitulo:{
        fontSize:14,
        marginTop:8
    }
})

export default Fibonacci
