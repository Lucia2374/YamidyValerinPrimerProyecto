import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Link, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/use-color-scheme';
import { MenuColors } from '@/constants/theme';

export const unstable_settings = {
  anchor: 'index',
};

const BotonMenu = () => (
  <Link href="/" dismissTo style={styles.botonMenu}>
    ←
  </Link>
);

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />
        <Stack.Screen name="fibonacci" options={{ title: 'Fibonacci', headerLeft: BotonMenu }} />
        <Stack.Screen name="factorial" options={{ title: 'Factorial', headerLeft: BotonMenu }} />
        <Stack.Screen name="tablas" options={{ title: 'Tablas de multiplicar', headerLeft: BotonMenu }} />
        <Stack.Screen name="notas" options={{ title: 'Calculadora de notas', headerLeft: BotonMenu }} />
        <Stack.Screen name="promedio" options={{ title: 'Promedio' }} />
        <Stack.Screen name="datos" options={{ title: 'Datos de una persona', headerLeft: BotonMenu }} />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  botonMenu: {
    color: MenuColors.boton,
    fontSize: 22,
    fontWeight: 'bold',
    paddingRight: 16,
  },
});
