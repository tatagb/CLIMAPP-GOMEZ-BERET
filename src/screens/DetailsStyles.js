import { StyleSheet } from 'react-native';
import { BaseAnimationBuilder } from 'react-native-reanimated';




const estilos = StyleSheet.create({
    fondo: {
        flex: 1,
        resizeMode: 'cover', // Para ajustar la imagen al tamaño del componente
      },

    container: {
        display: 'flex',
        flexDirection: "column",
        alignItems: 'center',
        width: "100%",
        height: "100%",
        marginBottom: 5,
    },
    card: {

        display: 'flex',
        flexDirection: "column",
        alignItems: 'center',
        // justifyContent: 'space-evenly',
        width: "95%",
        height: "80%",
        borderRadius: 20,
    },
    nav: {
        backgroundColor: "#000",
        width: "100%",
        height: 80,
        marginBottom: "5%",
        display: 'flex',
        flexDirection: "row",
        justifyContent: 'center',
    },
    contenedorTitulo: {
        // backgroundColor: "red",
        width: "80%",
        height: "20%",
        marginTop: "10%",
        display: 'flex',
        alignItems: 'center',
        justifyContent: "center",
    },
    titulo: {
        color: "white",
        fontSize: 45,
        fontStyle: "bolder",
    },
    contenedorImagen:{
        width: 150,
        height: 150,
        borderRadius: 20,
    },
    contenedorInfo: {
        backgroundColor: "#333",
        width: "90%",
        height: "30%",
        marginTop: "10%",
        display: 'flex',
        alignItems: 'center',
        justifyContent: "space-around",
        flexDirection: "row",
        borderRadius: 20,
    },
    contTituloInfo: {
        // backgroundColor: "blue",
        width: "60%",
        height: "100%",
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: "center",
    },
    contDatosInfo: {
        // backgroundColor: "green",
        width: "25%",
        height: "100%",
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: "center",
    },
    tituloInfo: {
        color: "white",
        fontSize: 15,
        marginLeft: "5%"
    },
    datos: {
        color: "white",
        fontSize: 15,
        marginLeft: "5%"
    }
  });
  

export {estilos};