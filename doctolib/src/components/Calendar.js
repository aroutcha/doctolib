// import React, { Component } from 'react';


// class Calendar extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
// //Tableau vide;
//             TmpDisponibilite : [
//                     'lundi' ,
//                     'mardi' ,
//                     'mercredi', 
//                     'jeudi',
//                     'vendredi', 
//                     'samedi' ,
//                     'dimanche' ];
            

//                //Futur tableau
// $aFinalDisponibilite = array();








//         };




//     }
//     render() {



//         return (


//             <div className="container">



//  

//  
// //On rempli le tableau de tous les horaires (en mode indisponible : false)
// foreach($aTmpDisponibilite as $sJour => $aHoraires){
//     for($i=0;$i<48;$i++){
//         $aHoraire[$i]= false;  
//     }  
//     $aFinalDisponibilite[$sJour] = $aHoraire;
// }
//  
// //on met les horaire ou l'on souhaite être disponible
// //[!]  première plage = 0, dernière plage = 47;
//  
//  
// // Le Lundi de 18h30 à 20h00
// FinalDisponibilite['lundi'][35] = true;
// FinalDisponibilite['lundi'][36] = true;
// ['lundi'][37] = true;
// FinalDisponibilite['lundi'][38] = true;
//  
// //Le lundi de 23h00 à 23h30
// FinalDisponibilite['lundi'][46] = true;
//  
//  
// //on sérialize
// FinalDisponibilite = serialize($aFinalDisponibilite);
//  
// // Et on l'affiche (on le sauvegarde en base de données, c'est plus utile  )
//  
//                 {/* <div className="bloc-j col" justify="space-between">

//                     <div className="day-title col">
//                         <div className="-day-name">lundi</div>
//                         <div className="day-date">11 janv.</div>
//                     </div>
//                     <div className="day-h col">
//                         <div className="">08h</div>
//                         <div className="">8:15</div>
//                         <div className="">8:30</div>
//                         <div className="">8:45</div>
//                     </div>
//                 </div>

//                 <div className="bloc-j col" justify="space-between">

//                     <div className="day-title col">
//                         <div className="-day-name">lundi</div>
//                         <div className="day-date">11 janv.</div>
//                     </div>
//                     <div className="day-h col">
//                         <div className="">08h</div>
//                         <div className="">8:15</div>
//                         <div className="">8:30</div>
//                         <div className="">8:45</div>
//                     </div>
//                 </div> */}
//                 {/* <div className="bloc-j col" justify="space-between">

//                     <div className="day-title row">
//                         <div className="-day-name">lundi</div>
//                         <div className="day-date">11 janv.</div>
//                     </div>
//                     <div className="day-h row">
//                         <div className="">08h</div>
//                         <div className="">8:15</div>
//                         <div className="">8:30</div>
//                         <div className="">8:45</div>
//                     </div>
//                 </div>
//                 <div className="bloc-j col" justify="space-between">

//                     <div className="day-title row">
//                         <div className="-day-name">lundi</div>
//                         <div className="day-date">11 janv.</div>
//                     </div>
//                     <div className="day-h row">
//                         <div className="">08h</div>
//                         <div className="">8:15</div>
//                         <div className="">8:30</div>
//                         <div className="">8:45</div>
//                     </div>
//                 </div>
//                 <div className="bloc-j col" justify="space-between">

//                     <div className="day-title row">
//                         <div className="-day-name">lundi</div>
//                         <div className="day-date">11 janv.</div>
//                     </div>
//                     <div className="day-h row">
//                         <div className="">08h</div>
//                         <div className="">8:15</div>
//                         <div className="">8:30</div>
//                         <div className="">8:45</div>
//                     </div> */}
//                 {/* </div> */}
//                 {/* 
//                     <div className="day-title col">
//                         <div className="-day-name">mardi</div>
//                         <div className="day-date">12 janv.</div>
//                     </div>

//                     <div className="day-title col">
//                         <div className="-day-name">mercredi</div>
//                         <div className="day-date">13 janv.</div>
//                     </div>

//                     <div className="day-title col">
//                         <div className="-day-name">jeudi</div>
//                         <div className="day-date">14 janv.</div>
//                     </div>
//                     <div className="day-title col">
//                         <div className="-day-name">vendredi</div>
//                         <div className="day-date">15 janv.</div>
//                     </div>
//                     <div className="day-title col">
//                         <div className="-day-name">samedi</div>
//                         <div className="day-date">16 janv.</div>
//                     </div>

//                     <div className="day-title col">
//                         <div className="-day-name">dimanche</div>
//                         <div className="day-date">17 janv.</div>
//                     </div>

//                 </div> */}






//                 {/* <>

//     <Row justify="space-between">
//       <Col span={4}><Pagination defaultCurrent={1} total={1} />lundi</Col>
//       <Col span={4}>mardi</Col>
//       <Col span={4}>mercredi</Col>
//       <Col span={4}>jeudi</Col>
//       <Col span={4}>vendredi</Col>
//       <Col span={4}>samedi</Col>
//     </Row>



//     <Row justify="space-between">
//       <Col span={4}>lundi</Col>
//       <Col span={4}>mardi</Col>
//       <Col span={4}>mercredi</Col>
//       <Col span={4}>jeudi</Col>
//       <Col span={4}>vendredi</Col>
//       <Col span={4}>samedi</Col>
//     </Row>
   
//   </>, */}



//             </div >



//         );
//     }
// }

// export default Calendar;
