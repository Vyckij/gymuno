// screens/Bienvenida.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';


const Bienvenida = ({ navigation }) => {
  return (
    <ImageBackground source={require('../assets/inicioww.png')}  
    style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>GYMBRO</Text>
        <Text style={styles.subtitle}>Tu coach de bolsillo</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Nombre')}>
          <Text style={styles.buttonText}>Continuar</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    alignItems: 'center',
    marginTop: 400 
  },
  title: {
    fontFamily: 'LilitaOne-Regular',
    fontSize: 50,
    color: 'black',
    marginBottom: 10
  },
  subtitle: {
    fontSize: 20,
    color: 'black',
    marginBottom: 120
  },
  button: {
    backgroundColor: 'white',
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 120,
    marginTop: 10,
    borderColor: 'black', // Agrega el color del borde
    borderWidth: 2, // Define el ancho del borde
  },
  buttonText: {
    color: 'black',
    fontSize: 18
    //textTransform: 'uppercase'
  }
});

export default Bienvenida;
