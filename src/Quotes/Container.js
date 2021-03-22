import React,{useState,useEffect} from 'react'
import '../App.scss'
import quotes from './Quotes'
import Quote from './Quote'
import Author from './Author'
import colors from '../styles/color'



function Container() {
    const [index,setIndex]=useState(0);
    //get our quote text and author to tweet them with tweeter anchor
    const tweet=`${quotes[index].quote}\n ${quotes[index].author}`
    //set text color and body background color
    const myColor = colors[index];
    //handle our state to display new quote with the index
    const handleIndex=()=>{
        index < quotes.length-1 ? setIndex(index+1):setIndex(0);
        console.log(quotes.length,myColor,colors.length)
        
    }
    useEffect(() => {
        //every time index will change it will update our components
        document.querySelector('body').style.backgroundColor = myColor;
        document.getElementById('quote-box').style.color=myColor;
        
      },[index,myColor])
    
    return (
        <div id="quote-box">
            <Quote  i={index}/>
            <Author i={index}/>
            
            <div className="control">
                <a href ={`https://twitter.com/intent/tweet?text=${tweet}`} target="_blank" rel="noopener noreferrer"
                id="tweet-quote"><button>Tweet</button></a>
    
                <button id="new-quote"
                onClick={handleIndex}
                >New Quote</button>
            </div>
            
        </div>
    )
}

export default Container
