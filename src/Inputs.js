import React from 'react'
import './Inputs.css';

function Input(){
    return(
        <div className='head'>
            <form>
            <input type="text" placeholder='Name' className='name'/>
            <input type="email" placeholder='Email'className='email'/>
            <input type="password" placeholder='Password'className='pass'></input>
            <input type="number" placeholder='Phonenumber'className='number'/>
            <input type="date" placeholder='DOB'className='date'/>
            </form>
        </div>
    );
}
export default Input;