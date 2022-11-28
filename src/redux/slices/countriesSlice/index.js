import { GET_COUNTRIES_FAILED, GET_COUNTRIES_REQUESTED, GET_COUNTRIES_SUCCESS } from "../../tools/actionTypes";

const initialState = {
    countries: [],
    loading: false,
    error: ""
};

function countriesReducer (state = initialState, action) {
    switch (action.type) {
        case GET_COUNTRIES_REQUESTED :
            return {
                ...state,
                error: null,
                loading: true
            };
        case GET_COUNTRIES_SUCCESS :
            return { 
                ...state, 
                loading: false,
                countries: action.payload
            };
        case GET_COUNTRIES_FAILED :
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default :
            return state;
    };
}

export default countriesReducer;