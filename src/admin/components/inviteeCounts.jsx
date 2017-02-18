import React, { Component } from 'react';

import Avatar from 'material-ui/Avatar';

import { colours } from './invitee';

import { locations, locationName } from '../util/data';

const CountsForLocation = ({location, invitees}) => (
    <li>
        <span>{locationName(location)}</span>
        <Avatar backgroundColor={colours.accepted} title="Accepted" style={{fontSize: '12px', verticalAlign: 'top'}}>
            {countStateForLocation(invitees, location, 'accepted')}/{countForLocation(invitees, location)}
        </Avatar>
        <Avatar backgroundColor={colours.declined} title="Declined">{countStateForLocation(invitees, location, 'declined')}</Avatar>
    </li>
);

const LocationCounts = ({invitees}) => {
    const locationCounts = [];
    
    for (let name in locations) {
        locationCounts.push(<CountsForLocation key={name} location={name} invitees={invitees}></CountsForLocation>);
    }
    
    return (
        <ul>
            {locationCounts}
        </ul>
    );
};

class InviteeCounts extends Component {
    render() {
        const invitees = this.props.invitees;
        return (
            <div className={this.props.className}>
                <Avatar backgroundColor={colours.total} title="Total">{count(invitees)}</Avatar>
                <LocationCounts invitees={invitees}></LocationCounts>
            </div>
        );
    }
}

const count = list => list.reduce((count, invitee) => {
   return invitee.people.reduce(count => ++count, count);
}, 0);

const countForLocation = (list, location) => list.reduce((count, invitee) => {
   const { invitedTo, people, state: inviteState } = invitee;
    if (invitedTo.indexOf(location) > -1 && inviteState !== 'declined') {
        return (count + people.length);
    }
    
    return count;
}, 0);

const countStateForLocation = (list, location, state) => list.reduce((count, invitee) => {
    const { state: inviteState, people, invitedTo } = invitee;
    if (state === inviteState && invitedTo.indexOf(location) > -1) {
        return (count + people.length);
    }
    
    return count;
}, 0);

export default InviteeCounts;