import React, { Component } from 'react';
import { connect } from 'react-redux';

import DocumentTitle from 'react-document-title';

import styles from '../css/welcome.css';
import { loadInviteIfNeeded } from '../actions/invite';
import { firstNames } from '../util/data';

const Locations = ({locations}) => (
    <div>
        {locations.map((location, i) => (<div key={i} className={styles.location}>{location}</div>))}
    </div>
);

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
                            <div></div>
                        </div>
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