import React, { Component,useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';
import {compte , isLogged} from '../services/DataService';
import Praticiens from './Praticiens';


const  Compte= (props) => {
    const [praticiens, setPraticiens] = useState(compte)
    const [firstLoading , setFirstLoading] = useState(false)
    const history = useHistory()
    useEffect(() => {
        if(!isLogged) {
            history.push("/login/compte")
        }
    }, 
    [firstLoading])
            return ( 
            <div className="container">
                
                 <Praticiens praticiens={praticiens}></Praticiens>
                
            </div> 
            )
    }
    export default Compte;