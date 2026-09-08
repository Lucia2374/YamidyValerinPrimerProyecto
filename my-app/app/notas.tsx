import { useState } from "react"
import { View, Text, TextInput, Pressable, StyleSheet, ScrollView } from "react-native"
import { router } from "expo-router"
import { MenuOpciones } from "@/components/menu-opciones"
import { MenuColors } from "@/constants/theme"

const limpiarNota = (texto: string)=>{
    let limpio = texto.replace(/[^0-9.]/g, "")
    const partes = limpio.split(".")
    if (partes.length > 2) {
        limpio = partes[0] + "." + partes.slice(1).join("")
    }
    return limpio
}

const validarNota = (valor: string): string | null =>{
    if (valor.trim() === "") {
        return null
    }
    const numero = parseFloat(valor)
    if (isNaN(numero) || numero < 0 || numero > 5) {
        return "La nota debe estar entre 0.0 y 5.0"
    }
    return null
}

const CalculadoraNotas = ()=>{
    const [notas, setNotas] = useState(["", "", ""])

    const cambiarNota = (indice: number, valor: string)=>{
        const copia = [...notas]
        copia[indice] = limpiarNota(valor)
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

    const hayError = notas.some((nota)=> validarNota(nota) !== null)

    const verPromedio = ()=>{
        if (hayError) {
            return
        }

        const numeros = notas
            .map((n)=> parseFloat(n))
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
        <View style={[styles.pantalla]}>
            <MenuOpciones />
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
                    {validarNota(nota) && <Text style={[styles.error]}>{validarNota(nota)}</Text>}
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
        </View>
    );
}

const styles = StyleSheet.create({
    pantalla:{
        flex:1,
        backgroundColor:MenuColors.fondo
    },
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
    error:{
        color:"#c62828",
        fontSize:13,
        marginTop:4
    },
    filaBotones:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginTop:8,
        marginBottom:16
    },
    botonSecundario:{
        borderWidth:1,
        borderColor:MenuColors.boton,
        borderRadius:8,
        paddingVertical:10,
        paddingHorizontal:16
    },
    textoBotonSecundario:{
        color:MenuColors.boton,
        fontSize:14
    },
    boton:{
        backgroundColor:MenuColors.boton,
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
