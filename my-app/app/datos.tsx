import { useState } from "react"
import { View, Text, TextInput, Pressable, StyleSheet, ScrollView } from "react-native"
import { MenuOpciones } from "@/components/menu-opciones"
import { MenuColors } from "@/constants/theme"

const datosIniciales = {
    nombre: "Yamidy Valerín",
    edad: "20",
    email: "yamidy@correo.com",
    telefono: "3000000000",
    ocupacion: "Estudiante",
    direccion: "Calle 1 # 2-3"
}

const DatosPersona = ()=>{
    const [datos, setDatos] = useState(datosIniciales)
    const [formulario, setFormulario] = useState(datosIniciales)
    const [editando, setEditando] = useState(false)

    const mayorDeEdad = parseInt(datos.edad, 10) >= 18 ? "Sí" : "No"

    const cambiarCampo = (campo: string, valor: string)=>{
        setFormulario({ ...formulario, [campo]: valor })
    }

    const empezarEdicion = ()=>{
        setFormulario(datos)
        setEditando(true)
    }

    const guardar = ()=>{
        setDatos(formulario)
        setEditando(false)
    }

    if (editando) {
        return (
            <View style={[styles.pantalla]}>
                <MenuOpciones />
                <ScrollView contentContainerStyle={[styles.contenedor]}>
                <Text style={[styles.titulo]}>Editar datos</Text>

                <Text style={[styles.etiqueta]}>Nombre</Text>
                <TextInput
                    style={[styles.input]}
                    value={formulario.nombre}
                    onChangeText={(valor)=> cambiarCampo("nombre", valor)}
                />

                <Text style={[styles.etiqueta]}>Edad</Text>
                <TextInput
                    style={[styles.input]}
                    keyboardType="numeric"
                    value={formulario.edad}
                    onChangeText={(valor)=> cambiarCampo("edad", valor)}
                />

                <Text style={[styles.etiqueta]}>Email</Text>
                <TextInput
                    style={[styles.input]}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    value={formulario.email}
                    onChangeText={(valor)=> cambiarCampo("email", valor)}
                />

                <Text style={[styles.etiqueta]}>Teléfono</Text>
                <TextInput
                    style={[styles.input]}
                    keyboardType="phone-pad"
                    value={formulario.telefono}
                    onChangeText={(valor)=> cambiarCampo("telefono", valor)}
                />

                <Text style={[styles.etiqueta]}>Ocupación</Text>
                <TextInput
                    style={[styles.input]}
                    value={formulario.ocupacion}
                    onChangeText={(valor)=> cambiarCampo("ocupacion", valor)}
                />

                <Text style={[styles.etiqueta]}>Dirección</Text>
                <TextInput
                    style={[styles.input]}
                    value={formulario.direccion}
                    onChangeText={(valor)=> cambiarCampo("direccion", valor)}
                />

                <Pressable style={[styles.boton]} onPress={guardar}>
                    <Text style={[styles.textoBoton]}>Guardar</Text>
                </Pressable>
                </ScrollView>
            </View>
        );
    }

    return (
        <View style={[styles.pantalla]}>
            <MenuOpciones />
            <ScrollView contentContainerStyle={[styles.contenedor]}>
            <Text style={[styles.titulo]}>Datos de la persona</Text>

            <View style={[styles.fila]}>
                <Text style={[styles.etiqueta]}>Nombre</Text>
                <Text style={[styles.valor]}>{datos.nombre}</Text>
            </View>
            <View style={[styles.fila]}>
                <Text style={[styles.etiqueta]}>Edad</Text>
                <Text style={[styles.valor]}>{datos.edad}</Text>
            </View>
            <View style={[styles.fila]}>
                <Text style={[styles.etiqueta]}>Mayor de edad</Text>
                <Text style={[styles.valor]}>{mayorDeEdad}</Text>
            </View>
            <View style={[styles.fila]}>
                <Text style={[styles.etiqueta]}>Email</Text>
                <Text style={[styles.valor]}>{datos.email}</Text>
            </View>
            <View style={[styles.fila]}>
                <Text style={[styles.etiqueta]}>Teléfono</Text>
                <Text style={[styles.valor]}>{datos.telefono}</Text>
            </View>
            <View style={[styles.fila]}>
                <Text style={[styles.etiqueta]}>Ocupación</Text>
                <Text style={[styles.valor]}>{datos.ocupacion}</Text>
            </View>
            <View style={[styles.fila]}>
                <Text style={[styles.etiqueta]}>Dirección</Text>
                <Text style={[styles.valor]}>{datos.direccion}</Text>
            </View>

            <Pressable style={[styles.boton]} onPress={empezarEdicion}>
                <Text style={[styles.textoBoton]}>Cambiar</Text>
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
    fila:{
        marginBottom:12
    },
    etiqueta:{
        fontSize:13,
        color:"#666",
        marginBottom:4
    },
    valor:{
        fontSize:16
    },
    input:{
        borderWidth:1,
        borderColor:"#ccc",
        borderRadius:8,
        paddingVertical:10,
        paddingHorizontal:12,
        marginBottom:12
    },
    boton:{
        backgroundColor:MenuColors.boton,
        paddingVertical:12,
        paddingHorizontal:24,
        borderRadius:8,
        alignItems:"center",
        marginTop:8
    },
    textoBoton:{
        color:"#fff",
        fontSize:16
    }
})

export default DatosPersona
