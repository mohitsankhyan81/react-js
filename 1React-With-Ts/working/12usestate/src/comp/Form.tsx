import { useRef, useState, type FormEvent } from "react"

type info={
  name:string;
  email:string;
  password:string;
}
const Form = () => {
  const [data,setdata] = useState<info>({
    name:'',
    email:'',
    password:''
  });

  const name=useRef<HTMLInputElement>(null);
  const email=useRef<HTMLInputElement>(null);
  const password=useRef<HTMLInputElement>(null);


  const handleSubmit=(event:FormEvent<HTMLFormElement>)=>{
    event.preventDefault();

    const nameval=name.current!.value;
    const emailval=name.current!.value;
    const passwordval=name.current!.value;

    setdata({
      name:nameval,
      email:emailval,
      password:passwordval
    })
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter the name" ref={name}/>
        <input type="text" placeholder="Enter the email" ref={email} />
        <input type="text" placeholder="enter your password" ref={password}/>
        <input type="submit" />
      </form>
      <section>
        <h1>
          Enter your details
        </h1>
        <h4>Name: {data.name}</h4>
        <h4>Email: {data.email}</h4>
        <h4>Password {data.email}</h4>
      </section>
    </div>
  )
}

export default Form