import { GET_COUNTRIES_FAILED, GET_COUNTRIES_REQUESTED, GET_COUNTRIES_SUCCESS } from "./actionTypes";

export const getCountries = () => {
    return {
        type: GET_COUNTRIES_REQUESTED
    };
};  

export const getCountriesSuccess = (countries) => {
    return {
        type: GET_COUNTRIES_SUCCESS,
        payload: countries
    };
};  

export const getCountriesFailed = (error) => {
    return {
        type: GET_COUNTRIES_FAILED,
        payload: error
    };
};