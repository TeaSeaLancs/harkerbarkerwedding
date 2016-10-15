import React, { Component } from 'react';
import { connect } from 'react-redux';

import DocumentTitle from 'react-document-title';

import styles from '../css/welcome.css';
import { loadInviteIfNeeded } from '../actions/invite';
import { firstNames } from '../util/data';

import Paper from 'material-ui/Paper';

class Welcome extends Component {
    static needs() {
        return [loadInviteIfNeeded];
    }
    render() {
        return (
            <DocumentTitle title="The Harker/Barker Wedding">
                <div className={styles.welcome}>
                    <Paper className={styles.inviteMessage} style={{backgroundColor: 'rgba(255, 255, 255, 0.4)'}}>
                        <div className={styles.invitePeople}>{firstNames(this.props.people)}</div>
                        <div>Save the date because you're invited!</div>
                        <div>{this.props.dates}</div>
                    </Paper>
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