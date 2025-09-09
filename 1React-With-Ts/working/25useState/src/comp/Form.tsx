import { useRef, useState, type FormEvent } from "react"

type info={
  name:string;
  email:string;
  password:string|number;
}
const Form = () => {
  const [data,setdata] = useState<info>({
    name:'',
    email:'',
    password:''
  })

  const name=useRef<HTMLInputElement>(null);
  const email=useRef<HTMLInputElement>(null);
  const password=useRef<HTMLInputElement>(null);

  const handlesubmit=(event:FormEvent<HTMLFormElement>)=>{
    event.preventDefault();

    const inputval=name.current!.value;
    const emailval=email.current!.value;
    const passval=password.current!.value;

    setdata({
      name:inputval,
      email:emailval,
      password:passval
    })
  }
  return (
    <div>
      <form onSubmit={handlesubmit}>
        <input type="text" placeholder="Enter your name" ref={name} />
        <input type="email" placeholder="Enter your email" ref={email}/>
        <input type="password" placeholder="Strong password" ref={password}/>
        <input type="submit" />
      </form>
      <section>
        <h1>
          Here is your details
        </h1>
        <h4>Name: {data.name}</h4>
        <h4>Email: {data.email}</h4>
        <h4>Password: {data.password}</h4>
      </section>
    </div>
  )
}

export default Form