import React from 'react';

const loadComponentNeeds = (store, components) => {
    if (!Array.isArray(components)) {
        components = [components];
    }
    
    const needs = components.reduce((allNeeds, component) => {
        if (component) {
            allNeeds.push.apply(allNeeds, (component.needs && component.needs()) || []);
        }
        return allNeeds;
    }, []);
    
    return Promise.all(needs.map(need => store.dispatch(need())));
};

export default loadComponentNeeds;

export function createAndLoadFor(store) {
    return (Component, props) => {
        if (Component.needs) {
            loadComponentNeeds(store, Component);
        }
        return <Component {...props} />;
    };
}
