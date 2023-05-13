import { createContext, useState } from "react";


export const ThumbContext = createContext()

export const ThumbProvider = ({children}) => {
    const [selected, setSelected] = useState(0)

    const changeSelected = (newState) => {
        setSelected(newState)
    }

    const increase = () => {
        setSelected(prev => prev + 1)
    }

    const decrease = () => {
        setSelected(prev => prev - 1)
    }

    const thumbContext = { selected, changeSelected, increase, decrease }

    return <ThumbContext.Provider value={thumbContext}>{children}</ThumbContext.Provider>
}