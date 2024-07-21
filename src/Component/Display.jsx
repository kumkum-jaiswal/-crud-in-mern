import { useState, useEffect } from "react";
import axios from "axios" ;
import StuDesign from "./StuDesign";
import Table from 'react-bootstrap/Table';



const Display = () => {
    const [mydata, setMydata]=useState([]);

    const loadData=async()=>{
        let url="http://localhost:9000/students/studisplay";
        let response =await axios.get (url);
        console.log(response.data);
        setMydata(response.data)
    }
    useEffect(()=>{
        loadData();

    },[])
    const ans=mydata.map((key)=> <StuDesign
          rno={key.rollno} 
          nm={key.name} 
          ct={key.city}
          fs={key.fees}
           /> )
    return (
        <>
            <h1>display page</h1>
            <Table striped bordered hover>
      <thead>
        <tr>
          <th>rollno</th>
          <th>Name</th>
          <th>city</th>
          <th>fees</th>
        </tr>
      </thead>
      <tbody>
      {ans}

      </tbody>
      </Table>
        </>
     );
}
export default Display;