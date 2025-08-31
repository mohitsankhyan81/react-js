import { useRef, useState, type FormEvent } from "react"

interface info{
  name:string;
  email:string;
  password:string|number;
}
const Form = () => {
  const [form,setform]=useState<info>({
    name:'',
    email:'',
    password:''
  });

  const name=useRef<HTMLInputElement>(null);
  const email=useRef<HTMLInputElement>(null);
  const password=useRef<HTMLInputElement>(null);

  const handlesubmit=(event:FormEvent<HTMLFormElement>)=>{
    event.preventDefault();
    const namevalue=name.current!.value;
    const emailvalue=email.current!.value;
    const passwordvalue=password.current!.value;

    setform({
      name:namevalue,
      email:emailvalue,
      password:passwordvalue
    })
  }
  return (
    <div>
      <h1>Here is your details: </h1>

      <form onSubmit={handlesubmit}>
        <input type="text" placeholder="Enter your Name" ref={name} />
        <input type="email" placeholder="Enter your Email" ref={email}/>
        <input type="password" placeholder="Enter your password" ref={password} />
        <input type="submit" />
      </form>
      <section>
        <h1>here is your details</h1>
        <h4>Name: {form.name}</h4>
        <h4>Email: {form.email}</h4>
        <h4>Password: {form.password}</h4>
      </section>
    </div>
  )
}

export default Form