import React, { Component, useContext } from 'react';
import { Link } from 'react-router-dom';




const Praticien = (props) => {
    const praticien = props.praticien
    return (
        < div className="form-wrapper m-4" >

            <div className="col-3">
                <img src={praticien.images} />
            </div>

            <div className="col-7">
                
                <div className="row">
                        {praticien.nom}
                
                </div>

                <div className="row">
                    
                        {praticien.specialite}
                  
                </div>
                <br/>
                <div className="row">
                   
                        {praticien.adresse}
                   
                </div>
                <br/>
               
                <div className="row">
                   
                        {praticien.secteur}
                    
                </div>
            </div>
            <br/>
            <div className="row m-1">
                <Link className="btn btn-primary" to={'/detail/' + praticien.id}>PRENDRE RENDEZ-VOUS</Link>
            </div>
        </div>
    )
}
export default Praticien;