import { View, Text, StyleSheet } from "react-native"

const TablasMultiplicar = ()=>{
    return (
        <View style={[styles.contenedor]}>
            <Text style={[styles.titulo]}>Tablas de multiplicar</Text>
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

export default TablasMultiplicar
