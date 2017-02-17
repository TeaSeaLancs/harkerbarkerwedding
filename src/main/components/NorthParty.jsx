import React from 'react';

import InfoArea from './InfoArea';

export default () => {
    const northParty = {
            title: "The North Party",
            type: "skitby",
            details: "Skitby House, near Carlisle, April 15th 2017",
            location: "Skitby House Carlisle",
            timeline: [
                {description: "Arrive and grab a drink", time: "4PM"}
            ]
        };
  
    return (
        <InfoArea {...northParty}></InfoArea>
    );
};