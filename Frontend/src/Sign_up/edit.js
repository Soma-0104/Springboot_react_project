import * as React from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
import { useState} from 'react';
import axios from 'axios';
import './edit.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './patient.css';

// import './patient.css';
export default function UpdateForm() {
    const [id, setId] = useState('');
    const[name,setName]= useState();
  const[emailId,setEmailId]=useState();
  const[gender,setGender]=useState();
  const[age,setAge]=useState();
  const[mode,setMode]=useState();
  const[mobileNumber,setMobileNumber]=useState();
  const[typeOfDance,setTypeOfDance]=useState();
    async function save(event) {
        event.preventDefault();
        try {
            await axios.put("http://localhost:8080/login/put",

                { id:id,
                    name:name,
                    emailId: emailId,
                    gender:gender,
                    age:Number(age),
                    mode:mode,
                    mobileNumber:mobileNumber,
                    typeOfDance:typeOfDance,

                });
            alert("Updated Successfully");
            setId("");
            setName("");
            setGender("");
            setAge("");
            setMode("");
            setMobileNumber("");
            setTypeOfDance("");
        }
        catch (err) {
            alert("Updation Failed");
        }
    }

    return (
        <div>
           <div className='up'>
           <center ><h2>Update The Details</h2></center>
            <div class="container mt-4"></div>
          
        <form>

        <div class="form-group">
        <label><span>ID</span></label><br></br>
        <input type="text" placeholder='Enter ID Number' className="form-control1" value={id} onChange={(e) => setId(e.target.value)}/>
        <br></br>
            <label><span>Name</span></label>
            <input type="text" class="form-control" placeholder="Enter the name"
             value={name}
            onChange={(event) =>
              {
                setName(event.target.value);      
              }}
            />
        </div>
        <br></br>
        <div class="form-group">
            <label><span>EmailID</span></label>
            <input type="text" class="form-control" placeholder="Enter the EmailId"
             value={emailId}
            onChange={(event) =>
              {
                setEmailId(event.target.value);      
              }}
            />
        </div>
        <br></br>
        <div class="form-group">
            <div class="form-group">
                <label><span>Gender</span></label>
                <input type="text" class="form-control" placeholder="Enter Gender"
                value={gender}
                onChange={(event) =>
                  {
                    setGender(event.target.value);      
                  }}
               />
            </div>
            <br></br>
        <div class="form-group">
            <label><span>Age</span></label>
            <input type="text" class="form-control" placeholder="Enter age"
             value={age}
             onChange={(event) =>
               {
                setAge(event.target.value);      
               }}
            />
        </div>
        <br></br>
        <div class="form-group">
            <label><span>Mode</span></label>
            <input type="text" class="form-control" placeholder="Enter the Mode"
            value={mode}
            onChange={(event) =>
              {
                setMode(event.target.value);      
              }}
           />
        </div>
        <br></br>
            <label><span>Mobile Number</span></label>
            <input type="text" class="form-control" placeholder="Enter Mobile Number"
            value={mobileNumber}
            onChange={(event) =>
              {
                setMobileNumber(event.target.value);      
              }}
           />
        </div>
        <br></br>
        <div class="form-group">
            <label><span>Type of Dance</span></label>
            <input type="text" class="form-control" placeholder="Enter Type of Dance"
            value={typeOfDance}
            onChange={(event) =>
              {
                setTypeOfDance(event.target.value);      
              }}
           />
        </div>
        <br></br>
        <center>
               <center> <button type="submit" class="btn btn-primary" onClick={save}>Update</button></center>
                </center>
        
            </form>
            </div>
        </div>
    );
}