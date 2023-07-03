import { StyleSheet } from 'react-native';

const estilos = StyleSheet.create({
    fondo: {
        flex: 1,
        resizeMode: 'cover', // Para ajustar la imagen al tamaño del componente
      },
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    card: {
        backgroundColor: "grey",
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 8,
      padding: 16,
      marginBottom: 16,
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 8,
    },
    image: {
      width: 50,
      height: 50,
      marginBottom: 8,
    },
  });

  export {estilos}