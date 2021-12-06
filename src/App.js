import { useState } from "react";
import "./styles.css";

export default function App() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmiResult, setBmiResult] = useState(null);
  const [status, setStatus] = useState("");

  function calculateBMI() {
    let bmi = Number(weight / (height / 100) ** 2).toFixed(2);
    setBmiResult(bmi);

    let bmiStatus = getStatus(bmi);
    setStatus(bmiStatus);

    setHeight("");
    setWeight("");
  }
  function getStatus(bmi) {
    if (bmi < 18.5) return "Underweight 😐";
    else if (bmi >= 18.5 && bmi < 24.9) return "Normal 😎";
    else if (bmi >= 25 && bmi < 29.9) return "Overweight 😵";
    else return "Obese";
  }

  return (
    <div className="fullview">
    <div className="box">
      <form className="form">
        <h1 className="header"> BMI Calculator</h1>
        <div className="height">
          <label>
            Height:
          </label>
          <br/>
          <input
            className="h"
            type="text"
            placeholder="Height in cm"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
        <div className="weight">
          <label>
            Weight:
          </label>
          <br/>
          <input
            className="w"
            type="text"
            placeholder="Weight in kg"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <div className="button">
          <button
            className="button1"
            type="Button"
            onClick={calculateBMI}
          >
            Calculate BMI
          </button>
        </div>
        {bmiResult && (
          <div className="bmi">
            <p>Your BMI is: {bmiResult} </p>
            <p>You are currently: {status}</p>
          </div>
        )}
      </form>
    </div>
    <div className="img1">
    <img src="./images/girl.png" height = {400}/>
    </div>
    <div className="img2">
      <img src="./images/boy.png" height = {400}/>
    </div>
    </div>    
  );
}