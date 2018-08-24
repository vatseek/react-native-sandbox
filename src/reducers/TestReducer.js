const testReducer = (state = {}, action) => {
    switch (action.type) {
        case "ACTION_TEST":
            return {
                ...state,
                message: 'hello'
            };
        default:
            return state;
    }
};

export default testReducer;