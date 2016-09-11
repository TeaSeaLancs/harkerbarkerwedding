import React, { Component } from 'react';

import Avatar from 'material-ui/Avatar';

import { colours } from './invitee';

class InviteeCounts extends Component {
    constructor(props) {
        super(props);
        const list = this.props.invitees;
        this.state = {
            counts: {
                total: count(list),
                pending: countState(list, 'pending'),
                accepted: countState(list, 'accepted'),
                declined: countState(list, 'declined')
            }
        }
    }
    render() {
        return (
            <div className={this.props.className}>
                <Avatar backgroundColor={colours.total} title="Total">{this.state.counts.total}</Avatar>
                <Avatar backgroundColor={colours.pending} title="Pending">{this.state.counts.pending}</Avatar>
                <Avatar backgroundColor={colours.accepted} title="Accepted">{this.state.counts.accepted}</Avatar>
                <Avatar backgroundColor={colours.declined} title="Declined">{this.state.counts.declined}</Avatar>
            </div>
        )
    }
}

const count = list => list.reduce((count, invitee) => {
   return invitee.people.reduce(count => ++count, count);
}, 0);

const countState = (list, state) => list.reduce((count, invitee) => {
    return invitee.people.reduce((count, person) => {
        if (person.state === state) {
            return ++count;
        }
        return count;
    }, count);
}, 0);

export default InviteeCounts;