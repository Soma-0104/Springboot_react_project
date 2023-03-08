import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import './register.css'
import Button from '@mui/material/Button';
import DataBaseView from './view';
import Deleteform from './delete';
import UpdateForm from './edit';
function Dance() {
  const[name,setName]= useState();
  const[emailId,setEmailId]=useState();
  const[gender,setGender]=useState();
  const[age,setAge]=useState();
  const[mode,setMode]=useState();
  const[mobileNumber,setMobileNumber]=useState();
  const[typeOfDance,setTypeOfDance]=useState();
  const[open,setOpen]=useState();
  const[loading,setLoading]=useState();
  
  function handleClose(){
    setOpen(false);
  }
  async function handleSubmit(e){
    e.preventDefault();
    setLoading(true);
    try{
      const data={
        name:name,
        emailId: emailId,
        gender:gender,
        age:Number(age),
        mode:mode,
        mobileNumber:mobileNumber,
        typeOfDance:typeOfDance,
      };
      const res=await axios.post("http://localhost:8080/login/post",data);
      await console.log(res);
      await setOpen(true);
    }
    catch(e){
      console.log(e.message);
    }
    setLoading(false);
    alert("Submitted successfully");
  }
    return ( 
        <>
        <div  className='top'>
        <center>
          <div className='main'>
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
        <center>
            <br></br>
            <h2>Register and Learn</h2>
            <br></br>
        <TextField  required id="outlined-basic" label="Name" variant="outlined"
        onChange={(event)=>setName(event.target.value)} /> <br></br><br></br>
        <TextField required id="outlined-basic" label="EmailID" variant="outlined"
        onChange={(event)=>setEmailId(event.target.value)}/> <br></br><br></br>
        <TextField required id="outlined-basic" label="Gender" variant="outlined" 
        onChange={(event)=>setGender(event.target.value)}/><br></br><br></br>
        <TextField required id="outlined-basic" label="Age" variant="outlined" 
        onChange={(event)=>setAge(event.target.value)}/><br></br><br></br>
        <TextField required id="outlined-basic" label="Mode" variant="outlined" 
        onChange={(event)=>setMode(event.target.value)}/><br></br><br></br>
        <TextField required id="outlined-basic" label="Mobile Number" variant="outlined" 
        onChange={(event)=>setMobileNumber(event.target.value)}/><br></br><br></br>
        <TextField required id="outlined-basic" label="Type Of Dance" variant="outlined" 
        onChange={(event)=>setTypeOfDance(event.target.value)}/>
        <br></br>
        <br></br>
      <Button variant="contained" color="success" onClick={handleSubmit}>
        Submit
      </Button>
        </center>
   
    </Box>
    </div>
    </center>
    </div>
    {/* <DataBaseView/>
    <UpdateForm/>
    <Deleteform/> */}
        </>
     );
}
export default Dance;