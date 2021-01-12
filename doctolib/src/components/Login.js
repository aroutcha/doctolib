import React, { Component } from 'react';
import { changeIsLogged, login } from '../services/DataService';
import {notification, Checkbox} from "antd"
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            user : {
                login : '',
                password : ''
            }
         }
    }

    changeField = (event)=> {
        let tmpUser = {...this.state.user}
        tmpUser[event.target.getAttribute("name")] = event.target.value
        this.setState({
            user : tmpUser
        })
    }
    onChange(e) {
        console.log(`checked = ${e.target.checked}`);
      }
    clickConnect = () => {
        if(login(this.state.user.login, this.state.user.password)){
            changeIsLogged(true)
            if(this.props.match.params.url != undefined) {
                this.props.history.push("/"+this.props.match.params.url)
            }
            else {
                this.props.history.push("/")
            }
        }
        else {
            notification.open({
                message: 'Erreur login',
                description:
                  'Merci de corriger les informations de login',
                onClick: () => {
                  console.log('Notification Clicked!');
                },
                duration : 2
              });
        }
    }
    render() { 
        return ( 

        <div className=" col-sm ">
            < div className="wrapper" >
                < div className="form-wrapper" >
                < h6 > J'ai déjà un compte Doctolib </h6>
  
                < form Validate >
                    < div  className = "email"  >
                        <input type="text" onChange={this.changeField} className="form-control col-12" name="login" placeholder="Adresse email ou Téléphone" />
                
                 
                        <input type="password " onChange={this.changeField} className="form-control col-12" name="password" placeholder="Mot de passe" />
                     </ div >
                       
                     <Checkbox >Se souvenir de mon identifiant</Checkbox>

                    <div  className = "valid ">
                        <button onClick={this.clickConnect} className="col-6 btn btn-info m-2">se connecter</button>
                        <p className="note m-2"> Mot de passe oublié ?</p>
                    </div>
    


                    <div class="alert m-2">
                        <span className="know-more" target="_blank">Afin de protéger vos données, vous devrez vous reconnecter après une longue période d'inactivité.</span>
        
                    </div>

                        </form >
                </ div >
            </ div >
            

            < div className="wrapper" >
                
                < h6 className="m-2"> Nouveau sur Doctolib ?</h6>
                <button onClick={this.clickConnect} className="inscription m-3">S'INSCRIRE</button>
                </ div >
            < div className="wrapper" >
                < div className="form-wrapper" >
                < h6 className="m-2"> Nouveau sur Doctolib ?</h6>
                < a className="m-2"> Saisissez vos informations pour continuer.</a>

  
                < form autoComplete="off">
                    < div  className="m-3" >
                    <input type="text" onChange={this.changeField} className="form-control col-12" name="login" placeholder="Téléphone portable(sinon fixe) " />
                    <a className="compte">Un code va vous être envoyé sur ce numéro pour valider votre compte.
                        <input type="text" onChange={this.changeField} className="form-control col-12" name="login" placeholder="Votre adresse email " />
                        </a>
                
                        <input type="text" onChange={this.changeField} className="form-control col-12" name="login" placeholder="Confirmer Votre adresse email" />
                        <input type="password " onChange={this.changeField} className="form-control col-12" name="password" placeholder="Choisissez un mot de passe" />
                     <a className="compte">Votre mot de passe vous permettra de gérer vos rendez-vous médicaux.</a>
                     </ div >
                       
                     <Checkbox >J'accepte les conditions d'Utilisation de Doctolib</Checkbox>
                     <Checkbox >Se souvenir de mon identifiant</Checkbox>


                    <div  className = "valid ">
                        <button onClick={this.clickConnect} className="col-6 btn btn-info m-2">S'INSCRIRE</button>
                        
                    </div>
    

                </form >
                </ div >
                </ div >
                

                
            </ div >
       

    
         );
    
}
}
 
export default Login;