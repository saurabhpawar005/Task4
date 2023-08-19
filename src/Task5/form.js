import React, { useState } from 'react';
import { Button, TextField, Select, MenuItem, FormControl, InputLabel, Container, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import './style.css';



const myButton = function(){
  return(
     alert("daff")
  )          
 }


const LeaveManagementForm = () => {

   


                    const [Username, setName] = useState('');
                    const [firstname, setfirstname] = useState('');
                    const [lastname, setlastname] = useState('');
                    const [password, setPassword] = useState('');
                    const [number, setNumber] = useState('');
                    const [username, setusername] = useState('');

                    // const [leaveType, setLeaveType] = useState('');
                    // const [startDate, setStartDate] = useState('');
                    // const [endDate, setEndDate] = useState('');

                    const handleSubmit = (event) => {
                    event.preventDefault();
                    console.log('Form submitted!');
                    };
                    
            
                 


  return (

    
                <Container maxWidth="mx" className='m-5'>
                  <FormControl className='col-12'>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel onClick={myButton} value="female" control={<Radio />} label="HOD" />
        <FormControlLabel value="male" control={<Radio />} label="Staff" />
    
      </RadioGroup>
    </FormControl>
 
                        <form onSubmit={handleSubmit}>
                          <label className='col-6'>First Name</label>
                          <label className='col-6'>Last Name</label>

                          <TextField
                          className='col-5 mr-5 max'
                            value={firstname}
                            onChange={(event) => setfirstname(event.target.value)}
                            fullWidth
                            required
                            margin="normal"
                          />
                          <TextField
                          className='col-5 mx-5'
                            value={lastname}
                            onChange={(event) => setlastname(event.target.value)}
                            fullWidth
                            required
                            margin="normal"
                          />
                            <label className='col-6'>Email</label>
                           <label className='col-6'>Contact</label>

                          <TextField
                          className='col-5 mr-5'
                            value={Username}
                            onChange={(event) => setName(event.target.value)}
                            fullWidth
                            required
                            margin="normal"
                          />
                            <TextField
                            className='col-5 mx-5'
                          type="number"
                          value={number}
                          onChange={(event) => setNumber(event.target.value)}
                          fullWidth
                          required
                          margin="normal"
                        />
                            <label className='col-6'>username</label>
                            <label className='col-6'>password</label>

                          <TextField
                          className='col-5 mr-5'
                          type="username"
                          value={username}
                          onChange={(event) => setusername(event.target.value)}
                          fullWidth
                          required
                          margin="normal"
                        /> 
                        <TextField
                        className='col-5 mx-5'
                        type="number"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        fullWidth
                        required
                        margin="normal"
                      />
                          <Button onClick={myButton} className='col-11 my-5' variant="contained" color="primary" type="submit">
                         
                         Register
                          </Button>
                        </form>
                      </Container>
  );
};





export default LeaveManagementForm;
