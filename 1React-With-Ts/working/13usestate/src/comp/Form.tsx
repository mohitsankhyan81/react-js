import { useRef, useState, type FormEvent } from "react"

type info={
  name:string;
  email:string;
  password:string|number;
}
const Form = () => {

  const [data,setdata]=useState<info>({
    name:'',
    email:'',
    password:''
  })
  const name=useRef<HTMLInputElement>(null);
  const email=useRef<HTMLInputElement>(null);
  const password=useRef<HTMLInputElement>(null);

  const handleclick=(event:FormEvent<HTMLFormElement>)=>{
    event.preventDefault();

    const namevalue=name.current!.value;
    const emailvalue=email.current!.value;
    const passwordvalue=password.current!.value;

    setdata({
      name:namevalue,
      email:emailvalue,
      password:passwordvalue
    })
    
  }
  return (
    <div>
      <form  onSubmit={handleclick}>
        <input type="text" placeholder="Enter your name" ref={name}/>
        <input type="email" placeholder="Enter your email" ref={email} />
        <input type="text" placeholder="Enter your Passord" ref={password}/>
        <button type="submit">Submit</button>
      </form>
      <section>
        <h1>Data is here</h1>

        <h4>Name: {data.name}</h4>
        <h4>Email: {data.email}</h4>
        <h4>Password: {data.password}</h4>
      </section>
    </div>
  )
}

export default Form