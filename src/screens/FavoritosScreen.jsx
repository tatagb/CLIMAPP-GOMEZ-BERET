import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { View, Text, FlatList, Image, ImageBackground, TouchableOpacity } from "react-native";
import { estilos } from "./FavoritosStyles";
import { removeCiudadFavorita } from "../../redux/actions/actions";
import {cesto} from "../../components/Card/Card"


const fondoFavoritos = require("../../assets/fondoFavoritos.jpg");

const CiudadesFavoritasScreen = () => {

  const ciudadesFavoritas = useSelector(
    (state) => state.favoritos.ciudadesFavoritas
  );
  const dispatch = useDispatch();

  const handleRemoveCiudad = (ciudad) => {
    dispatch(removeCiudadFavorita(ciudad));
  }; 
  return (
    <ImageBackground source={fondoFavoritos} style={estilos.fondo}>
      <View style={estilos.container}>
        <FlatList
          data={ciudadesFavoritas}
          renderItem={({ item }) => (
            <View style={estilos.card}>
              <Text style={estilos.title}>{item.name}</Text>
              <Text>{item.temp}°</Text>
              <Text>{item.weather}</Text>
              <Image
                source={{
                  uri: `https://openweathermap.org/img/wn/${item.img}@2x.png`,
                }}
                style={estilos.image}
              />
              <Text>Sensación Térmica:{item.feel}°</Text>
              <View style={estilos.boton}>
                <TouchableOpacity onPress={() => handleRemoveCiudad(item)}>
                  <Image source={cesto} />
                </TouchableOpacity>
              </View>
            </View>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </ImageBackground>
  );
};

export default CiudadesFavoritasScreen;
