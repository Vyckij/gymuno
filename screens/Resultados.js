import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, ImageBackground, Image } from 'react-native';

const Resultados = ({ navigation }) => {
  return (
    <ImageBackground source={require('../assets/fondo3.png')} style={styles.background}>
      <View style={styles.container}>
        <Image source={require('../assets/logogym.png')} style={styles.logo} />
        <Text style={styles.title1}>Tu peso ideal es </Text>
        
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Menu')}>
            <Text style={styles.buttonText}>MENÚ</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Ingreso')}>
            <Text style={styles.buttonText}>CALCULAR NUEVO</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'space-between', // Distribuye los elementos verticalmente
    padding: 30,
    width: '100%',
  },
  logo: {
    position: 'absolute',
    top: 10,
    right: 10,
    width: 50,
    height: 50,
  },
  title1: {
    fontFamily: 'MontserratAlternates-BoldItalic',
    fontSize: 30,
    color: 'black',
    marginBottom: 100,
    marginTop: 70,
    textAlign: 'left',
    width: '100%', // Asegura que el título ocupe todo el ancho disponible
  },
  buttonContainer: {
    paddingBottom: 30, // Añade espacio desde el borde inferior
  },
  button: {
    backgroundColor: 'white',
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 100,
    marginVertical: 10,
    alignSelf: 'center', // Centra los botones horizontalmente
  },
  buttonText: {
    color: 'black',
    fontSize: 18,
    textTransform: 'uppercase'
  }
});

export default Resultados;
