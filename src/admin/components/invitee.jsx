import styles from '../css/invitee.css';

import React, { Component } from 'react';

import { ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import { deepPurple100, red100, green100, blueGrey100 } from 'material-ui/styles/colors';

export const colours = {
    pending: blueGrey100,
    accepted: green100,
    declined: red100,
    total: deepPurple100
};

const invitedMap = {
    ceremony: 'Ceremony',
    south: 'South Party',
    north: 'North Party'
}

const avatarLetter = invitee => invitee.people[0].name.substring(0,1);
const stateAvatar = invitee => (<Avatar backgroundColor={colours[invitee.state] || colours.pending}>{avatarLetter(invitee)}</Avatar>)
const sentence = list => {
     if (list.length === 1) {
        return list[0];
    }
    
    return `${list.slice(0, -1).join(", ")} & ${list.slice(-1)[0]}`;
}

const firstNames = invitee => {
    const names = invitee.people.map(person => person.name.split(' ')[0]);
    return sentence(names);
}

const invitedTo = invitee => {
    return sentence(invitee.invitedTo.map(location => invitedMap[location]));
}

const invitedToPlusComments = invitee => {
    return (<div>
        <div>{invitedTo(invitee)}</div>
        <div style={{color: deepPurple100}}>{invitee.comments || ""}</div>
    </div>)
}

class Invitee extends Component {
    render() {
        return (
            <ListItem 
                className={styles.invitee} 
                leftAvatar={stateAvatar(this.props.invitee)}
                primaryText={firstNames(this.props.invitee)}
                secondaryText={invitedToPlusComments(this.props.invitee)}
                secondaryTextLines={2}>
            </ListItem>
        )
    }
}

export default Invitee;