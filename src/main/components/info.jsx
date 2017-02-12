import React, { Component } from 'react';
import { connect } from 'react-redux';

import Paper from 'material-ui/Paper';

import FAQ from './FAQ';
import InfoArea from './InfoArea';
import SouthParty from './SouthParty';
import { Ceremony, Meal } from './April7th';

class Info extends Component {
    render() {        
        return (
            <Paper zDepth={0}>
                <FAQ></FAQ>
                <Ceremony></Ceremony>
                <Meal></Meal>
                <SouthParty></SouthParty>
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