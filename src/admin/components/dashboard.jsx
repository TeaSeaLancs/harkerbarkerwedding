import React, { Component } from 'react';
import { connect } from 'react-redux';

class Dashboard extends Component {
    render() {
        return (
            <div>
                <div>Dashboard</div>
                <div>Invitees: {this.props.invitees.length}</div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        invitees: state.invitees.list
    };
}

export default connect(mapStateToProps)(Dashboard);