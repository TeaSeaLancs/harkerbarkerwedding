import React, { Component } from 'react';
import { connect } from 'react-redux';

import AppBar from 'material-ui/AppBar';
import Avatar from 'material-ui/Avatar';
import List from 'material-ui/List';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Add from 'material-ui/svg-icons/content/add';
import Invitee, { colours } from './invitee';

import styles from '../css/dashboard.css';

import { loadInviteesIfRequired } from '../actions/invitees';

class Dashboard extends Component {
    static needs() {
        return [loadInviteesIfRequired];
    }
    render() {
        console.log(this.props.invitees);
        return (
            <div>
                <AppBar title="Harker/Barker wedding admin">
                    <div className={styles.dashboardCounts}>
                        <Avatar backgroundColor={colours.total} title="Total">{this.props.counts.total}</Avatar>
                        <Avatar backgroundColor={colours.pending} title="Pending">{this.props.counts.pending}</Avatar>
                        <Avatar backgroundColor={colours.accepted} title="Accepted">{this.props.counts.accepted}</Avatar>
                        <Avatar backgroundColor={colours.declined} title="Declined">{this.props.counts.declined}</Avatar>
                    </div>
                </AppBar>
                <List>
                    {this.props.invitees.map((invitee, i) => (<Invitee invitee={invitee} key={i}></Invitee>))}
                </List>
                <FloatingActionButton className={styles.dashboardAdd}>
                    <Add></Add>    
                </FloatingActionButton>
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

const mapStateToProps = state => {
    const { invitees : { list, loaded }} = state;
    
    return {
        counts: {
            total: count(list),
            pending: countState(list, 'pending'),
            accepted: countState(list, 'accepted'),
            declined: countState(list, 'declined')
        },
        invitees: list,
        loaded
    };
}

export default connect(mapStateToProps)(Dashboard);