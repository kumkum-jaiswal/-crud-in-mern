import axios from "axios";
import { useState } from "react";
import Table from 'react-bootstrap/Table';

const Search = () => {
    const[rollno,setRollno]=useState("");
    const[mydata,setmydata]=useState([]);


    const Searchrec=()=>{
let api=`http://localhost:9000/students/stusearch`;
        axios.post(api, {rollno:rollno}).then((res)=>{
            setmydata(res.data);
        })

    }
    const ans=mydata.map((key)=>{
        return(
            <>
                <tr>
                    <td>{key.rollno}</td>
                    <td>{key.name}</td>
                    <td>{key.city}</td>
                    <td>{key.fees}</td>
                </tr>
            </>
        )
    })
    return ( 
        <>
            <h1>search record</h1>
            Enter rollno
            <input type="text" value={rollno} 
            onChange={(e)=>{setRollno(e.target.value)}} />
            <button onClick={Searchrec}>search</button>
            <hr/>
            <Table striped bordered hover>
      <thead>
        <tr>
          <th>Roll no</th>
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
 
export default Search;