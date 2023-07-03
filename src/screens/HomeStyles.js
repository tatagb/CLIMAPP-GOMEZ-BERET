import { StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const estilos = StyleSheet.create({

  fondo: {
    flex: 1,
    resizeMode: 'cover', // Para ajustar la imagen al tamaño del componente
  },
    container: {
        display: 'flex',
        alignItems: 'center',
        // justifyContent: 'center',
        flexDirection: "column",
        height: "100%",
        width: "100%"
      },
    cardContainer: {
        // backgroundColor: "#566573",
        height: "85%",
        width:"95%",
    },
    searchContainer: {
        backgroundColor: "#000",
        width: "100%",
        height: 80,
        marginBottom: "5%",
        display: 'flex',
        flexDirection: "column",
        justifyContent: 'center',
    },
    titulo: {
      color: "white",
      fontSize: 24,
      fontFamily: "Arial",
  },
  });
  

export {estilos};