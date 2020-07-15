import axios from 'axios';
// to get the api for the app weather 
const URL = 'https://api.brewerydb.com/v2/';
// the api key of the weather
const API_key = '16c95af5b8c383728413b13981b89f89';
// the const of the fetchinging the data in the query 
export const fetchBeer = async (query) => {
    // to get the data in the URL
    const { data } = await axios.get(URL, {
        // to get the objects of the database
        params: {
            q: query,
            units: 'metric',
            APPID: API_key,
        }
    });

    return data;
}

export default fetchBeer