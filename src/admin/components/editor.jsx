import styles from '../css/editor.css';

import React, { Component } from 'react';

import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import Subheader from 'material-ui/Subheader';
import List, { ListItem } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import Clear from 'material-ui/svg-icons/content/clear';

import { firstNames, locations } from '../util/data';

function removePerson(component, invitee, person) {
    component.setState({
        invitee: Object.assign({}, invitee, {
            people: invitee.people.filter(p => p !== person)
        })
    });
}

function editableIconButton(component, invitee, person) {
    if (person.name) {
        return (
            <IconButton tooltip="Remove" onTouchTap={() => removePerson(component, invitee, person)}>
                <Clear></Clear>
            </IconButton>
        );
    }
}

function updateInvitedTo(component, invitee, location, checked) {
    let newInvitedTo;
    if (checked) {
        newInvitedTo = [...invitee.invitedTo, location];
    } else {
        newInvitedTo = [...invitee.invitedTo.filter(l => l !== location)];
    }
    
    component.setState({
        invitee: Object.assign({}, invitee, {
            invitedTo: newInvitedTo
        })
    });
}

function locationEntry(name, displayName, component, invitee) {
    return (
        <Checkbox 
            key={name}
            defaultChecked={invitee.invitedTo.indexOf(name) > -1} 
            label={displayName} 
            onCheck={(event, checked) => updateInvitedTo(component, invitee, name, checked)}></Checkbox>
    );
}

function updatePerson(event, component, invitee, person) {
    person.name = event.target.value;
    
    if (person.new) {
        delete person.new;
        component.setState({
            invitee: Object.assign({}, invitee, {
                people: [...invitee.people, person]
            })
        });
    }
}

function editablePeople(component, invitee) {
    return [...invitee.people, {name: "", state: 'pending', new: true}].map((person, i) => {
        return (
            <ListItem key={`person_${i}`} rightIconButton={editableIconButton(component, invitee, person)} >
                <TextField 
                    hintText="New person" 
                    defaultValue={person.name} 
                    onChange={event => updatePerson(event, component, invitee, person)}>
                </TextField>
            </ListItem>
        );
    });
}

function invitedList(component, invitee) {
    const entries = [];
    for (let name in locations) {
        entries.push(locationEntry(name, locations[name], component, invitee));
    }
    return (<ListItem className={styles.locationBox}>{entries}</ListItem>);
}

function clone(invitee) {
    return Object.assign({}, invitee, {
        people: [...invitee.people.map(p => Object.assign({}, p))],
        invitedTo: [...invitee.invitedTo]
    });
}

function validate(invitee) {
    invitee.people = invitee.people.filter(p => !!p.name);
    return invitee;
}

function updateContact(event, invitee) {
    invitee.contact = event.target.value;
}

function updateID(event, invitee) {
    invitee.newID = event.target.value;
}

const IDEditor = ({invitee, isNew}) => {
    if (isNew) {
        return null;
    }
    
    return (<ListItem>
        <TextField fullWidth={true}
            defaultValue={invitee.id}
            floatingLabelText="ID"
            onChange={event => updateID(event, invitee)}>
        </TextField>
    </ListItem>);
};

class Editor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            originalInvitee: props.invitee,
            invitee: clone(props.invitee),
            isNew: !props.invitee.id
        };
    }
    render() {
        const actions = [
            <FlatButton label="Save" primary={true} onTouchTap={() => this.save()}></FlatButton>,
            <FlatButton label="Cancel" secondary={true} onTouchTap={() => this.handleClose()}></FlatButton>
        ];
        
        if (!this.state.isNew) {
            actions.push(
                <FlatButton label="Delete" secondary={true} style={{float: 'left', color: 'red'}} onTouchTap={() => this.delete()}></FlatButton>
            );
        }
        
        return (
            <Dialog 
                actions={actions}
                title={this.title()} 
                open={true} 
                contentClassName={styles.inviteeEditor} 
                onRequestClose={() => this.handleClose()}
                autoScrollBodyContent={true}>
                <List>
                    <Subheader>People</Subheader>
                    {editablePeople(this, this.state.invitee)}
                    <ListItem>
                        <TextField
                            fullWidth={true}
                            defaultValue={this.state.invitee.contact}
                            floatingLabelText="Email address" 
                            hintText="(Enter 'paper' for paper invite)" 
                            onChange={event => updateContact(event, this.state.invitee)}>
                        </TextField>
                    </ListItem>
                    <Subheader>Invited to</Subheader>
                    {invitedList(this, this.state.invitee)}
                    <IDEditor invitee={this.state.invitee} isNew={this.state.isNew}></IDEditor>
                </List>
            </Dialog>
        );
    }
    
    title() {
        if (this.state.isNew) {
            return "Create new invite";
        }
        
        return `Editing invite for ${firstNames(this.state.originalInvitee)}`;
    }
    
    handleClose() {
        this.props.close();
    }
    
    save() {
        const invitee = validate(this.state.invitee);
        this.props.save(invitee).then(() => {
            this.handleClose();
        }).catch(err => {
            // TODO HANDLE ERRORS!
            console.log(err);
        });
    }
    
    delete() {
        const invitee = this.state.originalInvitee;
        this.props.delete(invitee).then(() => {
            this.handleClose();
        }).catch(err => {
            // TODO HANDLE ERRORS!
            console.log(err);
        });
    }
}

export default Editor;