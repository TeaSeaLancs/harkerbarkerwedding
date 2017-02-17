import React from 'react';

import InfoArea from './InfoArea';
import { CardText } from 'material-ui/Card';
import Subheader from 'material-ui/Subheader';

import styles from '../css/info.css';

export default () => {
    const northParty = {
            title: "The North Party",
            details: "Skitby House, near Carlisle, April 15th 2017",
            location: "Skitby House Carlisle",
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
        <InfoArea {...northParty}>
            <CardText>
                <Subheader>Music!</Subheader>
                <CardText className={styles.infopoints}>
                    <div>You want music? We all want music! Add your choices for the party playlist below!</div>
                    <div>(Disclaimer: We might take anything that's a bit inappropriate off, Adrian will kill us otherwise)</div>
                    <iframe src="https://embed.spotify.com/?uri=spotify%3Auser%3Athundercloud%3Aplaylist%3A6VHvYP5LQ8XfDBrJ06Mpdr" width="300" height="380" style={{border: 'none'}}></iframe>
                </CardText>
            </CardText>
        </InfoArea>
    );
};