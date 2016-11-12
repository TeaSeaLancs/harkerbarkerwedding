import React, { Component } from 'react';

import Avatar from 'material-ui/Avatar';

import { colours } from './invitee';

class InviteeCounts extends Component {
    render() {
        const invitees = this.props.invitees;
        return (
            <div className={this.props.className}>
                <Avatar backgroundColor={colours.total} title="Total">{count(invitees)}</Avatar>
                <Avatar backgroundColor={colours.pending} title="Pending">{countState(invitees, 'pending')}</Avatar>
                <Avatar backgroundColor={colours.accepted} title="Accepted">{countState(invitees, 'accepted')}</Avatar>
                <Avatar backgroundColor={colours.declined} title="Declined">{countState(invitees, 'declined')}</Avatar>
            </div>
        )
    }
}

const count = list => list.reduce((count, invitee) => {
   return invitee.people.reduce(count => ++count, count);
}, 0);

const countState = (list, state) => list.reduce((count, invitee) => {
    const { state: inviteState, people } = invitee;
    if (state === inviteState) {
        return (count + people.length);
    }
    
    return count;
}, 0);

export default InviteeCounts;