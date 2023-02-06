import axios from "axios";
import { alertError } from "../../helpers/alertHandler";

export const getCountriesSouthAmerica = async () => {
 
    try {
         const url = "https://restcountries.com/v3.1/subregion/South America?fields=name,capital";

         const res = await axios.get(url);

         return res;
    } catch (error) {
        console.log(error);
        alertError('Error en RestCountries api')
    }
};
