import { useState } from "react"
import { Text, TextInput, Pressable, StyleSheet, ScrollView } from "react-native"

const Factorial = ()=>{
    const [numero, setNumero] = useState("")
    const [resultado, setResultado] = useState<string | null>(null)

    const calcular = ()=>{
        const n = parseInt(numero, 10)
        if (isNaN(n) || n < 0) {
            setResultado(null)
            return
        }
        let factorial = 1
        for (let i = 2; i <= n; i++) {
            factorial = factorial * i
        }
        setResultado(`${n}! = ${factorial}`)
    }

    return (
        <ScrollView contentContainerStyle={[styles.contenedor]}>
            <Text style={[styles.titulo]}>Factorial</Text>
            <Text style={[styles.etiqueta]}>Escribe un número:</Text>
            <TextInput
                style={[styles.input]}
                keyboardType="numeric"
                value={numero}
                onChangeText={setNumero}
                placeholder="Ej: 5"
            />
            <Pressable style={[styles.boton]} onPress={calcular}>
                <Text style={[styles.textoBoton]}>Calcular</Text>
            </Pressable>

            {resultado !== null && (
                <Text style={[styles.resultado]}>{resultado}</Text>
            )}
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
        marginBottom:8
    },
    input:{
        borderWidth:1,
        borderColor:"#ccc",
        borderRadius:8,
        paddingVertical:10,
        paddingHorizontal:12,
        width:"100%",
        marginBottom:12
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
    },
    resultado:{
        marginTop:24,
        fontSize:18,
        fontWeight:"bold"
    }
})

export default Factorial
