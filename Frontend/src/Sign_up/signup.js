import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import '../Sign_up/style.css';
import axios from 'axios';
// import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';
export default function FormPropsTextFields() {
  return (
    <>
    <div class="form">
    <center>
    <h1>Register and Learn</h1>
    <br></br>
      <Box
      component="form"
      sx={{
          '& .MuiTextField-root': { m: 1, width: '30ch' },
        }}
        noValidate
        autoComplete="on"
        >
      <div>
        <TextField
          required
          id="outlined-required"
          label="Name"
          placeholder='Enter your name'
        /><br>
        </br>
        <TextField
          id="outlined-password-input"
          label="Email Address"
          placeholder='Email Address'
        />
        <br>
        </br>
    <FormControl style={{paddingRight:'150px'}}>
      <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        
        name="radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      </RadioGroup>
    </FormControl>
        <br />
        <TextField
          id="outlined-password-input"
          label="Age"
          placeholder='Enter your age'
        />
        <br>
        </br>

    <FormControl style={{paddingRight:'150px'}}>
      <FormLabel id="demo-radio-buttons-group-label">Mode</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        
        name="radio-buttons-group"
      >
        <FormControlLabel value="Offline" control={<Radio />} label="Offline" />
        <FormControlLabel value="Onfline" control={<Radio />} label="Online" />
      </RadioGroup>
    </FormControl><br></br>
        <TextField
          id="outlined-password-input"
          label="Mobile Number"
          placeholder='Mobile Number'
        />
        <br>
        </br>
    <FormControl style={{paddingRight:'150px'}}>
      <FormLabel id="demo-radio-buttons-group-label">Type of Dance</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        
        name="radio-buttons-group"
      >
        <FormControlLabel value="Salsa" control={<Radio />} label="Salsa" />
        <FormControlLabel value="Bachata" control={<Radio />} label="Bachata" />
        <FormControlLabel value="Tango" control={<Radio />} label="Tango" />
        <FormControlLabel value="Hip Hop" control={<Radio />} label="Hip Hop" />
        <FormControlLabel value="Club" control={<Radio />} label="Club" />
        <FormControlLabel value="Other" control={<Radio />} label="Other" />
      </RadioGroup>
    </FormControl><br></br>

    <button onClick ={()=>alert("Thank you for your registeration")}>Submit</button>
            </div>
    </Box>
    </center>
    </div>
    </>
  );
}
