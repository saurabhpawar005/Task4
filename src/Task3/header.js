import './styles.css';
import {  FormControl, OutlinedInput, TextField } from '@mui/material';


function Header() {
    return (
        <div className="container mt-5 m-5 p-5 ">
            <div className="row">
                <div className="log col-4 ">
                    <h5 className='mt-3 '>Add Section</h5>
                    <label className='col-12'>Section Header</label>
                    <input className="col-12" type="text" id="name" name="name" required></input>
                    <label className='col-12'>Section Header</label>
                    <label className='col-12'>feedback</label>
                    <textarea className='col-12' rows="4" cols="1"></textarea>
                    <button className='col-12 bg-primary my-3'>Add</button>
                </div>
                <div className="log col-5 mx-5 ">
                <FormControl sx={{ width: '25ch' }}>
  <OutlinedInput placeholder="Please enter text" />
</FormControl>
                </div>
            </div>

        </div>
    )
}


export default Header;