const initialState = {
    name:'APP',
}

export default function (state = initialState, action) {
    console.log('REDUSER APP', action);
    return state
}