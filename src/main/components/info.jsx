import React, { Component } from 'react';
import { connect } from 'react-redux';

import Paper from 'material-ui/Paper';

import FAQ from './FAQ';
import SouthParty from './SouthParty';
import { Ceremony, Meal } from './April7th';
import NorthParty from './NorthParty';

import { firstNames } from '../util/data';

import styles from '../css/info';

const contains = (invitedTo, area) => invitedTo.indexOf(area) > -1;

const Area = ({display, component: Component}) => {
    if (!display) {
        return null;
    }
    
    return <Component/>;
};

const Heading = ({invite}) => (
    <div className={styles.heading}>
        <h1>{firstNames(invite.people)}</h1>
        <div className={styles.infopoints}>
            <div>We're so thrilled you can come to the Harker/Barker wedding!</div>
            <div>Here's everything you need to know about the day! Anything we've not mentioned? Give us a shout!</div>
        </div>
    </div>
);

class Info extends Component {
    render() {
        let { invite, invite: { invitedTo } } = this.props;
        
        return (
            <Paper zDepth={0}>
                <Heading invite={invite}/>
                <FAQ></FAQ>
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