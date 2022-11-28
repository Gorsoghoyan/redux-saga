import { countriesData } from "../fakeData/countries";

export const getCountries = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(countriesData);
        }, 1000);
    });
};