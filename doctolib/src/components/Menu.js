import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import{QuestionCircleOutlined,UserOutlined } from '@ant-design/icons'

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
   
   render() { 
    return ( 

        <nav className="navbar navbar-expand-sm navbar-light bg-dark">

                  <Link to='/'className="navbar-brand " >
                    <img className="logo-doctolib "/></Link>
                    <div className="collapse navbar-collapse  ">
        
                        <ul className="navbar nav ml-auto">
                           
                            <li className="nav-item m-5 Tappable-inactive dl-button-small-action dl-margin-x dl-padding-x dl-desktop-navbar-b2b-solid-btn dl-button dl-button-size-normal" role="button ">
                                <Link to='/addPraticien' className="blue-button-label">Vous êtes professionnel de santé ? </Link>
                            </li>
                            <li className="nav-item m-5">
                            <Link to='/' className="a1"  ><QuestionCircleOutlined />Besoin d'aide ?</Link>
                            </li>
                            <li className="nav-item m-5">
                                <Link to='/compte'  className="a2">Se connecter <UserOutlined /><br/> Mes RDV</Link>
                            </li>
                          
                        
                        </ul>
                    </div>
    </nav>
     );
}
}
export default Menu;