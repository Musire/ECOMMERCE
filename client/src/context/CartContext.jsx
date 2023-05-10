import { createContext, useReducer, useState } from "react";
import { CartReducer } from "../reducers/CartReducer";
import { Types } from "../constants/ActionTypes"

const initialState = {
    id: "",
    icon: "",
    title: "",
    price: "",
    quantity: "",
    total: ""
}

export const CardContext =  createContext();

export const CartProvider = ({children}) => {
    const [state, dispatch] = useReducer(CartReducer, [])

    const addItem = (data) => {
        dispatch({ type: Types.ADD_ITEM, payload: data})
    }

    const removeItem = (data) => {
        dispatch({ type: Types.REMOVE_ITEM, payload: data})
    }

    const cardContext = { state, addItem, removeItem }
    
    return <CardContext.Provider value={cardContext}>{children}</CardContext.Provider>
}
 