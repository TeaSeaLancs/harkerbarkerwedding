import React from 'react';

import { Card, CardTitle, CardText } from 'material-ui/Card';
import { List, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

import Directions from 'material-ui/svg-icons/maps/directions';

import bowser from 'bowser';

import styles from '../css/info';

const Timeline = ({timeline}) => (
    <List>
        {timeline.map(({description, time}) => (
            <ListItem 
                key={description} 
                disabled={true} 
                primaryText={description} 
                secondaryText={<span style={{fontWeight: 'bold'}}>{time}</span>}>
            </ListItem>
        ))}
    </List>
);

const DirectionsButton = ({destination, ...props}) => (
    <RaisedButton 
        icon={<Directions/>} 
        label="Get directions"
        primary={true}
        href={`https://maps.google.com?saddr=Current+Location&daddr=${destination.replace(/ /g, '+')}`}
        target="_blank"
        {...props}>
    </RaisedButton>
);

export default ({title, details, type, location, timeline, children}) => {
    
    const classes = [styles.infoarea, styles[`infoarea--${type}`]];
    if (bowser.firefox) {
        classes.push(styles.nobreak);
    }
    
    if (bowser.ios && bowser.safari) {
        classes.push(styles.nofixed);
    }
    
    return (
        <Card className={classes.join(" ")}>
            <CardTitle title={title} subtitle={details} className={styles.infoareaTitle}>
                <DirectionsButton destination={location} className={styles.infoareaDirections}></DirectionsButton>
            </CardTitle>
            <CardText className={styles.infoareaSections}>
                <Timeline timeline={timeline}></Timeline>
                {children}
            </CardText>
        </Card>
    );
};