import {useState} from "react"
import "../style.css"

const Testimonial=()=>{const[currentIndex,setCurrentIndex]=useState(0);const testimonial=[{quote:"this is the best project I've even used",author:"Jane Doe"},{quote:"this is my high recommended project and I am working on it",author:"Jane Doe"},{quote:"we are playing free fire daily and enjoy my life",author:"Jane Doe"},{quote:"we are learning useState from many days and I love to code in JSX",author:"Jane Doe"}];const handlePrevClick=()=>{setCurrentIndex((currentIndex+testimonial.length-1)%testimonial.length)};const handleNextClick=()=>{setCurrentIndex((currentIndex+1)%testimonial.length)};return(<div className="testimonial"><div className="testimonial-quote">{testimonial[currentIndex].quote}</div><div className="testimonial-author">-{testimonial[currentIndex].author}</div><div className="testimonial-nav"><button onClick={handlePrevClick}>Prev</button><button onClick={handleNextClick}>Next</button></div></div>)}

export default Testimonial
