import { useState } from "react";
import Popupcontent from "./Popupcontent";

const CopyInput = () => {
  const [inputvalue, setinputvalue] = useState('');
  const [copy, setcopy] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(inputvalue).then(() => {
      setcopy(true);
      setTimeout(() => setcopy(false), 2000);
    });
  };

  return (
    <div>
      <input
        type="text"
        value={inputvalue}
        onChange={(e) => setinputvalue(e.target.value)}
      />
      <button onClick={handleCopy}>Copy</button>

      <Popupcontent copy={copy}/>
    </div>
  );
};

export default CopyInput;
