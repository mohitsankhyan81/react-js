import { useForm, type SubmitHandler } from "react-hook-form"

interface FormData {
  name: string
  email: string
  password: string | number
}

const Form = () => {
  const { register, handleSubmit, formState: { errors, isSubmitSuccessful } } = useForm<FormData>()
  const onSubmit: SubmitHandler<FormData> = data => {
    console.log(data)
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">Name: </label>
        <input type="text" id="name" {...register("name", { required: "Name is required" })} />
        {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}
      </div>
      <div>
        <label htmlFor="email">Email: </label>
        <input type="email" id="email" {...register("email", { required: "Email is required" })} />
        {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}
      </div>
      <div>
        <label htmlFor="password">Password: </label>
        <input type="password" id="password" {...register("password", { required: "Password is required" })} />
        {errors.password && <p style={{ color: "red" }}>{errors.password.message}</p>}
      </div>
      <button type="submit">Submit</button>
      {isSubmitSuccessful && <p style={{ color: "green" }}>Form submitted successfully</p>}
    </form>
  )
}

export default Form
