import React, { Component } from 'react';
import { connect } from 'react-redux';

import DocumentTitle from 'react-document-title';

import styles from '../css/welcome.css';
import { loadInviteIfNeeded, loadGifIfNeeded, acceptInvite, declineInvite } from '../actions/invite';
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
        <div>{message}</div>
        <div className={styles.inviteGif}>
            <img src={gif}></img>
        </div>
    </div>
);

const InviteResponse = ({state, gif, ...props}) => {
    if (state === 'pending') {
        return (
            <div>
                <div>Already made up your mind? Let us know!</div>
                <InviteButtons {...props}></InviteButtons>
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

const NoInvite = props => (
    <DocumentTitle title="The Harker/Barker Wedding">
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
    </DocumentTitle>
);

class Welcome extends Component {
    static needs() {
        return [loadInviteIfNeeded, loadGifIfNeeded];
    }
    render() {
        if (!this.props.exists) {
            return (<NoInvite></NoInvite>);
        }
        
        const { people, locations, accept, decline, state, gif } = this.props;
        
        return (
            <DocumentTitle title="The Harker/Barker Wedding">
                <div className={styles.welcome}>
                    <div className={styles.welcomeMessage}>
                        <div className={styles.inviteMessage}>
                            <div className={styles.invitePeople}>{firstNames(people)}</div>
                            <div>Matt &amp; Rach would love you to come to their wedding celebrations!</div>
                            <Locations locations={locations}></Locations>
                        </div>
                        <div className={styles.inviteDetails}>
                            <div>We'll send out loads more information in a little while!</div>
                        </div>
                        <InviteResponse gif={gif} state={state} people={people} accept={accept} decline={decline}></InviteResponse>
                    </div>
                </div>
            </DocumentTitle>
        );
    }
}

Welcome.defaultProps = {
    exists: true
};

const mapStateToProps = state => {
    const { invite: { invite, gif, exists } } = state;
    
    return {...invite, exists, gif};
}

const mapDispatchToProps = dispatch => {
    return {
        accept: () => dispatch(acceptInvite()),
        decline: () => dispatch(declineInvite())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);