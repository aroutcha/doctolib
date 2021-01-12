import React, { Component } from 'react';
import { praticiens, getPraticiens, search } from '../services/DataService';
import Praticiens from './Praticiens';
import { Spin, Input } from "antd"
import { Card, Col, Row } from 'antd';
const { Search } = Input
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            praticiens: []
        }

    }

    componentDidMount() {
        getPraticiens().then((result) => {
            this.setState({
                loading: false,
                praticiens: result.data.praticiens
            })
        })

    }


    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return this.state != nextState || this.props != nextProps
    }

    search = (text) => {
        this.setState({
            loading: true
        })
        search(text).then((result) => {
            this.setState({
                praticiens: result.data.praticiens,
                loading: false
            })
        }).catch(err => {
            this.setState({
                loading: false
            })
        })
    }

    render() {
        return (
            <div className="container-fluid" >
                <div class="homepage-search p-4">

                    <h2> Réservez une consultation physique ou vidéo</h2>
                    <h3> chez un professionnel de santé</h3>

                    <Search onChange={(e) => { this.search(e.target.value) }} placeholder="Médecin, établissement, spécialité..." enterButton="Search" size="large" loading={this.state.loading} />

                </div>

                <div className=" col-sm ">

                    < div className="wrapper-covid" >
                        <div className="site-card-wrapper">
                            <Row gutter={16}>
                                <Col span={8}>
                                    <Card title="Informez-vous sur la vaccination" bordered={false}>

                                        La campagne de vaccination contre le COVID-19 a débuté fin décembre et vous avez sûrement de nombreuses interrogations à ce sujet. Calendrier, modalités, remboursement : nous vous apportons tous les éclaircissements nécessaires.

                                    </Card>
                                </Col>
                                <Col span={8}>
                                    <Card title="Privilégiez la consultation vidéo" bordered={false}>
                                        Ce mode de consultation vous permet de consulter votre praticien de chez vous et est recommandé actuellement.

                                        Obtenez un rendez-vous plus rapidement, gagnez du temps et faites-vous rembourser comme une consultation physique.


                                    </Card>
                                </Col>
                                <Col span={8}>
                                    <Card title="Faites-vous dépister rapidement" bordered={false}>
                                        Réservez en ligne un test PCR rapidement et proche de chez vous.

                                        Ce test est pris en charge à 100% par l’Assurance Maladie et ne requiert pas d'ordonnance. Les résultats sont généralement accessibles sous 48 heures.
                                    </Card>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>

                <div className="container-praticiens">
                    {this.state.loading ? <div ><Spin /></div> : <Praticiens praticiens={this.state.praticiens}></Praticiens>}
                </div>

            </div>

        );

    }
}

export default Home;