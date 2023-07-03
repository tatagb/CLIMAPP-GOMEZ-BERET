import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { fetchCiudad } from "../db/index";

const CiudadesFavoritasScreen = () => {
  const [ciudadesFavoritas, setCiudadesFavoritas] = useState([]);

  useEffect(() => {
    fetchCiudad()
      .then(result => {
        const rows = result.rows._array;
        setCiudadesFavoritas(rows);
      })
      .catch(error => {
        console.log('Error al obtener las ciudades favoritas:', error);
      });
  }, []);

  return (
    <View>
      {ciudadesFavoritas.map(ciudad => (
        <View key={ciudad.id}>
          <Text>{ciudad.name}</Text>
          <Text>{ciudad.feel}</Text>
          <Text>{ciudad.weather}</Text>
          <Text>{ciudad.temp}</Text>
        </View>
      ))}
    </View>
  );
};

export default CiudadesFavoritasScreen;
