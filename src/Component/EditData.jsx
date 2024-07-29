import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EditData = () => {
    const {id}=useParams();
    const [mydata,setmydata]=useState({});

    const loadData=()=>{
        let api="http://localhost:9000/students/editdisplay"
        axios.post(api, {id:id}).then((res)=>{
        //  console.log(res.data)
        setmydata(res.data);
        })
    }
    useEffect(()=>{
        loadData();
    },[])

    const handleInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setmydata(values=>({...values ,[name]:value}))
        console.log(mydata)
    }
    const handleSubmit=()=>{
        let api="http://localhost:9000/students/editsave"
        axios.post(api, mydata).then((res)=>{
            console.log(res)
        })
    }
    return ( 
        <>
            <h1>edit data: </h1>
            Enter rollno:
            <input type="text" name="rollno" value={mydata.rollno}
                onChange={handleInput}
            />
            <br/>
            Enter name:
            <input type="text"
                name="name" value={mydata.name}
                onChange={handleInput}
            />
            <br/>
            Enter city:
            <input type="text" name="city" value={mydata.city}
                onChange={handleInput}/>
            <br/>
            Enter fees:
            <input type="text" name="fees" value={mydata.fees}
                onChange={handleInput}/>
            <br/>
            <button onClick={handleSubmit}>submit</button>
        </>
     )
}
 
export default EditData;