import { Text, View, Image  } from 'react-native';
import { estilos } from "./CardStyles";
import { deleteCiudad } from '../../redux/actions/actions';
import { useDispatch, useSelector } from "react-redux";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { insertCiudad } from "../../src/db/";
import { addCiudadFavorita } from '../../redux/actions/actions';



export const cesto = require("../../assets/cesto.png");
const guardar = require("../../assets/guardar.png");


export default function Card({navigation, ciudad}) {

  const dispatch = useDispatch();
  const ciudadesFavoritas = useSelector(state => state.favoritos.ciudadesFavoritas);
  const handleGuardarCiudad = () => {
  const ciudadExistente = ciudadesFavoritas.find(c => c.name === ciudad.name);
    if (ciudadExistente) {
      alert('La ciudad ya se encuentra en favoritos');
    } else {
      insertCiudad(ciudad.name, ciudad.feel, ciudad.weather, ciudad.img, ciudad.temp)
        .then(() => {
          alert('Ciudad guardada exitosamente');
          dispatch(addCiudadFavorita(ciudad));
        })
        .catch(error => {
          console.log('Error al guardar la ciudad:', error);
        });
    }
  };
  
  function onPresshandler(){
    dispatch(deleteCiudad(ciudad))
  }

  return (
    <View style={estilos.container} onTouchEnd={() => navigation.navigate("Details", ciudad)}>
        <View style={estilos.allContainer}>
            <View style={estilos.infoContainer}>
                <View style={estilos.tituloContainer}>
                    <Text style={estilos.titulo}>{ciudad.name}</Text>
                </View>
                <View style={estilos.datosContainer}>
                    <Text style={estilos.datos}>Sensación térmica: {ciudad.feel}°</Text>
                    <Text style={estilos.datos}>{ciudad.weather}</Text>
                </View>
            </View>
        </View>
        <View style={estilos.imageContainer}>
            <Image source={{uri:`https://openweathermap.org/img/wn/${ciudad.img}@2x.png`}} 
                style={{height:"100%", width:"100%"}}
            />
        </View>
        <View style={estilos.tempContainer}>
                    <Text style={estilos.temp}>{ciudad.temp}°</Text>
        </View>
       
        <View style={estilos.boton}>
          <TouchableOpacity onPress={() => onPresshandler()}>
           <Image source = {cesto} />
          </TouchableOpacity>
        </View>
        <View style={estilos.boton}>
          <TouchableOpacity onPress={() => handleGuardarCiudad()}>
           <Image source = {guardar} />
          </TouchableOpacity>
        </View>
    </View>
  );
}
