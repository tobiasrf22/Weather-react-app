import hotBg from './assets/hot.jpeg';
import coldBg from './assets/cold.jpg';
import Descriptions from './components/Descriptions';
import { useEffect } from 'react';
import { getFormattedWeatherData } from './components/weatherService';
import { useState } from 'react';
import Future from './components/Future';
import { LuMapPin } from "react-icons/lu";


//TODO: Ocultar Keyssssss

function App() {

  const [weather, setWeather] = useState(null);
  const [unity, setUnity] = useState('metric');
  const [bg, setBg] = useState(hotBg);
  const [city, setCity] = useState('Paris');
  const [location, setLocation] = useState(null);

  useEffect(() => {
    fetchWeatherData();
  }, [unity,location])

  const getLocation = () => {
    fetch('https://ipinfo.io/json?token=1d66f87a55769f')
      .then(response => response.json())
      .then(data => {
        // Actualizar la ubicación y la ciudad
        setLocation(data.city);
        setCity(data.city);
  
        // Actualizar la unidad de medida según la necesidad
        // Puedes cambiar 'metric' a 'imperial' o viceversa según tu preferencia
        setUnity('metric');
  
        // Actualizar los datos meteorológicos después de obtener la ubicación
        fetchWeatherData();
      })
      .catch(error => {
        console.error('Error fetching location:', error);
      });
  };
  
  


  const fetchWeatherData = async () => {
    const data = await getFormattedWeatherData(city, unity);
    setWeather(data);
    if ((unity === 'metric' && data.temp < 20) || (unity === 'imperial' && data.temp < 68)) {
      setBg(coldBg);
    } else {
      setBg(hotBg);
    }
  }
  const changeUnity = () => {
    // Cambiar la lógica para alternar entre 'metric' y null
    setUnity(prevUnity => (prevUnity === 'metric' ? 'imperial' : 'metric'));
  }
  const handleInputChange = (ev) => {
    setCity(ev.target.value);
  };

  const handleKeyDown = (ev) => {
    if (ev.key === 'Enter') {
      fetchWeatherData();
    }
  };
  return (
    <div className="app" style={{ backgroundImage: `url(${bg})` }}>
      <div className='overlay'>
        {
          weather && (
            <div className='container'>
              <div className='section section_input'>
                {/*<input type="text" placeholder="product name" value={title} onChange={ev => setTitle(ev.target.value)}></input>*/}
                <input type='text' name='city' value={city} placeholder='Enter City...' onChange={handleInputChange}
                  onKeyDown={handleKeyDown} />
                <button id='gps' onClick={getLocation}><LuMapPin /></button>
                <button
                  onClick={changeUnity}
                >{unity === 'metric' ? '°C' : '°F'}</button>
              </div>
              <div className='section section_temperature'>
                <div className='icon'>
                  <h3>{weather.name}, {weather.country}</h3>
                  <img src={weather.iconUrl} />
                  <h3>{weather.description}</h3>
                </div>
                <div className='temperature'>
                  <h1>{weather.temp?.toFixed()} {unity === 'metric' ? '°C' : '°F'}</h1>
                </div>
              </div>
              <Descriptions wth={weather} un={unity} />
              <footer>
                <p>Developed by <a href='https://tobiasrf.netlify.app/'>Tobias Romero Fara</a></p>
              </footer>
            </div>

          )
        }

      </div>

    </div>

  );
}

export default App;
