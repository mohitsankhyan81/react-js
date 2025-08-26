import {useState} from "react";
import '../style.css';
const Form=()=>{
const[username,setusername]=useState('');
const[email,setEmail]=useState('');
const[password,setpassword]=useState('');
const[confirmpass,setconfirmpass]=useState('');
const[errorusername,setErrorusername]=useState('');
const[errorEmail,seterrorEmail]=useState('');
const[errorpassword,setErrorpass]=useState('');
const[errorconfirm,setErrorconfirm]=useState('');
const[usercolor,setusercolor]=useState('');
const[emailcolor,setemailcolor]=useState('');
const[passcolor,setpasscolor]=useState('');
const[confirmColor,setconfirmcolor]=useState('');
const validate=e=>{
e.preventDefault();
if(username.length>=8){
setErrorusername('');
setusercolor('green');
}else{
setErrorusername('username must be 8 letter long.');
setusercolor('red');
}
if(email.includes('@gmail')){
seterrorEmail('');
setemailcolor('green');
}else{
seterrorEmail('please right a correct email');
setemailcolor('red');
}
if(password.length>=8){
setErrorpass('');
setpasscolor('green');
}else{
setErrorpass('please right a correct password');
setpasscolor('red');
}
if(password!==''&&password===confirmpass){
setErrorconfirm('');
setconfirmcolor('green');
}else{
setErrorconfirm('Pass is not correct');
setconfirmcolor('red');
}
};
return(
<>
<div className="cart">
<form>
<input type="text" placeholder="name" style={{borderColor:usercolor}} value={username} onChange={e=>setusername(e.target.value)}/>
<p className="error">{errorusername}</p>
<input type="text" placeholder="Email" style={{borderColor:emailcolor}} value={email} onChange={e=>setEmail(e.target.value)}/>
<p className="error">{errorEmail}</p>
<input type="password" placeholder="Password" style={{borderColor:passcolor}} value={password} onChange={e=>setpassword(e.target.value)}/>
<p className="error">{errorpassword}</p>
<input type="password" placeholder="Confirm Password" style={{borderColor:confirmColor}} value={confirmpass} onChange={e=>setconfirmpass(e.target.value)}/>
<p className="error">{errorconfirm}</p>
<button className="submit-btn" onClick={validate}>submit</button>
</form>
</div>
</>
)};
export default Form;
