import React, { Component } from 'react';
import { connect } from 'react-redux';

import Paper from 'material-ui/Paper';

import FAQ from './FAQ';
import SouthParty from './SouthParty';
import { Ceremony, Meal } from './April7th';
import NorthParty from './NorthParty';

const contains = (invitedTo, area) => invitedTo.indexOf(area) > -1;

const Area = ({display, component: Component}) => {
    if (!display) {
        return null;
    }
    
    return <Component/>;
};

class Info extends Component {
    render() {
        let { invite, invite: { invitedTo } } = this.props;
        
        return (
            <Paper zDepth={0}>
                <FAQ invite={invite}></FAQ>
                <Area component={Ceremony} display={contains(invitedTo, 'ceremony')}/>
                <Area component={Meal} display={contains(invitedTo, 'ceremony')}/>
                <Area component={SouthParty} display={contains(invitedTo, 'south')}/>
                <Area component={NorthParty} display={contains(invitedTo, 'north')}/>
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