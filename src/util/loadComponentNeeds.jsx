export default (store, components) => {
    if (!Array.isArray(components)) {
        components = [components];
    }
    
    const needs = components.reduce((allNeeds, component) => {
        allNeeds.push.apply(allNeeds, (component.needs && component.needs()) || []);
        return allNeeds;
    }, []);
    
    return Promise.all(needs.map(need => store.dispatch(need())));
}