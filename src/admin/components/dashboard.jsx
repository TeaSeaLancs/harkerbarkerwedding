import React, { Component } from 'react';
import { connect } from 'react-redux';

import AppBar from 'material-ui/AppBar';
import List from 'material-ui/List';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Add from 'material-ui/svg-icons/content/add';
import Snackbar from 'material-ui/Snackbar';

import DocumentTitle from 'react-document-title';

import Invitee from './invitee';
import Editor from './editor';
import InviteeCounts from './inviteeCounts';

import { createNewInvitee, openInvitee, finishedEditing, saveInvitee, deleteInvitee, undoLastDeletion, definitelyNotUndoingDeletion } from '../actions/edit';

import styles from '../css/dashboard.css';

import { loadInviteesIfRequired } from '../actions/invitees';

function editorIfRequired(component) {
    if (component.props.editInvitee) {
        return (<Editor 
                    invitee={component.props.editInvitee} 
                    close={component.props.finish} 
                    save={component.props.save}
                    delete={component.props.delete}></Editor>);
    }
}

class Dashboard extends Component {
    static needs() {
        return [loadInviteesIfRequired];
    }
    render() {
        return (
            <DocumentTitle title="Dashboard - Harker/Barker Wedding Admin">
                <div>
                    <AppBar title="Harker/Barker wedding admin">
                        <InviteeCounts invitees={this.props.invitees} className={styles.dashboardCounts}></InviteeCounts>
                    </AppBar>
                    <List>
                        {this.props.invitees.map((invitee, i) => (
                            <Invitee key={i} invitee={invitee} open={() => this.props.open(invitee)}></Invitee>
                        ))}
                    </List>
                    <FloatingActionButton className={styles.dashboardAdd} onTouchTap={() => this.props.new()}>
                        <Add></Add>
                    </FloatingActionButton>
                    <Snackbar 
                        open={this.props.showingUndo} 
                        message="Guest deleted" 
                        action="Undo"
                        onActionTouchTap={() => this.props.undoDelete()}
                        onRequestClose={() => this.props.notUndoingDeletion()}
                        autoHideDuration={5000}
                    ></Snackbar>
                    {editorIfRequired(this)}
                </div>
            </DocumentTitle>
        )
    }
}

const mapStateToProps = state => {
    const { invitees : { list, loaded }, edit: { currentInvitee, lastDeleted }} = state;
    
    return {
        invitees: list,
        loaded,
        editInvitee: currentInvitee,
        showingUndo: !!lastDeleted
    };
}

const mapDispatchToProps = dispatch => {
    return {
        open: invitee => dispatch(openInvitee(invitee)),
        new: () => dispatch(createNewInvitee()),
        finish: () => dispatch(finishedEditing()),
        save: invitee => dispatch(saveInvitee(invitee)),
        'delete': invitee => dispatch(deleteInvitee(invitee)),
        undoDelete: () => dispatch(undoLastDeletion()),
        notUndoingDeletion: () => dispatch(definitelyNotUndoingDeletion())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);