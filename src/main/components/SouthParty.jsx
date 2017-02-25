import React from 'react';

import InfoArea from './InfoArea';
import { CardText } from 'material-ui/Card';
import Subheader from 'material-ui/Subheader';
import { List, ListItem } from 'material-ui/List';
import { GridList } from 'material-ui/GridList';
import RaisedButton from 'material-ui/RaisedButton';

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
                {description: "Welcome, here are drinks!", time: "4PM"},
                {description: "Theatre doors open", time: "4.45PM"},
                {description: "The bride & groom enter", time: "5PM"},
                {description: "Speeches and starters!", time: "5.05PM"},
                {description: "More food! More drink!", time: "After the speeches, around 5.40PM?"},
                {description: "First dance", time: "8PM"},
                {description: "Hit the dancefloor", time: "Straight after!"},
                {description: "Closing time, open all the doors and let you out into the world...", time: "11PM"}
            ]
        };
  
    return (
        <InfoArea {...southParty}>
            <div>
                <Subheader style={{fontSize: '22px'}}>Getting here</Subheader>
                <CardText className={styles.infopoints}>    
                    <h4>Train</h4>
                    <div>Once you're in London, the journey is easy. From St. Pancras train station, take the Thameslink trains north to Bedford/Luton, they all stop at St. Albans.</div>
                    <h4>Car</h4>
                    <div>If you are driving to the party, then setting your satnav to use the postcode <strong>AL4 0FJ</strong> will take you to the overflow car park</div>
                    <h4>Taxi</h4>
                    <List>
                        <ListItem data-no-print primaryText="Get an uber (Requires app)" leftIcon={<UberIcon color="black"/>}
                        href="https://m.uber.com/ul/?action=setPickup&pickup=my_location&dropoff[formatted_address]=Trestle%20Arts%20Base%2C%20Russet%20Drive%2C%20St%20Albans%2C%20AL4%200JQ" target="_blank"/>
                        <ListItem primaryText="Goldline taxis" secondaryText="01727 833333" leftIcon={<CommunicationCall color={primary}/>} href="tel:+441727833333"/>
                        <ListItem primaryText="A* Taxis" secondaryText="01727 867777" leftIcon={<CommunicationCall color={primary}/>} href="tel:+441727867777"/>
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
            <div>
                <Subheader style={{fontSize: '22px'}}>Food</Subheader>
                <CardText className={styles.infopoints}>
                    <div>The food will be provided by Bar Meze and The Pudding Stop, both local St. Albans businesses.</div>
                    <div>The starters and main courses will be sharing platters of Cypriot food.</div>
                    <div>As for the dessert... well, that would be telling!</div>
                    <div>There is no exact menu yet, but it will contain plenty of meat, fish and vegetarian options, so rest assured you'll be catered for!</div>
                </CardText>
            </div>
            <div data-no-print>
                <Subheader style={{fontSize: '22px'}}>Music!</Subheader>
                <CardText className={styles.infopoints}>
                    <div>You want music? We all want music! See what's been suggested for the playlist so far!</div>
                    <div>Want to add your own? Open the playlist in your Spotify desktop/phone/tablet app, <strong>follow</strong> the playlist, then add whatever songs you want to it!</div>
                    <div className={styles.spotify}>
                        <RaisedButton secondary={true} label="Open in Spotify" href="https://open.spotify.com/user/thundercloud/playlist/6VHvYP5LQ8XfDBrJ06Mpdr" target="_blank"/>
                        <iframe src="https://embed.spotify.com/?uri=spotify%3Auser%3Athundercloud%3Aplaylist%3A6VHvYP5LQ8XfDBrJ06Mpdr&theme=white"
                            width="300" height="380" style={{border: 'none'}}></iframe>
                    </div>
                </CardText>
            </div>
        </InfoArea>
    );
};