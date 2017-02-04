import React, { Component } from 'react';
import { connect } from 'react-redux';

import DocumentTitle from 'react-document-title';

class Info extends Component {
    render() {
        return (
            <div>Here's some info!</div>
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