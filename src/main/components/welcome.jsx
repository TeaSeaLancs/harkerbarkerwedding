import React, { Component } from 'react';
import { connect } from 'react-redux';

import DocumentTitle from 'react-document-title';

import styles from '../css/welcome.css';
import { loadInviteIfNeeded } from '../actions/invite';
import { firstNames } from '../util/data';

import RaisedButton from 'material-ui/RaisedButton';
import ThumbUp from 'material-ui/svg-icons/action/thumb-up';
import ThumbDown from 'material-ui/svg-icons/action/thumb-down';

const Locations = ({locations}) => (
    <div className={styles.locations}>
        {locations.map((location, i) => (<div key={i} className={styles.location}>{location}</div>))}
    </div>
);

const InviteButtons = ({people}) => {
    const onePerson = (people.length === 1);
    const positiveMessage = onePerson ? `I'm there!` : `We're there!`;
    const negativeMessage = onePerson ? `I can't make it!` : `We can't make it!`;
    
    return (
        <div className={styles.inviteButtons}>
            <RaisedButton icon={<ThumbUp color="white"></ThumbUp>} label={positiveMessage} 
                backgroundColor="#4CAF50" labelColor="white"></RaisedButton>
            <RaisedButton icon={<ThumbDown color="white"></ThumbDown>} label={negativeMessage} 
                backgroundColor="#C62828" labelColor="white"></RaisedButton>
        </div>
    );
};

class Welcome extends Component {
    static needs() {
        return [loadInviteIfNeeded];
    }
    render() {
        return (
            <DocumentTitle title="The Harker/Barker Wedding">
                <div className={styles.welcome}>
                    <div className={styles.welcomeMessage}>
                        <div className={styles.inviteMessage}>
                            <div className={styles.invitePeople}>{firstNames(this.props.people)}</div>
                            <div>Matt &amp; Rach would love you to come to their wedding celebrations!</div>
                            <Locations locations={this.props.locations}></Locations>
                        </div>
                        <div className={styles.inviteDetails}>
                            <div>We'll send out loads more information in a little while!</div>
                            <div>Already made up your mind? Let us know!</div>
                        </div>
                        <InviteButtons people={this.props.people}></InviteButtons>
                    </div>
                </div>
            </DocumentTitle>
        );
    }
}

const mapStateToProps = state => {
    const { invite: { invite } } = state;
    
    return {...invite};
}

export default connect(mapStateToProps)(Welcome);