import React, { Component } from 'react';
import { prendreunRdv, rdvDejaPris, getPraticienById, annulerUnRdv } from '../services/DataService';
import { Link } from 'react-router-dom';
import { InfoCircleOutlined,EuroOutlined,QuestionCircleOutlined } from '@ant-design/icons';
class DetailPraticien extends Component {
    constructor(props) {
        super(props);
        this.state = {
            praticien: undefined,
            rdv: rdvDejaPris(props.match.params.id)
        }
    }

    componentDidMount() {
        getPraticienById(this.props.match.params.id).then(res => {
            if (!res.data.error) {
                this.setState({
                    praticien: res.data.praticien
                })
            }
            else {
                alert(res.data.message)
            }
        })
    }

    prendreRdv = () => {
        prendreunRdv(this.state.praticien.id)
        this.setState({
            rdv: true
        })
    }

    annulerRdv = () => {
        annulerUnRdv(this.state.praticien.id)
        this.setState({
            rdv: false
        })
    }
    render() {
        return (
            <div className="profil">

                {this.state.praticien != undefined ?
                    (

                        <div className="profil-detail">
                            <div className="col ">
                                <h7 className="row m-3 header-name">{this.state.praticien.nom}</h7>
                                <a className="row m-3 header-specialite">{this.state.praticien.specialite}</a>
                            </div>

                            <nav className="navbar profil">
                                <ul className="navbar nav ml-auto profil">

                                    <li className="nav-item m-3  ">
                                        <Link to='/detail/:id' className="essentiel">L'essentiel </Link>
                                    </li>
                                    <li className="nav-item m-3">
                                        <Link to='/detail/:id' className="carte"  >Carte</Link>
                                    </li>
                                    <li className="nav-item m-3">
                                        <Link to='/detail/:id' className="presentation">Présentation </Link>
                                    </li>
                                    <li className="nav-item m-3">
                                        <Link to='/detail/:id' className="horaire">Horaires</Link>
                                    </li>
                                    <li className="nav-item m-3">
                                        <Link to='/detail/:id' className="tarifs">tarifs </Link>
                                    </li>

                                </ul>

                            </nav>


                            <div className="wrapper covid">


                                <h8 className="covid-profil" ><InfoCircleOutlined /> COVID-19 : Bon à savoir</h8>


                                <p>Votre professionnel de santé continue à consulter normalement. Vos rendez-vous à venir sont maintenus. Prenez un rendez-vous en ligne si vous en avez besoin.</p>

                            </div>


                            <div className="tarifs et remboursements">
                                <ul col >
                                    <a className="tarifs"><EuroOutlined /> tarifs et remboursements <QuestionCircleOutlined /></a>
                                    <li>Conventionné secteur 1</li>
                                    <li>Carte Vitale acceptée</li>
                                    <li>Tiers payant : Sécurité sociale</li>
                                    <li>Voir les tarifs</li>
                                </ul>



                                <ul col >
                                    <a className="tarifs"><EuroOutlined /> Moyens de paiement</a>
                                    <li>Chèques, espèces et cartes bancaires</li>
                                    
                                </ul>
                            </div>





                        </div>



                    ) :
                    (
                        <div> Aucun praticien avec cet id</div>
                    )
                }
            </div>);
    }
}

export default DetailPraticien;