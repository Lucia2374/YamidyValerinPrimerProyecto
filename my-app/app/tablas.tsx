import { View, Text, StyleSheet, ScrollView } from "react-native"

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const TablasMultiplicar = ()=>{
    return (
        <ScrollView contentContainerStyle={[styles.contenedor]}>
            <Text style={[styles.titulo]}>Tablas de multiplicar (1 al 10)</Text>

            {numeros.map((base)=>(
                <View key={base} style={[styles.tabla]}>
                    <Text style={[styles.tituloTabla]}>Tabla del {base}</Text>
                    {numeros.map((factor)=>(
                        <Text key={factor} style={[styles.fila]}>
                            {base} x {factor} = {base * factor}
                        </Text>
                    ))}
                </View>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    contenedor:{
        alignItems:"center",
        padding:20
    },
    titulo:{
        fontSize:20,
        fontWeight:"bold",
        marginBottom:16
    },
    tabla:{
        width:"100%",
        marginBottom:20,
        padding:12,
        borderWidth:1,
        borderColor:"#ccc",
        borderRadius:8
    },
    tituloTabla:{
        fontSize:16,
        fontWeight:"bold",
        marginBottom:8
    },
    fila:{
        fontSize:14,
        marginBottom:2
    }
})

export default TablasMultiplicar
