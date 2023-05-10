import { useState } from "react"

const useCounter = ({ max=999 }) => {
    const [counter, setCounter] = useState(0)
    
    const increase = () => {
        setCounter(prev => prev + 1)
    }

    const decrease = () => {
        setCounter(prev => prev - 1)
    }

    return { counter, increase, decrease};
}
 
export default useCounter;