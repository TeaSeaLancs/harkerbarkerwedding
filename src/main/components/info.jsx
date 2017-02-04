import React, { Component } from 'react';
import { connect } from 'react-redux';

import Paper from 'material-ui/Paper';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import { List, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

import Directions from 'material-ui/svg-icons/maps/directions';

import styles from '../css/info.css';

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
        href={`https://maps.google.com?saddr=Current+Location&daddr=${destination.replace(' ', '+')}`}
        target="_blank"
        {...props}>
    </RaisedButton>
);

const InfoArea = ({title, details, location, timeline}) => {
    return (
        <Card className={styles.infoarea}>
            <CardTitle title={title} subtitle={details} className={styles.infoareaTitle}>
                <DirectionsButton destination={location} className={styles.infoareaDirections}></DirectionsButton>
            </CardTitle>
            <CardText>
                <Timeline timeline={timeline}></Timeline>
            </CardText>
        </Card>
    );
};

class Info extends Component {
    render() {
        
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
        
        const meal = {
            title: "The Wedding Meal",
            details: "The Park, Bedford, April 7th 2017",
            timeline: [
                {description: "Arrive and get a drink", time: "2PM"},
            ],
            location: "The Park Pub & Kitchen, Kimbolton Road, Bedford"
        };
        
        return (
            <Paper zDepth={0}>
                <InfoArea {...ceremony}></InfoArea>
                <InfoArea {...meal}></InfoArea>
            </Paper>
        );
    }
}

const mapStateToProps = state => {
    const { invite } = state.invite;
    
    return {
        invite
    };
};

export default connect(mapStateToProps)(Info);