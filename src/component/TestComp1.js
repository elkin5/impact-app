import React from 'react';
import WeatherExtraInfo from './TestComp2';

const WeatherData = () => (
    <div>
        <WeatherExtraInfo humidity={80} wind={"10 m/s"} />
    </div>
);

export default WeatherData;