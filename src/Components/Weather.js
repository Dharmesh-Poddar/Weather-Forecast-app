import React from 'react';

export default class Weather extends React.Component{
       
        render(){

            return(
                <div>
                  <p>Location: {this.props.city} ,{this.props.country}</p>
                </div>
            )
            ;
        }
      
     

}