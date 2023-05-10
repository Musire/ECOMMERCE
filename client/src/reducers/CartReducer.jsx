const initialState = {
    id: "",
    icon: "",
    title: "",
    price: "",
    quantity: "",
    total: ""
}

export const CartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ITEM' : {
            return [...state, action.payload]
        }
        case 'REMOVE_ITEM' : {
            const newState = state.filter(obj => obj.id !== action.payload)
            return 
        }
    }

    throw Error('Unknown action: ' + action.type);

}

