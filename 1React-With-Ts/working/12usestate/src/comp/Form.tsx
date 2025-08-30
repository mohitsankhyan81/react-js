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

  const submitform=(event:FormEvent<HTMLFormElement>)=>{
    event.preventDefault();

    const namevalue=name.current!.value;
    const emailvalue=email.current!.value;
    const passvalue=password.current!.value;

    setdata({
      name:namevalue,
      email:emailvalue,
      password:passvalue
    })
  }
  return (
    <div>
      <form onClick={submitform}>
        <input type="text" placeholder="Enter your name " ref={name} />
        <input type="text" placeholder="Enter your email " ref={email} />
        <input type="text" placeholder="Enter password" ref={password}/>
        <button type="submit">Submit</button>
        <section>
        <h4>Name: {data.name}</h4>
        <h4>Email: {data.email}</h4>
        <h4>Password: {data.password}</h4>
        </section>
      </form>
    </div>
  )
}

export default Form