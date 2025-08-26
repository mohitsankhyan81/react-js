import { useState } from "react";
import "../style.css";

const Calculator = () => {
  const [inputValue, setinputValue] = useState("");

  const display = (value) => setinputValue(inputValue + value);
  const calculateResult = () => setinputValue(eval(inputValue));
  const clear = () => setinputValue("");

  return (
    <form>
      <input type="text" value={inputValue} readOnly />
      <span onClick={clear}>C</span>
      <span onClick={() => display("/")}>/</span>
      <span onClick={() => display("*")}>*</span>
      <span onClick={() => display("7")}>7</span>
      <span onClick={() => display("8")}>8</span>
      <span onClick={() => display("9")}>9</span>
      <span onClick={() => display("-")}>-</span>
      <span onClick={() => display("4")}>4</span>
      <span onClick={() => display("5")}>5</span>
      <span onClick={() => display("6")}>6</span>
      <span onClick={() => display("+")}>+</span>
      <span onClick={() => display("1")}>1</span>
      <span onClick={() => display("2")}>2</span>
      <span onClick={() => display("3")}>3</span>
      <span onClick={() => display("0")}>0</span>
      <span onClick={() => display("00")}>00</span>
      <span onClick={() => display(".")}>.</span>
      <span onClick={calculateResult}>=</span>
    </form>
  );
};

export default Calculator;
