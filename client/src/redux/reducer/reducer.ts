const initialState = {
    
}

interface IAction {
    type: string
    payload: string | boolean | number | object
}

const rootReducer = (state = initialState, action: IAction) => {
    switch (action.type) {
        default:
            return {
                ...state,
            }
    }
}

export default rootReducer;