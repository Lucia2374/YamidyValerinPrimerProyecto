import { useState } from "react"
import { View, Text, TextInput, Pressable, StyleSheet, ScrollView } from "react-native"
import { router } from "expo-router"

const CalculadoraNotas = ()=>{
    const [notas, setNotas] = useState(["", "", ""])

    const cambiarNota = (indice: number, valor: string)=>{
        const copia = [...notas]
        copia[indice] = valor
        setNotas(copia)
    }

    const agregarNota = ()=>{
        setNotas([...notas, ""])
    }

    const quitarNota = ()=>{
        if (notas.length > 1) {
            setNotas(notas.slice(0, -1))
        }
    }

    const verPromedio = ()=>{
        const numeros = notas
            .map((n)=> parseFloat(n.replace(",", ".")))
            .filter((n)=> !isNaN(n))

        if (numeros.length === 0) {
            return
        }

        router.push({
            pathname: "/promedio",
            params: { notas: JSON.stringify(numeros) }
        })
    }

    return (
        <ScrollView contentContainerStyle={[styles.contenedor]}>
            <Text style={[styles.titulo]}>Ingresa tus notas</Text>

            {notas.map((nota, indice)=>(
                <View key={indice} style={[styles.filaNota]}>
                    <Text style={[styles.etiqueta]}>Nota {indice + 1}</Text>
                    <TextInput
                        style={[styles.input]}
                        keyboardType="decimal-pad"
                        value={nota}
                        onChangeText={(valor)=> cambiarNota(indice, valor)}
                        placeholder="0.0 a 5.0"
                    />
                </View>
            ))}

            <View style={[styles.filaBotones]}>
                <Pressable style={[styles.botonSecundario]} onPress={agregarNota}>
                    <Text style={[styles.textoBotonSecundario]}>Agregar nota</Text>
                </Pressable>
                <Pressable style={[styles.botonSecundario]} onPress={quitarNota}>
                    <Text style={[styles.textoBotonSecundario]}>Quitar nota</Text>
                </Pressable>
            </View>

            <Pressable style={[styles.boton]} onPress={verPromedio}>
                <Text style={[styles.textoBoton]}>Ver promedio</Text>
            </Pressable>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    contenedor:{
        flexGrow:1,
        justifyContent:"center",
        padding:20
    },
    titulo:{
        fontSize:20,
        fontWeight:"bold",
        marginBottom:16,
        textAlign:"center"
    },
    filaNota:{
        marginBottom:12
    },
    etiqueta:{
        fontSize:14,
        marginBottom:6
    },
    input:{
        borderWidth:1,
        borderColor:"#ccc",
        borderRadius:8,
        paddingVertical:10,
        paddingHorizontal:12
    },
    filaBotones:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginTop:8,
        marginBottom:16
    },
    botonSecundario:{
        borderWidth:1,
        borderColor:"#0a7ea4",
        borderRadius:8,
        paddingVertical:10,
        paddingHorizontal:16
    },
    textoBotonSecundario:{
        color:"#0a7ea4",
        fontSize:14
    },
    boton:{
        backgroundColor:"#0a7ea4",
        paddingVertical:12,
        paddingHorizontal:24,
        borderRadius:8,
        alignItems:"center"
    },
    textoBoton:{
        color:"#fff",
        fontSize:16
    }
})

export default CalculadoraNotas
