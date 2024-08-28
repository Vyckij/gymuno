// screens/Splash.js
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

const Splash = ({ navigation }) => {

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Bienvenida'); 
    }, 3000); // Espera 3 segundos antes de navegar

    return () => clearTimeout(timer); // Limpiar el temporizador si el componente se desmonta
  }, [navigation]);
  return (
    <ImageBackground source={require('../assets/mosaico.png')} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Cargando...</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    alignItems: 'center',
  },
  title: {
    fontFamily: 'MontserratAlternates-BoldItalic',
    fontSize: 20,
    color: 'black',
    marginBottom: 10,
    marginTop:600,
  },
});
export default Splash;