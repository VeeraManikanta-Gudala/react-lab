import { useState } from "react";
import "./calci.css";
function Calculator() {
const [input, setInput] = useState("");
function handleClick(value) {
if (value === "C") {
  setInput("");
} 
else if (value === "⌫") {
  setInput((prevInput) => prevInput.slice(0, -1));
} 
else if (value === "=") {
  try {
    setInput(eval(input).toString());
  } catch (error) {
    setInput("Error");
}
} else {
  setInput((prevInput) => prevInput + value);
}
}
return (
<div className="calculator">
<h2>Calculator App</h2>
<div className="display">
<input type="text" value={input} readOnly />
</div>
<div className="buttons">
<button className="ccc" onClick={() => handleClick("C")}>C</button>
<button onClick={() => handleClick("⌫")}>⌫</button>
<button onClick={() => handleClick("/")}>/</button>
<button onClick={() => handleClick("*")}>*</button>
<button onClick={() => handleClick("7")}>7</button>
<button onClick={() => handleClick("8")}>8</button>
<button onClick={() => handleClick("9")}>9</button>
<button onClick={() => handleClick("-")}>-</button>
<button onClick={() => handleClick("4")}>4</button>
<button onClick={() => handleClick("5")}>5</button>
<button onClick={() => handleClick("6")}>6</button>
<button onClick={() => handleClick("+")}>+</button>
<button onClick={() => handleClick("1")}>1</button>
<button onClick={() => handleClick("2")}>2</button>
<button onClick={() => handleClick("3")}>3</button>
<button onClick={() => handleClick("0")}>0</button>

<button  onClick={() => handleClick(".")}>.</button>
<button className="equals" onClick={() =>

handleClick("=")}>=</button>
</div>
</div>
);
}
export default Calculator;