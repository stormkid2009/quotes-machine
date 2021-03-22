import React,{useState,useEffect} from 'react'
import quotes from './Quotes'

//i is the props passed from parent to indicate the index of quotes array
function Author({i}) {
    const [author,setAuthor]= useState("");
    //create new array of authors from quotes array
    const array = [...quotes].map(item => item.author)

    useEffect(() => {
        setAuthor(array[i])
        
    }, [i])
    return (
        <p id="author">
            {author}
        </p>
    )
}

export default Author
