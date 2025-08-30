import { useRef, useState, type FormEvent } from "react"
interface fromData{
  name:string;
  email:string;
  password:string|number;
}
const Form = () => {
  const [submitData,setsubmiteddata]=useState<fromData>({
    name:'',
    email:'',
    password:''
  })

  const name=useRef<HTMLInputElement>(null);
  const email=useRef<HTMLInputElement>(null);
  const password=useRef<HTMLInputElement>(null);

  const handlesubmit=(event:FormEvent<HTMLFormElement>)=>{
    event.preventDefault()

    const nameValue=name.current!.value;
    const emailvalue=email.current!.value;
    const passwordvalue=password.current!.value;

    setsubmiteddata({
      name:nameValue,
      email:emailvalue,
      password: passwordvalue
    })
  }
  return (
    <div>
      <form onSubmit={handlesubmit}>
      <input type="text" placeholder="Enter your name " ref={name} />
      <input type="text" placeholder="Enter your email " ref={email} />
      <input type="password" placeholder="Enter your password" ref={password} />
      <button type="submit">Submit</button>

      <section>
        <h1>Name: {submitData.name}</h1>
        <h1>Email: {submitData.email}</h1>
        <h1>Password: {submitData.password}</h1>
      </section>
      </form>
    </div>
  )
}

export default Form