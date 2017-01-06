export const locations = {
    ceremony: 'Ceremony',
    south: 'South Party',
    north: 'North Party'
}

export const sentence = list => {
     if (list.length === 1) {
        return list[0];
    }
    
    return `${list.slice(0, -1).join(", ")} & ${list.slice(-1)[0]}`;
}

export const firstNames = invitee => {
    const names = invitee.people.map(person => person.name.split(' ')[0]);
    return sentence(names);
}

export const invitedTo = invitee => {
    return sentence(invitee.invitedTo.map(location => locations[location]));
}

export const locationName = location => locations[location] || "";