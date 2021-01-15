import React, { Component, useState } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Home from "./Home"
import FormPraticien from "./FormPraticien"
import DetailPraticien from "./DetailPraticien"
import Menu from './Menu';
import Login from './Login';
import Compte from './Compte';
import Appointement from './Appointement';
import Calendar from './Calendar';





class Navigation extends Component {
        constructor(props) {
            super(props);
            this.state = {
                
            }
        }

render() { 
    return (
        <BrowserRouter>
            <div className="container-fluid">
                {/* Menu */}

                <Menu ></Menu>
               
                    <Switch>
                        <Route path="/" exact component={Home}></Route>
                        <Route path="/addPraticien" component={FormPraticien}></Route>
                        <Route path="/compte" component={Compte}></Route>
                        <Route path="/detail/:id" component={DetailPraticien}></Route>
                        <Route path="/login" exact component={Login} ></Route>
                        <Route path="/login/:url" exact component={Login} ></Route>
                        <Route path="/appointement" exact component={Appointement} ></Route>
                        <Route path="/calendar" exact component={Calendar} ></Route>


                       
                    </Switch>
                   
                
            </div>


            
        </BrowserRouter>
    )
}
}
export default Navigation;