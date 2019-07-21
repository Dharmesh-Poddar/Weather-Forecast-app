import React, { Component } from 'react';
import Title from './Components/Title';
import Form from './Components/Form';
import Weather from './Components/Weather';


class App extends React.Component{
   const API_Key='';
   
   render()
   {
     return(
    <div>
     <Title/>
      <Form />
      <Weather/>

    </div>
     );
   }

}
export default App;
