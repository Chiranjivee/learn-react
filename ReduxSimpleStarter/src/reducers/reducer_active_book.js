// State is not application state, only the state
// this reducer is responsible for.
export default function (state = null, action) {
    console.log(action.payload);
    switch (action.type) {
        case 'BOOK_SELECTED': {
            return action.payload;
        }
            
    }

    return state;
}
