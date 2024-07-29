import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import axios from 'axios';

import { ToastContainer, toast } from 'react-toastify';

const Registration=()=>{

    const [input, setInput]= useState({});
    const handleInput=(e)=>{
     let name=e.target.name;
     let value=e.target.value;
     setInput(values=>({...values, [name]:value}));
   }

   const handleSubmit=(e)=>{
    e.preventDefault();
    let api="http://localhost:9000/employee/usersave";
    axios.post(api, input).then((res)=>{
      console.log(res);
      toast.success("data successfully save")
    })
   }
    return(
        <>
          <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter First Name</Form.Label>
        <Form.Control  name="fname" type="text" onChange={handleInput} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Last Name</Form.Label>
        <Form.Control name="lname" type="text" onChange={handleInput} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Email</Form.Label>
        <Form.Control name="email" type="email" onChange={handleInput} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter City</Form.Label>
        <Form.Control name="city" type="text" onChange={handleInput} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Contact no</Form.Label>
        <Form.Control name="contact" type="text" onChange={handleInput} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Password</Form.Label>
        <Form.Control name="password" type="password" onChange={handleInput} />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
    <ToastContainer />
        </>
    )
}

export default Registration;