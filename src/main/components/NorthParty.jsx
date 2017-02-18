import React from 'react';

import InfoArea from './InfoArea';

import Subheader from 'material-ui/Subheader';
import { CardText } from 'material-ui/Card';
import { List, ListItem } from 'material-ui/List';
import { GridList } from 'material-ui/GridList';

import CommunicationCall from 'material-ui/svg-icons/communication/call';
import PlaceTile from './PlaceTile';
import { primary } from '../../util/theme';

import styles from '../css/info';

export default () => {
    const northParty = {
            title: "The North Party",
            type: "skitby",
            details: "Skitby House, near Carlisle, April 15th 2017",
            location: "Skitby House Carlisle",
            timeline: [
                {description: "Arrive and grab a drink", time: "6PM"},
                {description: "Food!", time: "7.30PM"},
                {description: "You don't have to go home but you can't stay here", time: "11.30PM"}
            ]
        };
  
    return (
        <InfoArea {...northParty}>
            <div>
                <Subheader style={{fontSize: '22px'}}>Getting here</Subheader>
                <CardText className={styles.infopoints}>    
                    <h4>Train</h4>
                    <div></div>
                    <h4>Bus?</h4>
                    <div>If there's enough demand, a bus can be made available. If you would like a bus to/from the party, <a href="tel:+4412285769333">contact Judith &amp; Adrian on 01228 576933</a></div>
                    <h4>Car</h4>
                    <div>There's plenty of parking available at the venue itself!</div>
                    <h4>Taxi</h4>
                    <List>
                        <ListItem primaryText="" secondaryText="" leftIcon={<CommunicationCall color={primary}/>} href="tel:"/>
                        <ListItem primaryText="" secondaryText="" leftIcon={<CommunicationCall color={primary}/>} href="tel:"/>
                    </List>
                </CardText>
            </div>
            <div>
                <Subheader style={{fontSize: '22px'}}>Places to stay</Subheader>
                <GridList>
                    <PlaceTile title="Mercure Noke" place="mercure" href="http://www.mercure.com/gb/hotel-A0I1-mercure-st-albans-noke-hotel/events.shtml"/>
                    <PlaceTile title="Premier Inn" place="premier-inn" href="http://www.premierinn.com/gb/en/hotels/england/hertfordshire/st-albans/st-albans-city-centre.html"/>
                    <PlaceTile title="Clarion Hotel" place="clarion" href="http://www.stalbanshotel.co.uk/"/>
                    <PlaceTile title="Sopwell House" place="sopwell" href="http://sopwellhouse.co.uk/"/>
                </GridList>
            </div>
        </InfoArea>
    );
};