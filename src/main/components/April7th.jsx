import React from 'react';

import InfoArea from './InfoArea';

import { CardText } from 'material-ui/Card';
import Subheader from 'material-ui/Subheader';
import RaisedButton from 'material-ui/RaisedButton';
import { GridList } from 'material-ui/GridList';
import { List, ListItem } from 'material-ui/List';

import CommunicationCall from 'material-ui/svg-icons/communication/call';

import { primary } from '../../util/theme';

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
            <div>
                <Subheader style={{fontSize: '22px'}}>Getting here</Subheader>
                <CardText className={styles.infopoints}>
                    <h4>Train</h4>
                    <div>Once you're in London, the journey is easy. From St. Pancras train station, Thameslink and East Midland trains run to Bedford on a regular basis.</div>
                    <h4>Taxi</h4>
                    <List>
                        <ListItem primaryText="A1 Taxis" secondaryText="01234 364444" leftIcon={<CommunicationCall color={primary}/>} href="tel:+441234364444"/>
                        <ListItem primaryText="Anglia Taxis" secondaryText="01234 320032" leftIcon={<CommunicationCall color={primary}/>} href="tel:++441234320032"/>
                    </List>
                </CardText>
            </div>
            <div>
                <Subheader style={{fontSize: '22px'}}>Places to stay</Subheader>
                <GridList>
                    <PlaceTile title="D'Parys, Bedford" place="dparys" href="http://dparys.co.uk/"/>
                    <PlaceTile title="Premier Inn Priory Marina" place="premier-inn-bedford" href="http://www.premierinn.com/gb/en/hotels/england/bedfordshire/bedford/bedford-priory-marina.html"/>
                </GridList>
            </div>
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
            {description: "More drinks in the bar!", time: "5.00PM"}
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