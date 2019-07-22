import React from 'react';

export default class Form extends React.Component{

    render(){
        return(
          <form>
              <input type="text" name="city" placeholder="city..">
              </input>
          
             <input type="text" name="country" placeholder="country..">
             </input>

             <button>Get weather data</button> 
          </form>
        );
    }
}