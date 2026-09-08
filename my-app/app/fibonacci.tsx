import { useState } from "react"
import { View, Text, TextInput, Pressable, StyleSheet, ScrollView } from "react-native"
import { MenuOpciones } from "@/components/menu-opciones"
import { MenuColors } from "@/constants/theme"

const Fibonacci = ()=>{
    const [cantidad, setCantidad] = useState("")
    const [serie, setSerie] = useState<number[]>([])
    const [error, setError] = useState<string | null>(null)

    const cambiarCantidad = (valor: string)=>{
        setCantidad(valor.replace(/[^0-9]/g, ""))
    }

    const calcular = ()=>{
        if (cantidad.trim() === "") {
            setError("Ingresa un número (sin letras ni negativos)")
            setSerie([])
            return
        }
        const n = parseInt(cantidad, 10)
        if (isNaN(n) || n <= 0) {
            setError("El número debe ser entero y mayor a 0")
            setSerie([])
            return
        }
        setError(null)
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
        <View style={[styles.pantalla]}>
            <MenuOpciones />
            <ScrollView contentContainerStyle={[styles.contenedor]}>
            <Text style={[styles.titulo]}>Serie de Fibonacci</Text>
            <Text style={[styles.etiqueta]}>¿Cuántos términos quieres?</Text>
            <TextInput
                style={[styles.input]}
                keyboardType="numeric"
                value={cantidad}
                onChangeText={cambiarCantidad}
                placeholder="Ej: 10"
            />
            {error && <Text style={[styles.error]}>{error}</Text>}

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
        width:"100%"
    },
    serie:{
        fontSize:16
    }
})

export default Fibonacci
