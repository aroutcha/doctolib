import React, { Component } from 'react';
import Praticien from './Praticien';

class Praticiens extends Component {
    constructor(props) {
        super(props);
        this.state = { 
           

         }
    }
 

    render() { 
        return ( 
            
            <div className="container Praticien">
                {this.props.praticiens.map(praticien=>(
                    <Praticien key={praticien.id} praticien={praticien}></Praticien>
                ))}
            </div>
         );
    }
}
 
export default Praticiens;