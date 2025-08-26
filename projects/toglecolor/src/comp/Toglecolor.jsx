import {useState} from "react"
import "../style.css"

const Toglecolor=()=>{
const[backgroundcolor,setbackgroundcolor]=useState('white')
const[textcolor,settextcolor]=useState('#1b1b1b')
const[buttonbg,setbuttonbg]=useState('white')

const handleChange=()=>{
setbackgroundcolor(backgroundcolor==='white'?'#1b1b1b':'white')
settextcolor(textcolor==='#1b1b1b'?'#ffa31a':'#1b1b1b')
setbuttonbg(buttonbg==='white'?'#1b1b1b':'white')
}

return(
<div style={{backgroundColor:backgroundcolor,color:textcolor,minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
<button onClick={handleChange} style={{backgroundColor:buttonbg,color:textcolor,border:`2px solid ${textcolor}`,position:"absolute",top:"10px",right:"10px",padding:"8px 14px",borderRadius:"4px",cursor:"pointer"}}>
{backgroundcolor==='#1b1b1b'?'Black Theme':'White Theme'}
</button>
<section>
<h1 className="glow-text">WELCOME TO A<br/>REAL WORLD...</h1>
</section>
</div>
)}

export default Toglecolor
