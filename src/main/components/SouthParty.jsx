import React from 'react';

import InfoArea from './InfoArea';

export default () => {
    const southParty = {
            title: "The South Party",
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
        <InfoArea {...southParty}></InfoArea>
    );
};