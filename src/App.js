import React from 'react';
import Title from './Components/Title';
import Form from './Components/Form';
import Weather from './Components/Weather';
//const API_Key= "4d5e7c1a2cd8f2338eb3f0d0b21ce3b0";

class App extends React.Component{

    state={
      temperature: undefined,
      city: undefined,
      country: undefined,
      humidity: undefined,
      description: undefined,
      error: undefined
    }


    getWeather =async(e) =>{
               e.preventDefault();
      const city= e.target.elements.city.value;
      const country =e.target.elements.country.value;


      const api_call =await fetch('http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=4d5e7c1a2cd8f2338eb3f0d0b21ce3b0');
       
        const data =await api_call.json();
        console.log(data);


    }
   
   render()
   {
     return(
    <div>
     <Title/>
      <Form getWeather={this.getWeather}/>
      <Weather
         temperature ={this.state.temperature}
         city={this.state.city}
         country={this.state.country}
         hummidity={this.state.humidity}
         description={this.state.description}
         error={this.state.error}
         
      />

    </div>
     );
   }

}
export default App;
