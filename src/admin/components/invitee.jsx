import styles from '../css/invitee.css';

import React, { Component } from 'react';

import { ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import { deepPurple100, red100, green100, blueGrey100 } from 'material-ui/styles/colors';

import { invitedTo, firstNames } from '../util/data';

export const colours = {
    pending: blueGrey100,
    accepted: green100,
    declined: red100,
    total: deepPurple100
};

const avatarLetter = invitee => invitee.people[0].name.substring(0,1);
const stateAvatar = invitee => (<Avatar backgroundColor={colours[invitee.state] || colours.pending}>{avatarLetter(invitee)}</Avatar>)

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
                onTouchTap={this.props.open}
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