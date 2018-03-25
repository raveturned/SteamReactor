export function addInterface(i) {
    return { type: 'ADD_INTERFACE', i };
}

export function fetchInterfaces() {
    return { type: 'FETCH_INTERFACES' };
}
