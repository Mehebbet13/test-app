const ADD_TEXT = 'ADD_TEXT';


const MODULE_NAME = 'text';
export const getText = state => state[MODULE_NAME].text;
const initialState = {
    text: ""
};


export function reducer(state = initialState, {type, payload}) {
    switch (type) {
        case ADD_TEXT:
            return {
                text: payload.text,
            };
        default:
            return state;
    }
}

export const addText = (payload) => ({
    type: ADD_TEXT,
    payload
});