// render() {
//     return (
//         <div className="profil">

//             {this.state.praticien != undefined ?
//                 (
//                     <div className="container">

//                         {/* {this.state.praticien.images.map((image, index) =>
//                                     (<div key={index}><img  src={image} /></div>)
//                                 )} */}

//                         <div className="col ">
//                             <h7 className="row m-3 header-name">{this.state.praticien.nom}</h7>
//                             <a className="row m-3 header-specialite">{this.state.praticien.specialite}</a>
//                         </div>


//                         {/* <div className="row m-1">
//                             <div className="col">
//                                 {this.state.praticien.adresse}
//                             </div>
//                         </div> */}


//                         {/* <div className="row m-1">
//                             {this.state.rdv ?
//                                 (
//                                     <button onClick={this.annulerRdv} className="btn-rdv">Annuler le RDV</button>
//                                 ) :
//                                 (
//                                     <button onClick={this.prendreRdv} className="btn-rdv">Prendre un RDV</button>

//                                 )
//                             }
//                             <Link className="btn btn-primary" to={'/appointement/'}>PRENDRE RENDEZ-VOUS</Link>
//                         </div> */}
                        
//                     </div>

//                 ) :
//                 (
//                     <div> Aucun praticien avec cet id</div>
//                 )
//             }
//         </div>);
// }
// }

// export default DetailPraticien;