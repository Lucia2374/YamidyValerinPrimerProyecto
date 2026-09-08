import { useState } from "react"
import { View, Text, TextInput, Pressable, StyleSheet, ScrollView } from "react-native"
import { MenuOpciones } from "@/components/menu-opciones"
import { MenuColors } from "@/constants/theme"

const Factorial = ()=>{
    const [numero, setNumero] = useState("")
    const [resultado, setResultado] = useState<string | null>(null)
    const [error, setError] = useState<string | null>(null)

    const cambiarNumero = (valor: string)=>{
        setNumero(valor.replace(/[^0-9]/g, ""))
    }

    const calcular = ()=>{
        if (numero.trim() === "") {
            setError("Ingresa un número (sin letras ni negativos)")
            setResultado(null)
            return
        }
        const n = parseInt(numero, 10)
        if (isNaN(n) || n < 0) {
            setError("El número no puede ser negativo")
            setResultado(null)
            return
        }
        setError(null)
        let factorial = 1
        for (let i = 2; i <= n; i++) {
            factorial = factorial * i
        }
        setResultado(`${n}! = ${factorial}`)
    }

    return (
        <View style={[styles.pantalla]}>
            <MenuOpciones />
            <ScrollView contentContainerStyle={[styles.contenedor]}>
            <Text style={[styles.titulo]}>Factorial</Text>
            <Text style={[styles.etiqueta]}>Escribe un número:</Text>
            <TextInput
                style={[styles.input]}
                keyboardType="numeric"
                value={numero}
                onChangeText={cambiarNumero}
                placeholder="Ej: 5"
            />
            {error && <Text style={[styles.error]}>{error}</Text>}

            <Pressable style={[styles.boton]} onPress={calcular}>
                <Text style={[styles.textoBoton]}>Calcular</Text>
            </Pressable>

            {resultado !== null && (
                <Text style={[styles.resultado]}>{resultado}</Text>
            )}
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
    error:{
        color:"#c62828",
        fontSize:13,
        marginBottom:12,
        alignSelf:"flex-start"
    },
    boton:{
        backgroundColor:MenuColors.boton,
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
