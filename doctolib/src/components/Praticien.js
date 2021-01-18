import React, { Component, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'antd';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
const { Meta } = Card;



const Praticien = (props) => {
    const praticien = props.praticien

    const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      container: {
        display: 'flex',
        flexWrap: 'wrap',
      },
      textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
      },
    }),
  );
  const classes = useStyles();

    return (
<div className="container Praticien row">


        < div className="form-wrapper m-4 col" >
            
            <div className="col-3">
                <img src={praticien.images} />
            </div>


            <div className="col-7">              
                <div className="row">
                        {praticien.nom}               
            </div>

                <div className="row">                
                        {praticien.specialite}                 
                </div>
                <br/>

                <div className="row">                   
                        {praticien.adresse}                  
                </div>
                <br/>
               
                <div className="row">                 
                        {praticien.secteur}                   
                </div>


            </div>
            <br/>


            <div className="row m-1">
                <Link className="btn btn-primary" to={'/detail/' + praticien.id}>PRENDRE RENDEZ-VOUS</Link>
            </div>


        </div>



            <div className="container Calendrier col">
            <Card>
    
    <form className={classes.container} noValidate>
      <TextField
        id="datetime-local"
        label="Next appointment"
        type="datetime-local"
        defaultValue="2017-05-24T10:30"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
  
   
  </Card>
            </div>


        </div>
    )
}
export default Praticien;