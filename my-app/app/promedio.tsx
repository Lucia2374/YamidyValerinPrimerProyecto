import { Text, Pressable, StyleSheet, ScrollView } from "react-native"
import { router, useLocalSearchParams } from "expo-router"

const Promedio = ()=>{
    const { notas } = useLocalSearchParams<{ notas: string }>()

    let numeros: number[] = []
    try {
        numeros = JSON.parse(notas ?? "[]")
    } catch {
        numeros = []
    }

    const suma = numeros.reduce((total, n)=> total + n, 0)
    const promedio = numeros.length > 0 ? suma / numeros.length : 0
    const paso = promedio >= 3

    return (
        <ScrollView contentContainerStyle={[styles.contenedor]}>
            <Text style={[styles.titulo]}>Resultado</Text>

            <Text style={[styles.etiqueta]}>Notas ingresadas:</Text>
            <Text style={[styles.notas]}>{numeros.join(", ")}</Text>

            <Text style={[styles.promedio]}>Promedio: {promedio.toFixed(2)}</Text>

            <Text style={[paso ? styles.paso : styles.pierde]}>
                {paso ? "Pasó la materia" : "Perdió la materia"}
            </Text>

            <Pressable style={[styles.boton]} onPress={()=> router.back()}>
                <Text style={[styles.textoBoton]}>Volver</Text>
            </Pressable>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    contenedor:{
        flexGrow:1,
        alignItems:"center",
        justifyContent:"center",
        padding:20
    },
    titulo:{
        fontSize:20,
        fontWeight:"bold",
        marginBottom:16
    },
    etiqueta:{
        fontSize:14,
        marginBottom:4
    },
    notas:{
        fontSize:16,
        marginBottom:16
    },
    promedio:{
        fontSize:18,
        fontWeight:"bold",
        marginBottom:12
    },
    paso:{
        fontSize:18,
        fontWeight:"bold",
        color:"#2e7d32",
        marginBottom:24
    },
    pierde:{
        fontSize:18,
        fontWeight:"bold",
        color:"#c62828",
        marginBottom:24
    },
    boton:{
        backgroundColor:"#0a7ea4",
        paddingVertical:12,
        paddingHorizontal:24,
        borderRadius:8,
        width:"100%",
        alignItems:"center"
    },
    textoBoton:{
        color:"#fff",
        fontSize:16
    }
})

export default Promedio
