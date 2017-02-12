import React from 'react';

import InfoArea from './InfoArea';

import { CardText } from 'material-ui/Card';
import Subheader from 'material-ui/Subheader';
import RaisedButton from 'material-ui/RaisedButton';

import styles from '../css/info.css';

export const Ceremony = () => {
    const ceremony = {
        title: "The Ceremony",
        details: "St Mary's Church, Bedford, April 7th 2017",
        timeline: [
            {description: "Church opens", time: "11:30AM"},
            {description: "The bride arrives", time: "12PM"},
            {description: "The knot is tied", time: "12:30PM"}
        ],
        location: "Church of St Mary the Virgin, Bedford"
    };
  
    return (
        <InfoArea {...ceremony}></InfoArea>
    );
};

export const Meal = () => {
    const meal = {
        title: "The Wedding Meal",
        details: "The Park, Bedford, April 7th 2017",
        timeline: [
            {description: "Arrive and grab a drink", time: "2PM"},
            {description: "Food!", time: "2.30PM"},
            {description: "The party continues!", time: "5.00PM"}
        ],
        location: "The Park Pub & Kitchen, Kimbolton Road, Bedford"
    };
    
    return (
        <InfoArea {...meal}>
            <CardText>
                <Subheader>Meal pre-ordering</Subheader>
                <CardText className={styles.infopoints}>
                    <div>
                        <span>The menu for the reception can be found </span>
                        <a href="https://docs.google.com/document/d/1nf1SaFUjxI9WeaFbdbcQJ52ZHZFw-qV2kPl-H8-B9z8/edit?usp=sharing">here.</a>
                    </div>
                    <div>
                        <span>Please make your choices for main meal and dessert, and send them to </span>
                        <a href="mailto:mjbarker2310@gmail.com">mjbarker2310@gmail.com</a>
                        <span> before the 1st of March.</span>
                    </div>
                </CardText>
            </CardText>
        </InfoArea>
    );
};