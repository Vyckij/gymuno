// screens/Ingreso.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, Image, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';

const Ingreso = ({ navigation }) => {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [genero, setGenero] = useState('');

  return (
    <ImageBackground source={require('../assets/fondo3.png')} style={styles.background}>
      <View style={styles.titleContainer}>
        <Image source={require('../assets/logogym.png')} style={styles.logo} />
        <Text style={styles.title1}>Conoce tu peso ideal</Text>
      </View>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}
      >
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.formContainer}>
            <TextInput
              style={styles.input}
              placeholder="Ingrese su altura en m"
              value={altura}
              onChangeText={setAltura}
              keyboardType="numeric"
            />
            <TextInput
              style={styles.input}
              placeholder="Ingrese su peso en kg"
              value={peso}
              onChangeText={setPeso}
              keyboardType="numeric"
            />
            <View style={styles.genderContainer}>
              <TouchableOpacity
                style={[styles.genderButtonH, genero === 'Hombre' && styles.selectedGenderH]}
                onPress={() => setGenero('Hombre')}
              >
                <Image source={require('../assets/iconoHombre.png')} style={styles.genderIcon} />
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.genderButtonM, genero === 'Mujer' && styles.selectedGenderM]}
                onPress={() => setGenero('Mujer')}
              >
                <Image source={require('../assets/iconoMujer.png')} style={styles.genderIcon} />
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Resultados')}>
              <Text style={styles.buttonText}>Calcular</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
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
  logo: {
    position: 'absolute',
    top: 10,
    right: 10,
    width: 50,
    height: 50,
  },
  titleContainer: {
    width: '100%',
    paddingHorizontal: 20,
  },
  title1: {
    fontFamily: 'MontserratAlternates-BoldItalic',
    fontSize: 30,
    color: 'black',
    marginBottom: 150,
    marginTop: 90,
    textAlign: 'left',
  },
  container: {
    flex: 1,
    width: '100%',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    width: '100%',
    paddingHorizontal: 80,
    alignItems: 'center',
  },
  input: {
    width: '100%',
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
  },
  genderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    marginBottom: 20,
  },
  genderButtonH: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 25,
    borderColor: '#7FB3D5',
    borderWidth: 5,
    width: 100,
    height: 100,
    marginHorizontal: 1,
  },
  genderButtonM: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 25,
    borderColor: '#d769ab',
    borderWidth: 5,
    width: 100,
    height: 100,
    marginHorizontal: 20,
  },
  genderIcon: {
    width: 30,
    height: 60,
  },
  selectedGenderH: {
    backgroundColor: '#7FB3D5',
  },
  selectedGenderM: {
    backgroundColor: '#d769ab',
  },
  button: {
    backgroundColor: 'white',
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 100,
    marginTop: 100,
    //borderColor: 'black',
    //borderWidth: 1,
  },
  buttonText: {
    color: 'black',
    fontSize: 18,
  },
});

export default Ingreso;
