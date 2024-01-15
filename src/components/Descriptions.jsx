import React from 'react';
import { FaArrowDown } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa6";
import { FaFaceLaughSquint } from "react-icons/fa6";
import { WiHumidity } from "react-icons/wi";
import { FiWind } from "react-icons/fi";

const Descriptions = ({ wth, un }) => {
    console.log("descr", un)
    return (
        <div className='section section_descriptions'>
            <div className='card'>
                <div className='description_card-icon'>
                    <FaArrowDown size={13}/>
                    <small>min</small>
                </div>
                <h2>{wth.temp_min.toFixed()} {un==='metric' ? '°C' : 'F'}</h2>
            </div>
            <div className='card'>
                <div className='description_card-icon'>
                    <FaArrowUp size={13}/>
                    <small>max</small>
                </div>
                <h2>{wth.temp_max.toFixed()} {un==='metric' ? '°C' : 'F'}</h2>
            </div>
            <div className='card'>
                <div className='description_card-icon'>
                    <FaFaceLaughSquint size={13}/>
                    <small>feels like</small>
                </div>
                <h2>{wth.feels_like.toFixed()} {un==='metric' ? '°C' : 'F'}</h2>
            </div>
            <div className='card'>
                <div className='description_card-icon'>
                    <WiHumidity size={20}/>
                    <small>humidity</small>
                </div>
                <h2>{wth.humidity.toFixed()} %</h2>
            </div>
            <div className='card'>
                <div className='description_card-icon'>
                    <FiWind size={15}/>
                    <small>speed</small>
                </div>
                <h2>{wth.speed.toFixed()} m/s</h2>
            </div>
            <div className='card'>
                <div className='description_card-icon'>
                    <FiWind size={15}/>
                    <small>pressure</small>
                </div>
                <h2>{wth.pressure.toFixed()} hPa</h2>
            </div>
        </div>
    )
}

export default Descriptions
