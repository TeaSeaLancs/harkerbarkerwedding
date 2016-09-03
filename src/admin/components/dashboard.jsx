import React, { Component } from 'react';
import { connect } from 'react-redux';

import AppBar from 'material-ui/AppBar';
import Avatar from 'material-ui/Avatar';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Add from 'material-ui/svg-icons/content/add';
import { deepPurple100, red100, green100 } from 'material-ui/styles/colors';

import styles from '../css/dashboard.css';

import { loadInviteesIfRequired } from '../actions/invitees';

class Dashboard extends Component {
    static needs() {
        return [loadInviteesIfRequired];
    }
    render() {
        return (
            <div>
            <AppBar title="Harker/Barker wedding admin">
                <div className={styles.dashboardCounts}>
                    <Avatar backgroundColor={deepPurple100} title="Total">{this.props.counts.total}</Avatar>
                    <Avatar title="Pending">{this.props.counts.pending}</Avatar>
                    <Avatar backgroundColor={green100} title="Accepted">{this.props.counts.accepted}</Avatar>
                    <Avatar backgroundColor={red100} title="Declined">{this.props.counts.declined}</Avatar>
                </div>
            </AppBar>
            <FloatingActionButton primary={true} className={styles.dashboardAdd}>
                <Add></Add>    
            </FloatingActionButton>
            </div>
        )
    }
}

const mapStateToProps = state => {
    const { invitees : { list, loaded }} = state;
    
    return {
        counts: {
            total: list.length,
            pending: 0,
            accepted: 0,
            declined: 0
        },
        invitees: list,
        loaded
    };
}

export default connect(mapStateToProps)(Dashboard);