// App.js
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { enableScreens } from 'react-native-screens';
import * as Font from 'expo-font'; 


enableScreens();
import Splash from './screens/Splash';
import Bienvenida from './screens/Bienvenida';
import Nombre from './screens/Nombre';
import Menu from './screens/Menu';
import Ingreso from './screens/Ingreso';
import Resultados from './screens/Resultados';
import Chat from './screens/Chat';

const Stack = createStackNavigator();

const App = () => {

  useEffect(() => {
    // Carga la fuente personalizada al inicio de la aplicación
    loadFonts();
  }, []);

  // Función para cargar las fuentes personalizadas
  const loadFonts = async () => {
    await Font.loadAsync({
      'LilitaOne-Regular': require('./assets/fonts/lili/LilitaOne-Regular.ttf'),
      'Comfortaa-VariableFont_wght': require('./assets/fonts/com/Comfortaa-VariableFont_wght.ttf')
    });
  };
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
        <Stack.Screen name="Bienvenida" component={Bienvenida} />
        <Stack.Screen name="Nombre" component={Nombre} />
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="Ingreso" component={Ingreso} />
        <Stack.Screen name="Resultados" component={Resultados} />
        <Stack.Screen name="Chat" component={Chat} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
