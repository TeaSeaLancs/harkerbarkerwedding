import React from 'react';

import InfoArea from './InfoArea';

import { CardText } from 'material-ui/Card';
import Subheader from 'material-ui/Subheader';
import RaisedButton from 'material-ui/RaisedButton';
import { GridList } from 'material-ui/GridList';

import PlaceTile from './PlaceTile';

import styles from '../css/info';

export const Ceremony = () => {
    const ceremony = {
        title: "The Ceremony",
        type: "church",
        details: "St Mary's Church, Bedford, April 7th 2017",
        timeline: [
            {description: "Church opens", time: "11:30AM"},
            {description: "The bride arrives", time: "12PM"},
            {description: "The knot is tied", time: "12:30PM"}
        ],
        location: "Church of St Mary the Virgin, Bedford, MK41 0AP"
    };
  
    return (
        <InfoArea {...ceremony}>
            <Subheader>Places to stay</Subheader>
            <GridList>
                <PlaceTile title="D'Parys, Bedford" place="dparys" href="http://dparys.co.uk/"/>
                <PlaceTile title="Premier Inn Priory Marina" place="premier-inn-bedford" href="http://www.premierinn.com/gb/en/hotels/england/bedfordshire/bedford/bedford-priory-marina.html"/>
            </GridList>
        </InfoArea>
    );
};

export const Meal = () => {
    const meal = {
        title: "The Wedding Meal",
        type: "pub",
        details: "The Park, Bedford, April 7th 2017",
        timeline: [
            {description: "Arrive and grab a drink", time: "2PM"},
            {description: "Food!", time: "2.30PM"},
            {description: "The party continues!", time: "5.00PM"}
        ],
        location: "The Park Pub & Kitchen, Kimbolton Road, Bedford, MK40 2PF"
    };
    
    return (
        <InfoArea {...meal}>
            <Subheader>
                <span>Meal pre-ordering</span>
                <RaisedButton secondary={true} label="Download menu here" style={{lineHeight: 'normal', marginLeft: '1rem'}} href="https://docs.google.com/document/d/1nf1SaFUjxI9WeaFbdbcQJ52ZHZFw-qV2kPl-H8-B9z8/edit?usp=sharing" target="_blank"/>
            </Subheader>
            <CardText className={styles.infopoints}>
                <div>
                    <span>Please make your choices for main meal and dessert, and send them to </span>
                    <a href="mailto:mjbarker2310@gmail.com" target="_blank">mjbarker2310@gmail.com</a>
                    <span> before the 1st of March.</span>
                </div>
            </CardText>
        </InfoArea>
    );
};