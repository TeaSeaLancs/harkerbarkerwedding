import React, { Component } from 'react';
import { connect } from 'react-redux';

import DocumentTitle from 'react-document-title';

import Welcome from './welcome';
import Info from './info';

import styles from '../css/main.css';

import Paper from 'material-ui/Paper';

import { loadInviteIfNeeded, loadGifIfNeeded } from '../actions/invite';

const Loading = () => (
    <Paper className={styles.loading} style={{backgroundColor: 'rgba(126, 87, 194, 0.1)'}}>Loading...</Paper>
);

const Content = ({loaded, accepted}) => {
    if (!loaded) {
        return (<Loading></Loading>);
    } else if (!accepted) {
        return (<Welcome></Welcome>);
    } else {
        return (<Info></Info>);
    }
};

class BigWelcome extends Component {
    static needs() {
        return [loadInviteIfNeeded, loadGifIfNeeded];
    }
    
    render() {
        return (
            <DocumentTitle title="The Harker/Barker Wedding">
                <Content {...this.props}></Content>
            </DocumentTitle>
        );
    }
}

const mapStateToProps = state => {
    const { invite: { loaded, invite } } = state;
    
    const accepted = (invite && invite.state === 'accepted');
    
    return {
        loaded,
        accepted
    };
};

export default connect(mapStateToProps)(BigWelcome);