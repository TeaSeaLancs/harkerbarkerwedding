import React from 'react';

import InfoArea from './InfoArea';
import { CardText } from 'material-ui/Card';
import Subheader from 'material-ui/Subheader';
import { List, ListItem } from 'material-ui/List';
import { GridList } from 'material-ui/GridList';

import UberIcon from './uber';
import PlaceTile from './PlaceTile';
import CommunicationCall from 'material-ui/svg-icons/communication/call';
import { primary } from '../../util/theme';

import styles from '../css/info';

export default () => {
    const southParty = {
            title: "The South Party",
            type: "trestle",
            details: "Trestle Arts Base, St. Albans, April 8th 2017",
            location: "Trestle Arts Base, Russet Drive, St Albans",
            timeline: [
                {description: "Arrive and grab a drink", time: "4PM"},
                {description: "Doors open", time: "4.45PM"},
                {description: "The bride & groom enter", time: "5PM"},
                {description: "Speeches and mezze!", time: "5.05PM"},
                {description: "More food! More drink! Wahahahahahahahahaha!", time: "5.30PM?"},
                {description: "Par. Tay.", time: "8PM"},
                {description: "Closing time, open all the doors and let you out into the world", time: "Midnight"}
            ]
        };
  
    return (
        <InfoArea {...southParty}>
            <Subheader>Getting here</Subheader>
            <CardText className={styles.infopoints}>
                <h4>Train</h4>
                <div>Once you're in London, the journey is easy. From St. Pancras train station, take the Thameslink trains north to Bedford/Luton, they all stop at St. Albans.</div>
                <h4>Car</h4>
                <div>If you are driving to the party, then setting your satnav to use the postcode <strong>AL4 0FJ</strong> will take you to the overflow car park</div>
                <h4>Taxi</h4>
                <List>
                    <ListItem primaryText="Get an uber (Requires app)" leftIcon={<UberIcon color="black"/>}
                    href="https://m.uber.com/ul/?action=setPickup&pickup=my_location&dropoff[formatted_address]=Trestle%20Arts%20Base%2C%20Russet%20Drive%2C%20St%20Albans%2C%20AL4%200JQ" target="_blank"/>
                    <ListItem primaryText="Goldline taxis" secondaryText="01727 833333" leftIcon={<CommunicationCall color={primary}/>} href="tel:+441727833333"/>
                    <ListItem primaryText="A* Taxis" secondaryText="01727 867777" leftIcon={<CommunicationCall color={primary}/>} href="tel:+441727867777"/>
                </List>
            </CardText>
            <Subheader>Places to stay</Subheader>
            <GridList>
                <PlaceTile title="Mercure Noke" place="mercure" href="http://www.mercure.com/gb/hotel-A0I1-mercure-st-albans-noke-hotel/events.shtml"/>
                <PlaceTile title="Premier Inn" place="premier-inn" href="http://www.premierinn.com/gb/en/hotels/england/hertfordshire/st-albans/st-albans-city-centre.html"/>
                <PlaceTile title="Clarion Hotel" place="clarion" href="http://www.stalbanshotel.co.uk/"/>
                <PlaceTile title="Sopwell House" place="sopwell" href="http://sopwellhouse.co.uk/"/>
            </GridList>
            <Subheader>Music!</Subheader>
            <CardText className={styles.infopoints}>
                <div>You want music? We all want music! Add your choices for the party playlist below!</div>
                <div>(Disclaimer: We might take anything that's a bit inappropriate off, Adrian will kill us otherwise)</div>
                <iframe src="https://embed.spotify.com/?uri=spotify%3Auser%3Athundercloud%3Aplaylist%3A6VHvYP5LQ8XfDBrJ06Mpdr"
                    width="300" height="380" style={{border: 'none'}}></iframe>
            </CardText>
        </InfoArea>
    );
};