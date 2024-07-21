import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

const Insert = () => {

  const [input,setinput]= useState({});

    const handleinput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;

        setinput(values=>({...values, [name]:value}));
        console.log(input)
    }
    const handle=(e)=>{
        e.preventDefault();
        let api="http://localhost:9000/students/stusave";
        axios.post(api,input).then((res)=>{
          console.log(res)
          alert("data save")
        })
        // console.log({name:name ,city:city ,rollno:rollno,fees:fees})
    }
    return ( 
        <>
            <h1>insert page</h1>
            <Form style={{width:"600px",margin:"50px"}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label> Rollno</Form.Label>
        <Form.Control type="email"  name="rollno" value={input.rollno} 
        onChange={handleinput}/>
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text"  name="name" value={input.name} 
        onChange={handleinput} />
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>city</Form.Label>
        <Form.Control type="text"  name="city" value={input.city} 
        onChange={handleinput}/>
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>fees</Form.Label>
        <Form.Control type="text" name="fees" value={input.fees} 
        onChange={handleinput}/>
      </Form.Group>
      
      <Button variant="primary" type="submit" onClick={handle}>
        Submit
      </Button>
    </Form>
        </>
     );
}
 
export default Insert;