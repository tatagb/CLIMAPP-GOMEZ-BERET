import { CLEAR_ERROR, DELETE_CIUDAD, GET_API_DATA, ADD_CIUDAD_FAVORITA, REMOVE_CIUDAD_FAVORITA, SET_MESSAGE } from "../actions/actionsTypes";

const initialState = {
    favoritos: {
        ciudadesFavoritas: []
      },
    ciudad: {},
    ciudades: [],
    ciudadesFavoritas: [], // Agrega ciudadesFavoritas en el estado inicial
    ciudadRepetida: false, // Nuevo campo para controlar ciudades repetidas
    error: "",
    message: ''
};

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_API_DATA:
            if(action.payload === "Ciudad no encontrada") return {...state, error: "Ciudad no encontrada :c"}
            let existe = false;
            state.ciudades.map((c) => {if(c.id === action.payload.id) existe = true});
            return {
                ...state,
                ciudades: existe ? state.ciudades : state.ciudades.concat([action.payload]),
                ciudad: action.payload
            }
        case CLEAR_ERROR: 
            return{
                ...state,
                error: ""
            }
        case DELETE_CIUDAD:
            return {
                ...state,
                ciudades: state.ciudades.filter(c => c.id !== action.payload.id),
            }
            
            case ADD_CIUDAD_FAVORITA:
                return {
                    ...state,
                    favoritos: {
                      ...state.favoritos,
                      ciudadesFavoritas: [...state.favoritos.ciudadesFavoritas, action.payload]
                    }
                  };
                  case REMOVE_CIUDAD_FAVORITA:
                    return {
                      ...state,
                      favoritos: {
                        ...state.favoritos,
                        ciudadesFavoritas: state.favoritos.ciudadesFavoritas.filter(
                          (ciudad) => ciudad.id !== action.payload.id
                        ),
                      },
                    };
                    case SET_MESSAGE:
      return {
        ...state,
        message: action.payload
      };
              default:
                return state;
            }
          };
export default rootReducer;