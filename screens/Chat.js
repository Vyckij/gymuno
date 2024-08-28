// screens/Chat.js
import React, { useState } from 'react';
import { View, TextInput, FlatList, Text, StyleSheet, TouchableOpacity, ImageBackground, KeyboardAvoidingView, Platform , Image} from 'react-native';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [inputHeight, setInputHeight] = useState(40); // Altura inicial del TextInput

  const sendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { sender: 'Usuario', text: input }, { sender: 'GYM BRO', text: 'Mensaje automático' }]);
      setInput('');
      setInputHeight(40); // Restablecer la altura del TextInput
    }
  };

  return (
    <ImageBackground source={require('../assets/fondo1.png')} style={styles.background}>
      <View style={styles.logoContainer}>
        <Image source={require('../assets/logogym.png')} style={styles.logo} />
      </View>
      <Text style={styles.title}>GYMBRO</Text>
      <View style={styles.horizontalLine} />
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={90}
      >
        <FlatList
          data={messages}
          renderItem={({ item }) => (
            <View style={item.sender === 'Usuario' ? styles.userMessageContainer : styles.gymBroMessageContainer}>
              <Text style={item.sender === 'Usuario' ? styles.userMessage : styles.gymBroMessage}>{item.text}</Text>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
        <TextInput
          style={[styles.input, { height: Math.max(40, inputHeight) }]}
          placeholder="Escribe tu mensaje aquí"
          value={input}
          onChangeText={setInput}
          multiline
          onContentSizeChange={(e) => setInputHeight(e.nativeEvent.contentSize.height)}
        />
        <TouchableOpacity style={styles.button} onPress={sendMessage}>
          <Text style={styles.buttonText}>Enviar</Text>
        </TouchableOpacity>
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
  logoContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  logo: {
    width: 50, // Ajusta el tamaño de la imagen según sea necesario
    height: 50,
  },
  title: {
    fontFamily: 'LilitaOne-Regular',
    fontSize: 30,
    color: 'gray',
    marginTop: 20, // Ajusta este valor según sea necesario para alejar el título del margen superior
    textAlign: 'center',
  },
  horizontalLine: {
    width: '100%', // Ajusta el ancho de la línea según sea necesario
    height: 0.5,
    backgroundColor: 'gray',
    marginVertical: 5, // Ajusta este valor según sea necesario para separar la línea del título
    alignSelf: 'center',
  },
  container: {
    flex: 1,
    width: '100%',
    padding: 20,
    justifyContent: 'flex-end', // Mueve los mensajes hacia arriba
  },
  messageContainer: {
    marginVertical: 10,
    maxWidth: '66.67%', // Limita el ancho de los mensajes a 2/3 de la pantalla
  },
  userMessageContainer: {
    alignSelf: 'flex-end', // Alinea los mensajes del usuario a la derecha
    backgroundColor: '#f5fffa',
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
    maxWidth: '66.67%', // Limita el ancho de los mensajes a 2/3 de la pantalla
    borderWidth: 2, // Grosor del borde
    borderColor: '#7FB3D5', // Color del borde
  },
  gymBroMessageContainer: {
    alignSelf: 'flex-start', // Alinea los mensajes de GYM BRO a la izquierda
    backgroundColor: '#7FB3D5',
    padding: 10,
    borderRadius: 7,
    marginVertical: 5,
    maxWidth: '66.67%', // Limita el ancho de los mensajes a 2/3 de la pantalla
  },
  userMessage: {
    color: 'black',
    fontFamily: 'MontserratAlternates-BoldItalic',
  },
  gymBroMessage: {
    color: 'black',
    fontFamily: 'MontserratAlternates-BoldItalic',
  },
  input: {
    width: '100%',
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 20,
    marginBottom: 20,
    fontFamily: 'MontserratAlternates-BoldItalic',
  },
  button: {
    backgroundColor: 'white',
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 40,
    alignSelf: 'flex-end',
    marginBottom: 60,
    borderWidth: 2, // Grosor del borde
    borderColor: 'black', // Color del borde
  },
  buttonText: {
    color: 'black',
    fontSize: 15,
    fontFamily: 'MontserratAlternates-BoldItalic',
    fontWeight: 'bold'
  },
});

export default Chat;
