import React, { Component, useState } from 'react';
import { ajouterPraticien, isLogged } from '../services/DataService';

class FormPraticien extends Component {
    constructor(props) {
        super(props);
        if(!isLogged) {
            this.props.history.push("/login/addPraticien")
        }
        this.state = { 
            praticien : {
                nom : '',
                prenom:'',
                codePostal:'',
                téléphone:'',
                specialite : '',
                mail:'',
               // images : []
            } 
        }
    }

    // changeField = (e) => {
    //     let tmpPraticien = {...this.state.praticien}
    //     tmpPraticien[e.target.getAttribute("name")] = e.target.value
    //     this.setState({
    //         praticien : {...tmpPraticien}
    //     })
    // }
    // changeImage = (e, index) => {
    //     let tmpPraticien = {...this.state.praticien}
    //     tmpPraticien.images[index] = e.target.value
    //     this.setState({
    //         praticien : tmpPraticien
    //     })
    // }
    // renderImagesField = () => {
    //     const imagesField = []
    //     for(let i= 1 ; i <= this.state.nombreImages; i++) {
    //         imagesField.push(<input key={i} onChange={(e) => {this.changeImage(e,i-1)}} className="col-12 m-1 form-control" placeholder="Url image" />)
    //     }
    //     return imagesField
    // }

    // ajouterImage = () => {
    //     const tmpNombreImages = this.state.nombreImages + 1
    //     this.setState({
    //         nombreImages : tmpNombreImages
    //     })
    // }
    validForm = (e) => {
        e.preventDefault()
        ajouterPraticien(this.state.praticien)
        this.props.history.push('/')
    }
    render() { 
        return ( 
            <div className="container-fluid"  >
            <div className="row p-5">
              <div className=" col-sm-7  ">
      
              <div className="container 1col">
                <h4>Assurez la continuité des soins en toute sérénité</h4>
                <h5>Equipez-vous du logiciel Doctolib pour adapter dès maintenant l’organisation de votre cabinet.</h5>
              </div>
      
      
                <div className="container 1col">
                  <ul>
                    <li> Souscription au logiciel Doctolib sans engagement</li>
                    <li>Consultation vidéo déjà utilisée par 30 000 praticiens</li>
                    <li>1 500 salariés à votre service plus que jamais</li>
                  </ul>
                </div>
              </div>
      
              <div className=" col-sm-5 ">
                < div className="wrapper" >
                  < div className="form-wrapper" >
                    < h5 > Vous êtes praticien ? Un de nos experts vous recontacte </h5>
      
                    < form onSubmit={this.validForm} >
      
                    {/* <div className="row m-1">
                          <div className="col">
                              <div className="row m-1">
                                  {this.renderImagesField()}
                              </div>
                          </div>
                          <a className="btn col-2 btn-info" onClick={this.ajouterImage}>Ajouter une image</a>
                      </div> */}
      
      
      
                      < div className="lastName" >
      
                        < input
                          type="text"
                          className="form-control col"
                          placeholder="Nom *"
                          onChange={this.changeField}
                          name="Nom"
      
                        />
                      </ div >
      
      
                      < div className="firstName" >
      
                        < input
                          type="text"
                          className="form-control col"
                          placeholder="prénom *"
                          onChange={this.changeField}
                          name="Prénom"
      
                        />
                      </ div >
      
      
      
      
                      < div  className = "codePostal" >
                      
                      < input 
                      type="string" 
                      className="form-control col" 
                      placeholder="Code postal cabinet  *" 
                      onChange={this.changeField}
                      name="code postal" 
                     
                       />
                </ div >
      
                < div  className = "number" >
                      
                      < input 
                      type="string" 
                      className="form-control col" 
                      placeholder="Téléphone portable  *" 
                      onChange={this.changeField}
                      name="Téléphone" 
                     
                       />
                </ div >
      
      
                <select className="dropdown" name="speciality_id" placeholder="Votre spécialité *" >
          <option value="" disabled="" selected=""onChange={this.changeField} >Votre spécialité *</option>
          <optgroup className="topSpe" label="Les plus recherchées">
      <option value="1">Chirurgien-dentiste</option>
      <option value="2">Dermatologue</option>
      <option value="3">Gynécologue médical et obstétrique</option>
      <option value="4">Masseur-kinésithérapeute</option>
      <option value="5">Médecin généraliste</option>
      <option value="6">Pédicure-podologue</option>
      <option value="7">Psychologue</option>
      <option value="8">Ostéopathe</option>
      <option value="9">Sage-femme</option>
      <option value="10">Sophrologue</option>	</optgroup>
      <optgroup label="Autres spécialités" class="othersSpe">
      <option value="11">Allergologue</option>
      <option value="12">Anatomo-cyto-pathologiste</option>
      <option value="13">Andrologue</option>
      <option value="14">Anesthésiste-réanimateur</option>
      <option value="15">Angiologue</option>
      <option value="16">Neurologue</option>
      <option value="17">Orthodontiste</option>
      <option value="18">Ophtalmologue</option>
      <option value="19">Cancérologue radiothérapeute</option>
      <option value="20">Cardiologue</option>
      <option value="21">ORL</option>
      <option value="22">Chirurgien</option>
      <option value="23">Chirurgien maxillo-facial et stomatologue</option>
      <option value="24">Chirurgien orthopédiste</option>
      <option value="25">Chirurgien plasticien et esthétique</option>
      <option value="26">Chirurgien thoracique et cardio-vasculaire</option>
      <option value="27">Chirurgien-dentiste</option>
      <option value="28">Dermatologue</option>
      <option value="29">Diététicien</option>
      <option value="30">Masseur-kinésithérapeute</option>
      </optgroup></select>
      
                      < div  className = "email" >
                      
                      < input 
                      type="text" 
                      className="form-control col" 
                      placeholder="Adresse email *" 
                      type="text" 
                      name="Email" 
                      onChange={this.changeField}
                       />
                </ div >
                
                <select className="dropdown" name="speciality_id" placeholder="Votre spécialité *" >
          <option value="" disabled="" selected=""onChange={this.changeField}>Je suis...</option>
       
      <option value="1">Je suis un patient et souhaite prendre RDV chez un médecin</option>
      <option value="2">Je suis professionnel de santé et souhaite en savoir plus sur le logiciel Doctolib</option>
      </select>
                <p className="required-note">* Champs obligatoires</p>
             
    
      
                < div  className = "createAccount" >
                    < button  type = "submit"  >Valider ma demande </button>
                    <span className="know-more" target="_blank">En savoir plus sur la collecte de vos données personnelles</span>
                  </div >
      
      
      
      
      
                    </form>
                  </div>
                </div>
      
      
      
      
              </div>
      
      
            </div>
          </div>
      
        );
    }
}


export default FormPraticien;