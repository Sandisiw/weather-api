import React, {useEffect, useState} from 'react';


const Weather = () => {
  
  const [weatherData, setWeatherData] = useState('London');
  const [city, setCity] = useState('London');
  const uriEncodedCity = encodeURIComponent(city);

  let tempValue = weatherData.main ? weatherData.main.temp: weatherData.main;
  let feelsLike = weatherData.main ? weatherData.main.feels_like : weatherData.main;
  const changeCity=(e)=>{
    e.preventDefault();
 
    setCity(city)
  }
  useEffect(()=>{
    
      try{
          fetch(`https://api.openweathermap.org/data/2.5/weather?q=${uriEncodedCity}&appid=af53ee2d87b09cb45be24fb2e9c276f8&units=metric`)       
          .then(response => response.json())
          .then(data => setWeatherData(data)); 
        }
        catch(err){
          console.log(err);
        }
   
        
    }, [uriEncodedCity]);

  
  
  return (
    
      <div>
     
            
           <h1>Enter City to Get Weather Conditions</h1>
           <div className='weather'>
               Temperature: {JSON.stringify(tempValue)} <sup><small>o</small></sup>C <br />
               Feels Like: {JSON.stringify(feelsLike)} <sup><small>o</small></sup>C
           </div>
           <form onSubmit={(e)=>changeCity(e)} className='form'>
                <input className='TextInput'
                    type="text"
                    placeholder="Enter City"
                    maxLength="50"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    /><br />
               
                
                
            </form>
       
    
    </div>
  );
};


export default Weather;