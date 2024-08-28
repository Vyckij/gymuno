// screens/Nombre.js
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ImageBackground, KeyboardAvoidingView, Platform } from 'react-native';

const Nombre = ({ navigation }) => {
  const [name, setName] = useState('');
  return (
    <ImageBackground source={require('../assets/fondoblanco.png')}  
      style={styles.background}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={10}
      >
        <Text style={styles.title1}>¡Hola!</Text>
        <View style={styles.innerContainer}>
          <Text style={styles.title2}>¿Cuál es tu nombre?</Text>
          <TextInput
            style={styles.input}
            placeholder="Escribe tu nombre o un alias"
            placeholderTextColor="#888" // Color del texto del marcador de posición
            value={name}
            onChangeText={setName}
          />
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Menu')}>
            <Text style={styles.buttonText}>Continuar</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover', // Ajusta la imagen de fondo al tamaño del contenedor
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    marginTop: 10 
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title1: {
    fontSize: 40,
    fontFamily: 'MontserratAlternates-BoldItalic',
    marginTop: 5, // Ajusta este valor según sea necesario
    marginBottom: 300,
  },
  title2: {
    fontFamily: 'MontserratAlternates-BoldItalic',
    fontSize: 20,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 90,
    color: 'black', // Color del texto dentro del TextInput
  },
  button: {
    backgroundColor: 'white',
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 120,
    marginTop: 120,
    borderColor: 'black', // Agrega el color del borde
    borderWidth: 2, // Define el ancho del borde
  },
  buttonText: {
    color: 'black',
    fontSize: 18,
    //textTransform: 'uppercase'
  }
});

export default Nombre;
