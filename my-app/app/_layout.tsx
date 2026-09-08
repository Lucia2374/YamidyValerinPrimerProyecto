import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/use-color-scheme';

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />
        <Stack.Screen name="fibonacci" options={{ title: 'Fibonacci' }} />
        <Stack.Screen name="factorial" options={{ title: 'Factorial' }} />
        <Stack.Screen name="tablas" options={{ title: 'Tablas de multiplicar' }} />
        <Stack.Screen name="notas" options={{ title: 'Calculadora de notas' }} />
        <Stack.Screen name="promedio" options={{ title: 'Promedio' }} />
        <Stack.Screen name="datos" options={{ title: 'Datos de una persona' }} />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
