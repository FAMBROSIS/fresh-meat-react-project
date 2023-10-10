import React from "react";
import { useState } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import '../Converter.css'

const Converter = () => {
  const [fromUnit, setFromUnit] = useState("");
  const [toUnit, setToUnit] = useState("");
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");
  const [currentConversion, setCurrentConversion] = useState("");

  const handleUnits = (e) => {
    console.log("event", e.target.value); //targeting the value of the options in the dropdown
    setCurrentConversion(e.target.value);
    setValue("");
    setResult("");
    if (e.target.value == "1") {
      setFromUnit("TSP");
      setToUnit("TBSP");
    } else if (e.target.value == "2") {
      setFromUnit("TBSP");
      setToUnit("FL OZ");
    } else if (e.target.value == "3") {
      setFromUnit("FL OZ");
      setToUnit("CUP");
    } else if (e.target.value == "4") {
      setFromUnit("CUP");
      setToUnit("PT");
    } else if (e.target.value == "5") {
      setFromUnit("PT");
      setToUnit("QT");
    } else if (e.target.value == "6") {
      setFromUnit("QT");
      setToUnit("GALLON");
    } else if (e.target.value == "7") {
      setFromUnit("GALLON");
      setToUnit("ML");
    } else if (e.target.value == "8") {
      setFromUnit("ML");
      setToUnit("L");
    }
  };

  const handleResult = (e) => {
    setResult(e.target.value);
    if(e.target.value==""){
        setValue("")
    }else{
    if (currentConversion == "1") {
      setResult(parseFloat(e.target.value) / 0.33);
    } else if (currentConversion == "2") {
      setResult(parseFloat(e.target.value) / 0.5);
    } else if (currentConversion == "3") {
      setResult(parseFloat(e.target.value) / 0.13);
    } else if (currentConversion == "4") {
      setResult(parseFloat(e.target.value) / 0.5);
    } else if (currentConversion == "5") {
      setResult(parseFloat(e.target.value) / 0.5);
    } else if (currentConversion == "6") {
      setResult(parseFloat(e.target.value) / 0.25);
    } else if (currentConversion == "7") {
      setResult(parseFloat(e.target.value) / 3785.41);
    } else if (currentConversion == "8") {
      setResult(parseFloat(e.target.value) / 0.001);
    }
  };
}

  const handleValue = (e) => {
    setValue(e.target.value);
    if (e.target.value == "") {
      setResult("");
    } else {
      if (currentConversion == "1") {
        setResult(parseFloat(e.target.value) * 0.33);
      } else if (currentConversion == "2") {
        setResult(parseFloat(e.target.value) * 0.5);
      } else if (currentConversion == "3") {
        setResult(parseFloat(e.target.value) * 0.13);
      } else if (currentConversion == "4") {
        setResult(parseFloat(e.target.value) * 0.5);
      } else if (currentConversion == "5") {
        setResult(parseFloat(e.target.value) * 0.5);
      } else if (currentConversion == "6") {
        setResult(parseFloat(e.target.value) * 0.25);
      } else if (currentConversion == "7") {
        setResult(parseFloat(e.target.value) * 3785.41);
      } else if (currentConversion == "8") {
        setResult(parseFloat(e.target.value) * 0.001);
      }
    }
  };

  return (

        <div>
      <Form>
        <Form.Group className="mb-3" controlId="conversion">
          <Form.Label>Select Your Conversion</Form.Label>
          <Form.Select
            aria-label="Default select example"
            onChange={handleUnits}
          >
            <option>Open this select menu</option>
            <option value="1">TSP-TBSP</option>
            <option value="2">TBSP-FL OZ</option>
            <option value="3">FL OZ-CUP</option>
            <option value="4">CUP-PT</option>
            <option value="5">PT-QT</option>
            <option value="6">QT-GALLON</option>
            <option value="7">GALLON-ML</option>
            <option value="8">ML-L</option>
          </Form.Select>
        </Form.Group>
        <Form.Group as={Col} md="4" id="validationCustom01">
          <Form.Label>{fromUnit}</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter Value"
            value={value}
            onChange={handleValue}
          />
        </Form.Group>
        <Form.Group as={Col} md="4" id="validationCustom02">
          <Form.Label>{toUnit}</Form.Label>
          <Form.Control
            type="number"
            placeholder="Result"
            value={result}
            onChange={handleResult}
          />
        </Form.Group>
      </Form>
      </div>

  );
};

export default Converter;
