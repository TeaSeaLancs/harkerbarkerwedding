import React, { Component } from 'react';
import { connect } from 'react-redux';

import styles from '../css/welcome.css';
import { acceptInvite, declineInvite } from '../actions/invite';
import { firstNames } from '../util/data';

import RaisedButton from 'material-ui/RaisedButton';
import ThumbUp from 'material-ui/svg-icons/action/thumb-up';
import ThumbDown from 'material-ui/svg-icons/action/thumb-down';

const Locations = ({locations}) => (
    <div className={styles.locations}>
        {locations.map((location, i) => (<div key={i} className={styles.location}>{location}</div>))}
    </div>
);

const InviteButtons = ({people, accept, decline}) => {
    const onePerson = (people.length === 1);
    const positiveMessage = onePerson ? `I'm there!` : `We're there!`;
    const negativeMessage = onePerson ? `I can't make it!` : `We can't make it!`;
    
    return (
        <div className={styles.inviteButtons}>
            <RaisedButton icon={<ThumbUp color="white"></ThumbUp>} label={positiveMessage} 
                backgroundColor="#4CAF50" labelColor="white" onTouchTap={() => accept()}></RaisedButton>
            <RaisedButton icon={<ThumbDown color="white"></ThumbDown>} label={negativeMessage} 
                backgroundColor="#C62828" labelColor="white" onTouchTap={() => decline()}></RaisedButton>
        </div>
    );
};

const InviteMessage = ({message, gif}) => (
    <div>
        <div className={styles.inviteResponseMessage}>{message}</div>
        <div className={styles.inviteGif}>
            <img src={gif}></img>
        </div>
    </div>
);

const InviteResponse = ({state, gif, ...props}) => {
    if (state === 'pending') {
        return (
            <div>
                <div className={styles.inviteScreen}>
                    <div>Can you make it? Let us know!</div>
                    <InviteButtons {...props}></InviteButtons>
                </div>
                <div className={styles.invitePrint}>
                    <span className={styles.inviteAddress}>
                        If you can come, please RSVP to Flat 1, St. James' Court, Park View Close, St. Albans, Hertfordshire, AL1 5TL.
                    </span>
                </div>
            </div>
        );
    }
    
    if (state === 'accepted') {
        return (<InviteMessage message={`You're coming! Fantastic!`} gif={gif}></InviteMessage>);
    }
    
    if (state === 'declined') {
        return (<InviteMessage message={`We're sorry you can't make it! If it turns out you can, or want to celebrate some other way, drop us a line!`} gif={gif}></InviteMessage>);
    }
    
    return null;
};

const NoInvite = () => (
    <div className={styles.welcome}>
        <div className={styles.welcomeMessage}>
            <div className={styles.inviteMessage}>
                Hi there, we can't seem to find your invite to the Harker/Barker wedding.
            </div>
            <div className={styles.inviteDetails}>
                Please check your invite link, or ask Matt and/or Rachel about what's going on.
            </div>
        </div>
    </div>
);

const InviteText = ({invitedTo}) => {
    if (invitedTo.length === 1 && invitedTo[0] === 'north') {
        return (<span>Judith &amp; Adrian would love you to come to Matt &amp; Rach's wedding celebrations!</span>);
    }
    
    return (<div>Matt &amp; Rach would love you to come to their wedding celebrations!</div>);
};

class Welcome extends Component {
    render() {
        if (!this.props.exists) {
            return (<NoInvite></NoInvite>);
        }
        
        const { people, locations, invitedTo, accept, decline, state, gif } = this.props;
        
        return (
            <div className={styles.welcome}>
                <div className={styles.welcomeMessage}>
                    <div className={styles.inviteMessage}>
                        <div className={styles.invitePeople}>{firstNames(people)}</div>
                        <InviteText invitedTo={invitedTo}></InviteText>
                        <Locations locations={locations}></Locations>
                    </div>
                    <InviteResponse gif={gif} state={state} people={people} accept={accept} decline={decline}></InviteResponse>
                </div>
            </div>
        );
    }
}

Welcome.defaultProps = {
    exists: true
};

const mapStateToProps = state => {
    const { invite: { invite, gif, exists } } = state;
    
    return {...invite, exists, gif};
};

const mapDispatchToProps = dispatch => {
    return {
        accept: () => dispatch(acceptInvite()),
        decline: () => dispatch(declineInvite())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);