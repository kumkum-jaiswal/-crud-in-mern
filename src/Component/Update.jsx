import { useState,useEffect } from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

const Update = () => {
    const [mydata,setmydata]=useState([])
   
    const Navigate = useNavigate();
    const loadData=()=>{
        let api="http://localhost:9000/students/UpdateDisplay"
        axios.get(api).then((res)=>{
            console.log(res)
            setmydata(res.data)
        })
    }
    useEffect(()=>{
        loadData();
    },[])
    const mydel=(myid)=>{
        // alert(myid)
        let api="http://localhost:9000/students/UpdateDelete";
        axios.post(api,{myid:myid}).then((res)=>{
            // console.log(res);
            // alert("record deleted")
            toast.error("record deleted")
            loadData()
        })
    }
    const myedit=(myid)=>{
        Navigate(`/editdata/${myid}`)
    }
    const ans=mydata.map((key)=>{
        return(
            <>
                <tr>
                    <td>{key.rollno}</td>
                    <td>{key.name}</td>
                    <td>{key.city}</td>
                    <td>{key.fees}</td>
                    <td>
                    <a href="#" onClick={()=>{myedit(key._id)}}>
                        <img src="public/img/edit.jpg"  width="50px"/>
                        </a>
                        
                        <a href="#" onClick={()=>{mydel(key._id)}}>
                        <img src="public/img/delet.jpg" width="50px" />
                        </a>
                    </td>
                </tr>
            </>
        )
    })
    return (  
        <>
            <h1>Update</h1>
            <Table striped bordered hover>
      <thead>
        <tr>
          <th>rollno</th>
          <th>Name</th>
          <th>city</th>
          <th>fees</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
      {ans}

      </tbody>
      </Table>
      <ToastContainer />
        </>
    );
}
 
export default Update;