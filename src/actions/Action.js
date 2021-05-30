import { WEATHER_DATA_REQUEST, WEATHER_DATA_RESET } from '../constant'
import axios from 'axios'


export const weatherAPI = () => async (dispatch) => {
    try {
        const config = {
            header: { 
                'Content-Type': 'application/json',
            }
        }

        const { data } = await axios.get('http://api.openweathermap.org/data/2.5/weather?q=Jaipur&appid=5aaafe3bcfc504f92b554a4ef54b15af', {}, config)
        dispatch({ type: WEATHER_DATA_REQUEST, payload: data })
    }
    catch (error) {
        dispatch({ 
            type: WEATHER_DATA_RESET, 
            payload: error
        })
    }
}