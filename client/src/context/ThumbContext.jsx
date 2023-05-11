import { createContext, useState } from "react";


export const ThumbContext = createContext()

export const ThumbProvider = ({children}) => {
    const [selected, setSelected] = useState(0)

    const changeSelected = (newState) => {
        setSelected(newState)
    }

    const thumbContext = { selected, changeSelected }

    return <ThumbContext.Provider value={thumbContext}>{children}</ThumbContext.Provider>
}