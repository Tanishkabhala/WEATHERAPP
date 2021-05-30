import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { weatherAPI } from '../actions/Action'

export const WeatherLoad = () => {
    const dispatch = useDispatch()
    const weatherData = useSelector(state => state.weatherData)
    const { weatherStatus } = weatherData
    
    useEffect(()=> {
        dispatch(weatherAPI())
    }, [dispatch])

    return (
        <>
        {console.log(weatherStatus)}
        {weatherStatus.weather ? 
        <div>
            { weatherStatus.main.temp }  °C<br></br>
            { weatherStatus.weather.map(e => e.main) } <br></br> 
            { weatherStatus.name }, India
        </div> : null} 
        </>
    )
}

export default WeatherLoad