import React, { Component } from 'react';
import { connect } from 'react-redux';

import { loadInviteesIfRequired } from '../actions/invitees';

class Dashboard extends Component {
    static needs() {
        return [loadInviteesIfRequired];
    }
    render() {
        return (
            <div>
                <div>Dashboard</div>
                <div>Invitees: {this.props.invitees.length}</div>
                <div>Loaded: {this.props.loaded.toString()}</div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        invitees: state.invitees.list,
        loaded: state.invitees.loaded
    };
}

export default connect(mapStateToProps)(Dashboard);