import { CLEAR_ERROR, DELETE_CIUDAD, GET_API_DATA, ADD_CIUDAD_FAVORITA, REMOVE_CIUDAD_FAVORITA, SET_MESSAGE} from "./actionsTypes";
import { getState } from 'redux';

import axios from "axios";


const apiKey = "4ae2636d8dfbdc3044bede63951a019b";

export const getApiData = (ciudad) => async dispatch => {
    try{
        const {data} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`);
        const info = {
            id: data.id,
            name: data.name,
            img: data.weather[0].icon,
            temp: Math.round(data.main.temp),
            feel: Math.round(data.main.feels_like),
            weather: data.weather[0].main,
            clouds: data.clouds.all,
            wind: data.wind.speed,
            humidity: data.main.humidity,
        }
        return dispatch({
            type: GET_API_DATA,
            payload: info
        })
    }catch(e){
        return dispatch({
            type: GET_API_DATA,
            payload: "Ciudad no encontrada"
        })
    }
};

export const clearError = () => dispatch => {
    return dispatch({type: CLEAR_ERROR})
}

export const deleteCiudad = (ciudad) => dispatch => {
    return dispatch({type: DELETE_CIUDAD, payload: ciudad})
    
}

export const addCiudadFavorita = (ciudad) => dispatch => {
    return dispatch ({type: ADD_CIUDAD_FAVORITA, payload: ciudad});

}

    export const removeCiudadFavorita = (ciudad) => ({
       type: REMOVE_CIUDAD_FAVORITA, 
       payload: ciudad});

       export const setMessage = (message) => ({
        type: SET_MESSAGE, 
        payload: message});



