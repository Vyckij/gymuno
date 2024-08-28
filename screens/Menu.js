// screens/Menu.js
import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, ImageBackground, Image } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const Menu = ({ navigation }) => {
  return (
    <ImageBackground source={require('../assets/fondo2.png')} style={styles.background}>
      <View style={styles.container}>
        {/* Imagen en la esquina superior derecha */}
        <Image source={require('../assets/logogym.png')} style={styles.logo} />
        <Text style={styles.title}>Inicio</Text>
        <View style={styles.introContainer}>
          <Text style={styles.intro1}>
            Bienvenido! 
          </Text>
          <Text style={styles.intro2}>
            Aquí podrás explorar herramientas que transformarán tu viaje en el mundo del fitness.
          </Text>
        </View>
        <Text style={styles.title2}>Mis herramientas</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={[styles.button, styles.calcularLayout]} onPress={() => navigation.navigate('Ingreso')}>
            <Text style={styles.buttonText1}>
              <Ionicons name="calculator" size={50} color="#C39BD3" />
              Calcular
            </Text>
            <Text style={styles.buttonText2}>                  </Text>
            <Text style={styles.buttonText2}>Aquí podras calcular tu peso ideal</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.coachLayout]} onPress={() => navigation.navigate('Chat')}>
            <Text style={styles.buttonText1}>
              Coach<Ionicons name="body" size={50} color="#F8C471" />
            </Text>
            <Text style={styles.buttonText2}>                  </Text>
            <Text style={styles.buttonText2}>Habla con tu coach</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.frase}>El momento perfecto para empezar es hoy.</Text>
      </View>
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
    justifyContent: 'flex-start',
    padding: 30, // Añade un poco de relleno al contenedor principal
  },
  logo: {
    position: 'absolute',
    top: 10,
    right: 10,
    width: 50, 
    height: 50,
  },
  title: {
    fontFamily: 'MontserratAlternates-BoldItalic',
    fontSize: 30,
    color: 'black',
    marginBottom: 20,
    marginTop: 80,
  },
  introContainer: {
    backgroundColor: 'white', // Fondo del cuadro
    padding: 15,
    borderRadius: 20,
    marginBottom: 120,
    borderWidth: 4, // Grosor del borde
    borderColor: '#7FB3D5', // Color del borde
  },
  intro1: {
    fontFamily: 'MontserratAlternates-BoldItalic',
    fontSize: 16,
    color: 'black',
    marginBottom: 20,
    fontWeight: 'bold', // Negrita para el texto de intro1
  },
  intro2: {
    fontFamily: 'MontserratAlternates-Regular',
    fontSize: 15,
    color: 'black',
    textAlign: 'left', // Alinear el texto de intro2 a la izquierda
  },
  title2: {
    fontFamily: 'MontserratAlternates-BoldItalic',
    fontSize: 25,
    color: 'black',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row', // Alinear los botones horizontalmente
    alignItems: 'center', // Centrar los elementos verticalmente
    marginBottom: 10, // Separación entre los botones
  },
  button: {
    backgroundColor: 'white',
    borderRadius: 25,
    paddingVertical: 30,
    paddingHorizontal: 10,
    marginHorizontal: 2, // Margen horizontal entre los botones
    flex: 1, // Hace que los botones ocupen el mismo espacio horizontalmente
    borderWidth: 2, // Grosor del borde
    borderColor: '#7FB3D5', // Color del borde
  },
  calcularLayout: {
    marginRight: 10, // Margen derecho solo para el botón "Calcular"
  },
  coachLayout: {
    marginLeft: 10, // Margen izquierdo solo para el botón "Coach"
  },
  buttonText1: {
    color: '#7FB3D5',
    fontSize: 15,
    textAlign: 'center', // Alinear texto al centro dentro de los botones
    fontWeight: 'bold'
  },
  buttonText2: {
    fontFamily: 'MontserratAlternates-BoldItalic',
    color: 'black',
    fontSize: 12,
    textAlign: 'center', // Alinear texto al centro dentro de los botones
  },
  frase: {
    fontFamily: 'MontserratAlternates-BoldItalic',
    color: 'black',
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 150,
    textAlign: 'center', // Alinear texto al centro dentro de los botones
  },
});

export default Menu;
