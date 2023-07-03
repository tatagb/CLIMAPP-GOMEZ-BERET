import { StatusBar } from 'expo-status-bar';
import { FlatList, Text, View, Alert, ImageBackground } from 'react-native';
import { estilos } from './HomeStyles';
import Card from '../../components/Card/Card';
import SearchBar from '../../components/SearchBar/SearchBar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import { clearError } from '../../redux/actions/actions';
import AppStatusBar from '../../components/StatusBar/StatusBar';
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Home({navigation}) {
    const ciudades = useSelector(state => state.ciudades);
    const error = useSelector(state => state.error);
    const dispatch = useDispatch();
    const fondo = require('../../assets/fondo2.jpg')

    if(error.length){
        Alert.alert(
            "Lo siento!",
            "Ciudad no encontrada - Por favor intenta nuevamente",
            [
              {
                text: "Ok",
                onPress: () => dispatch(clearError()),
              },
            ]
          );
    }

    return (
        <ImageBackground source = {fondo} style={estilos.fondo}>
        <SafeAreaView>
            <View style={estilos.container}>
                <View style={estilos.searchContainer}>
                    <SearchBar/>
                </View>
                {ciudades.length ?
                <View style={estilos.cardContainer}>
                    <FlatList
                        data={ciudades}
                        renderItem={(ciudad) => <Card navigation={navigation} ciudad={ciudad.item}/>}
                    />
                </View> :
                <View style={{marginTop: 50, display: "flex", alignItems: "center"}}>
                    <Ionicons name="sunny" size={70} color="yellow" />
                    <Text style={estilos.titulo}>Consulta el clima de cualquier ciudad</Text>
                </View>
                }
                <AppStatusBar backgroundColor="#000" barStyle="light-content" />
            </View>
        </SafeAreaView>
        </ImageBackground>
    );
}
