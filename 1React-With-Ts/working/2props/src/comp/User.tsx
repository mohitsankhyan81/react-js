import {ReactNode} from "react";

interface stakeholder{
  children: ReactNode;
}

const User = ({children}:stakeholder) => {
  return (
    <div>
      <h1>{children}</h1>
    </div>
  )
}

export default User