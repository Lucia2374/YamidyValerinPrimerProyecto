import { useState } from 'react';
import { Link } from 'expo-router';
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';

import { Fonts, MenuColors } from '@/constants/theme';

export function MenuOpciones() {
  const [visible, setVisible] = useState(false);

  return (
    <View style={styles.barra}>
      <Pressable style={styles.boton} onPress={() => setVisible(true)}>
        <Text style={styles.textoBoton}>☰ Menú</Text>
      </Pressable>

      <Modal visible={visible} animationType="fade" transparent onRequestClose={() => setVisible(false)}>
        <View style={styles.fondo}>
          <View style={styles.tarjeta}>
            <Text style={styles.titulo}>Elige una opción</Text>

            <Link href="/fibonacci" style={styles.opcion} onPress={() => setVisible(false)}>
              1. Serie de Fibonacci
            </Link>
            <Link href="/factorial" style={styles.opcion} onPress={() => setVisible(false)}>
              2. Factorial
            </Link>
            <Link href="/tablas" style={styles.opcion} onPress={() => setVisible(false)}>
              3. Tablas del 1 al 10
            </Link>
            <Link href="/notas" style={styles.opcion} onPress={() => setVisible(false)}>
              4. Calculadora de notas
            </Link>
            <Link href="/datos" style={styles.opcion} onPress={() => setVisible(false)}>
              5. Datos de una persona
            </Link>

            <Pressable style={styles.cerrar} onPress={() => setVisible(false)}>
              <Text style={styles.textoCerrar}>Cerrar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  barra: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 12,
    backgroundColor: MenuColors.fondo,
  },
  boton: {
    backgroundColor: MenuColors.boton,
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 8,
  },
  textoBoton: {
    color: MenuColors.botonTexto,
    fontSize: 14,
    fontWeight: 'bold',
  },
  fondo: {
    flex: 1,
    backgroundColor: 'rgba(74, 55, 40, 0.45)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tarjeta: {
    backgroundColor: MenuColors.tarjeta,
    borderRadius: 16,
    padding: 22,
    width: '85%',
  },
  titulo: {
    fontSize: 20,
    fontFamily: Fonts.serif,
    marginBottom: 18,
    textAlign: 'center',
    color: MenuColors.titulo,
  },
  opcion: {
    fontSize: 16,
    color: MenuColors.botonTexto,
    backgroundColor: MenuColors.boton,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 10,
    marginBottom: 10,
    textAlign: 'center',
    overflow: 'hidden',
  },
  cerrar: {
    marginTop: 4,
    paddingVertical: 10,
    alignItems: 'center',
  },
  textoCerrar: {
    color: MenuColors.boton,
    fontSize: 15,
    fontWeight: 'bold',
  },
});
