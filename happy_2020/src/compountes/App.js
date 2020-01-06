import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

import "bootstrap/dist/css/bootstrap.min.css";
// custom hook
export const useInput = val => {
  const [input, setInput] = useState(val);

  const handleInputChange = e => {
    if (e.target) setInput(e.target.value);
    else setInput(e);
  };

  return [input, handleInputChange];
};

// custom hook
export const useCheckbox = val => {
  const [input, setInput] = useState(val);

  const handleCheckboxChange = e => {
    setInput(e.target.checked);
  };

  return [input, handleCheckboxChange];
};

function App(props) {
  // States for each fields
  const [email, setEmail] = useInput("");
  const [password, setPassword] = useInput("");
  const [phone, setPhone] = useInput("");
  const [permaAddress, setPermaAddress] = useInput("");
  const [currentAddress, setCurrentAddress] = useInput("");
  const [isSamePermaAddress, setIsSamePermaAddress] = useCheckbox(false);

  useEffect(() => {
    if (isSamePermaAddress) {
      setCurrentAddress(permaAddress);
    }
  }, [isSamePermaAddress, permaAddress, setCurrentAddress]);

  const validateSize = file => {
    const fileSize = file.target.files[0].size / 1024 / 1024; // in MB
    if (fileSize > 2) {
      alert("File size exceeds 2 MB");
      file.target.value = null;
    } else {
    }
  };

  const onSubmitClick = () =>{
    let params = {
      email
    }
    console.log(email,"email");
    props.onSubmitRegister(params) 
  }

  return (
    <div>
      <header className="App-header">
        <Form>
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input type="email" placeholder="Email" onChange={setEmail} />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input
              type="password"
              placeholder="password"
              onChange={setPassword}
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleNumber">Phone Number</Label>
            <Input
              type="number"
              placeholder="Phone number"
              onChange={setPhone}
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleDate">DOB</Label>
            <Input type="date" placeholder="DOB" />
          </FormGroup>
          <FormGroup>
            <Label for="exampleText">Permanent Address</Label>
            <Input type="textarea" onChange={setPermaAddress} />
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="checkbox" onChange={setIsSamePermaAddress} /> Same as
              permanent address
            </Label>
          </FormGroup>
          <FormGroup>
            <Label for="exampleText">Current Address</Label>
            <Input
              type="textarea"
              value={currentAddress}
              onChange={setCurrentAddress}
              disabled={isSamePermaAddress}
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleFile">File</Label>
            <Input
              onChange={validateSize}
              type="file"
              multiple={false}
              accept=".png,.jpg,.jpeg"
            />
          </FormGroup>
          <Button onClick={onSubmitClick}>Submit</Button>
        </Form>
      </header>
    </div>
  );
}

export default App