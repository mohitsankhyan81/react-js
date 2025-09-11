import { useRef, useState, type FormEvent } from "react"

type info={
  name:string,
  email:string,
  password:string|number;
}
const App = () => {

  const [data,setdata]=useState<info>({
    name:'',
    email:'',
    password:''
  });

  const name=useRef<HTMLInputElement>(null);
  const email=useRef<HTMLInputElement>(null);
  const password=useRef<HTMLInputElement>(null);

  const handlesubmit=(event:FormEvent<HTMLFormElement>)=>{
    event.preventDefault();
    
    const nameval=name.current!.value;
    const emailval=email.current!.value;
    const Passwordval=email.current!.value;

    setdata({
      name:nameval,
      email:emailval,
      password:Passwordval
    })
  }
  return (
    <div>
      <form onSubmit={handlesubmit}>
        <input type="text" placeholder="name" ref={name}/>
        <input type="text" placeholder="email" ref={email} />
        <input type="text" 
        placeholder="password" />
        <input type="submit" ref={password} />
      </form>

      <section>
        <h1>detail section</h1>
        <h4>Name: {data.name}</h4>
        <h4>Email: {data.email}</h4>
        <h4>Password: {data.password}</h4>
      </section>
    </div>
  )
}

export default App