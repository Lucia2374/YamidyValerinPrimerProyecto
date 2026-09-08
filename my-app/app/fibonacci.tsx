import { useState } from "react"
import { View, Text, TextInput, Pressable, StyleSheet, ScrollView } from "react-native"

const Fibonacci = ()=>{
    const [cantidad, setCantidad] = useState("")
    const [serie, setSerie] = useState<number[]>([])

    const calcular = ()=>{
        const n = parseInt(cantidad, 10)
        if (isNaN(n) || n <= 0) {
            setSerie([])
            return
        }
        const resultado: number[] = []
        for (let i = 0; i < n; i++) {
            if (i < 2) {
                resultado.push(i)
            } else {
                resultado.push(resultado[i - 1] + resultado[i - 2])
            }
        }
        setSerie(resultado)
    }

    return (
        <ScrollView contentContainerStyle={[styles.contenedor]}>
            <Text style={[styles.titulo]}>Serie de Fibonacci</Text>
            <Text style={[styles.etiqueta]}>¿Cuántos términos quieres?</Text>
            <TextInput
                style={[styles.input]}
                keyboardType="numeric"
                value={cantidad}
                onChangeText={setCantidad}
                placeholder="Ej: 10"
            />
            <Pressable style={[styles.boton]} onPress={calcular}>
                <Text style={[styles.textoBoton]}>Calcular</Text>
            </Pressable>

            {serie.length > 0 && (
                <View style={[styles.resultado]}>
                    <Text style={[styles.etiqueta]}>Resultado:</Text>
                    <Text style={[styles.serie]}>{serie.join(", ")}</Text>
                </View>
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
        width:"100%"
    },
    serie:{
        fontSize:16
    }
})

export default Fibonacci
