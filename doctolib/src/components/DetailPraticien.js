import React, { Component } from 'react';
import { prendreunRdv, rdvDejaPris, getPraticienById,annulerUnRdv} from '../services/DataService';


class DetailPraticien extends Component {
    constructor(props) {
        super(props);
        this.state = {
            praticien: undefined,
           rdv : rdvDejaPris(props.match.params.id)
        }
    }

    componentDidMount() {
        getPraticienById(this.props.match.params.id).then(res => {
            if(!res.data.error) {
                this.setState({
                    praticien : res.data.praticien
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
            <div className="container">
                {this.state.praticien != undefined ?
                    (
                        <div className="container">
                            
                                    {/* {this.state.praticien.images.map((image, index) =>
                                        (<div key={index}><img  src={image} /></div>)
                                    )} */}
                              
                            <div className="row m-1">
                                <h1 className="col">{this.state.praticien.nom}</h1>
                                <span className="col-2 h2">{this.state.praticien.specialite}</span>
                            </div>
                            <div className="row m-1">
                                <div className="col">
                                    {this.state.praticien.adresse}
                                </div>
                            </div>
                            <div className="row m-1">
                                {this.state.rdv ?
                                    (
                                        <button onClick={this.annulerRdv} className="btn-rdv">Annuler le RDV</button>
                                    ) :
                                    (
                                        <button onClick={this.prendreRdv} className="btn-rdv">Prendre un RDV</button>
                                    )
                                }
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