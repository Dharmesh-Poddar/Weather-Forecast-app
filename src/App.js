import React, { Component } from 'react';
import Title from './Components/Title';
import Form from './Components/Form';
import Weather from './Components/Weather';
let API_Key= "4d5e7c1a2cd8f2338eb3f0d0b21ce3b0";

class App extends React.Component{
    getWeather =async() =>{

      const api_call =await fetch('http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=${API_Key}');
       
        const data =await api_call.json();

    }
   
   render()
   {
     return(
    <div>
     <Title/>
      <Form getWeather={this.getWeather}/>
      <Weather/>

    </div>
     );
   }

}
export default App;
