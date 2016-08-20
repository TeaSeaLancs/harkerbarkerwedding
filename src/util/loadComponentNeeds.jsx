const loadNeeds = (store, component) => {
    if (!component.needs) {
        return null;
    }
    
    const needs = component.needs();
    if (!needs || !needs.length) {
        return null;
    }
    
    return Promise.all(needs.map(need => {
        console.log("Loading need ", need);
        return store.dispatch(need());
    }));
}

export default (store, components) => {
    if (!Array.isArray(components)) {
        components = [components];
    }
    console.log("Components", components);
    
    return Promise.all(components.map(component => loadNeeds(store, component)));
}