
const initialState = {
    data: {},
}

export default function (state = initialState, action) {
    switch (action.type) {
        case 'SET_PHOTO': {
            return {
                ...state,
                photo: action.photo,
            }
        }
        default: return state;
    }
}