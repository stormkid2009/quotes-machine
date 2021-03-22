import React,{useState,useEffect} from 'react'
import quotes from './Quotes'

function Quote({i}) {
    const [text,setText]=useState("");
    //make new array with quotes' text as elements
    const array = [...quotes].map(item=>item.quote);
    useEffect(() => {
        setText(array[i])
        
    }, [i])
    return (
        <p id="text">
            {text}
        </p>
    )
}

export default Quote
