import { useState } from "react";
import './App.css';
import { uppercases, lowercases, numbers, symbols } from "./data"

function App() {
  const [password, setPassword] = useState();
  const [uppercase, setUppercase] = useState(true);
  const [lowercase, setLowercase] = useState(true);
  const [number, setNumber] = useState(false);
  const [symbol, setSymbol] = useState(false);
  const [passwordLength, setPasswordLength] = useState(8);
  // const [showPassword, setShowPassword] = useState([]);

  const handleGeneratePassword = (e) => {

    let characterList = "";

    if (uppercase) {
      characterList += uppercases;
    }
    if (lowercase) {
      characterList += lowercases;
    }
    if (number) {
      characterList += numbers;
    }
    if (symbol) {
      characterList += symbols;
    }
    setPassword(createPassword(characterList))

  }

const createPassword = (characterList) =>{
  let password = '';
  const characterListLength = characterList.length;

  for(let i=0; i< passwordLength; i++){
    const characterIndex = Math.round(Math.random()*characterListLength);
    password= password+characterList.charAt(characterIndex);
  }
return password;
}

const resetSettings = () => {
  setPassword("Slaptažodis");
  setUppercase(true);
  setLowercase(true);
  setNumber(false);
  setSymbol(false);
  setPasswordLength(8);
};

  return (
    <div className="container">

      <div className="generator">
        <h2
          className="generator-header">
          Generate a Strong Password!
        </h2>
        <div className="generator-password">
          <input
            className="form-control mt-4"
            type="text" id="idPass"
            placeholder="Slaptažodis"
            defaultValue={password} 
          onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button onClick={handleGeneratePassword} className="btn btn-info">
          Generuoti slaptažodį</button>
        <button className="btn btn-warning" onClick={resetSettings}>Išvalyti</button>




        <div className="form-group">
          <label className="password-length">Pasirinkite slaptažodžio ilgį</label>
          <input
            type="number"
            id="password-length"
            name="passwors-length"
            min="8"
            max="50"
            defaultValue={passwordLength}
            onChange={(e) => setPasswordLength(e.target.value)} />
        </div>

        <div className="form-group">
          <label className="uppercase-letters">Didžiosios raidės (A - Z)</label>
          <input
            type="checkbox"
            id="uppercase-letters"
            name="uppercase-letters"
            checked={uppercase}
            onChange={(e) => setUppercase(e.target.checked)}
          />
        </div>

        <div className="form-group">
          <label className="lowercase-letters">Mažosios raidės (a - z)</label>
          <input
            type="checkbox"
            id="lowercase-letters"
            name="lowercase-letters"
            checked={lowercase}
            onChange={(e) => setLowercase(e.target.checked)}
          />
        </div>

        <div className="form-group">
          <label className="include-numbers">Skaičiai (0 - 9)</label>
          <input
            type="checkbox"
            id="include-numbers"
            name="include-numbers"
            checked={number}
            onChange={(e) => setNumber(e.target.checked)}
          />
        </div>


        <div className="form-group">
          <label className="include-symbols">Simboliai</label>
          <input
            type="checkbox"
            id="include-symbols"
            name="include-symbols"
            checked={symbol}
            onChange={(e) => setSymbol(e.target.checked)}
          />
        </div>

      </div>
    </div>
  );
}
export default App;
