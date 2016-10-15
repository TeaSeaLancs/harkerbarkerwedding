export const sentence = list => {
     if (list.length === 1) {
        return list[0];
    }
    
    return `${list.slice(0, -1).join(", ")} & ${list.slice(-1)[0]}`;
}

export const firstNames = people => {
    const names = people.map(person => person.name.split(' ')[0]);
    return sentence(names);
}