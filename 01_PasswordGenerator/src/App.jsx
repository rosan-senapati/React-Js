import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useCallback, useEffect, useRef } from "react";
function App() {

  //States and References
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);
  const copyRef = useRef(null);

  //Password Generation Function
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+<>?:";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  //Copy Password Function
  const copyToClipBoard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(passwordRef.current?.value);
    copyRef.current.innerText = "Copied!";
  }, [password]);


  //UseEffect Dependecy Rendering
  useEffect(() => {
    passwordGenerator();
    setTimeout(() => {
      copyRef.current.innerText = "Copy";
    }, 10000);
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  //Output Part
  return (
    <>
      <div className="text-center">
        <h1 className="text-white d-inline">Password Generator</h1>
        <div className="inputfield  d-flex align-items-center justify-content-center w-100 p-5">
          <input
            type="text"
            className="form-control w-50 p-3 fs-4"
            placeholder="Password"
            value={password}
            readOnly
            ref={passwordRef}
          />
          <button
            className="btn bg-primary p-3 rounded  fs-4"
            onClick={copyToClipBoard}
            ref={copyRef}
          >
            Copy
          </button>
        </div>
        <div className="d-flex justify-content-center gap-3 text-warning p-2">
          <input
            type="range"
            className="form-control w-25 me-2"
            max={28}
            min={8}
            value={length}
            onChange={(e) => setLength(e.target.value)}
          />
          <label className="form-label">Length: {length}</label>
          <input
            type="checkbox"
            className="form-check-input"
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
          />
          <label className="form-label">Number</label>
          <input
            type="checkbox"
            className="form-check-input"
            onChange={() => {
              setCharAllowed((prev) => !prev);
            }}
          />
          <label className="form-label">Character</label>
        </div>
      </div>
    </>
  );
}

export default App;
