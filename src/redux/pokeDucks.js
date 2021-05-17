import axios from 'axios';
//constantes
const dataInicial = {
    count: 0,
    next: null,
    previous: null,
    results: []
}

//types
const  GET_POKEMONS_SUCCESS = 'GET_POKEMONS_SUCCESS';
const SIGUIENTES_POKEMONES_SUCCESS = 'SIGUIENTES_POKEMONES_SUCCESS';

//reducer
export default function pokeReducer(state = dataInicial, action) {
    switch(action.type){
        case GET_POKEMONS_SUCCESS:
            return {
                ...state,
                ...action.payload
            }
        case SIGUIENTES_POKEMONES_SUCCESS:
            return{
                ...state,
                ...action.payload
            }

        default: 
            return state;
    }
}

//acciones
export const obtenerPokemonesAccion = () => async (dispatch, getState) => {


    //const offset = getState().pokemones.offset

    try {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=20`);
        console.log(res.data);
        dispatch({
            type: GET_POKEMONS_SUCCESS,
            payload: res.data
        })
    } catch (error) {
        console.log(error);
    }
}

export const siguientePokemonAccion = () => async (dispatch, getState) => {

    const {next} = getState().pokemones;
    try {
        const res = await axios.get(next);
        dispatch({
            type: SIGUIENTES_POKEMONES_SUCCESS,
            payload: res.data
        })
    } catch (error) {
        console.log(error);
    }
}