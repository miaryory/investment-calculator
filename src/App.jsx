
import { useState } from "react";
import Table from "./components/Table";
import NumberInput from "./components/NumberInput";
import { calculateInvestmentResults } from "./util/investment";

const INITIAL_VALUES = {
  initialInvestment: 0,
  annualInvestment: 0,
  expectedReturn: 0,
  duration: 0
}

function App() {
  const [inputValues, setInputValues] = useState(INITIAL_VALUES);
  let results = [];

  //This function is called when an input is changed to update the values used to calculate the investment etc
  function handleInputChange(inputName, inputValue) {
    //Update inputValues with new values entered in the input fields
    setInputValues(previousValues => {
      return {
        ...previousValues,
        [inputName]: parseInt(inputValue)
      }
    });
  }

  //Calculate results and retrieve the array from this function
  if (Number.isInteger(inputValues.initialInvestment) &&
      Number.isInteger(inputValues.expectedReturn) &&
      Number.isInteger(inputValues.annualInvestment) &&
      Number.isInteger(inputValues.duration)){
      results = calculateInvestmentResults(inputValues);
    }

  return (
    <main>
      <div id="user-input">
        <div className="input-group">
          <NumberInput
            inputName="initialInvestment"
            label="Initial investment"
            min="1"
            value={inputValues.initialInvestment ? inputValues.initialInvestment : ""}
            onEnterValue={(e) => handleInputChange("initialInvestment", e.target.value)} />
          <NumberInput
            inputName="annualInvestment"
            label="Annual investment"
            min="1"
            value={inputValues.annualInvestment ? inputValues.annualInvestment : ""}
            onEnterValue={(e) => handleInputChange("annualInvestment", e.target.value)} />
        </div>
        <div className="input-group">
          <NumberInput
            inputName="expectedReturn"
            label="Expected return"
            min="1"
            value={inputValues.expectedReturn ? inputValues.expectedReturn : ""}
            onEnterValue={(e) => handleInputChange("expectedReturn", e.target.value)} />
          <NumberInput
            inputName="duration"
            label="Duration"
            min="1"
            max="12"
            value={inputValues.duration ? inputValues.duration : ""}
            onEnterValue={(e) => handleInputChange("duration", e.target.value)} />
        </div>
      </div>
      <Table results={results} initialInvestment={inputValues.initialInvestment} />
    </main>
  )
}

export default App
