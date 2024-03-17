import React from 'react';
import pic from './image/Cigars.jpg';
import '../TraStyle/driverF.css';
import logo from '../pages/image/agio.jpg'



function DriverRegister() {
  return (
    
      <div className='content'>
        <div className='leftSide'
          style={{ backgroundImage: `url(${pic})` }}
          >
            <div className='logo'>
            <img src={logo} id='lg' /></div>
        </div>
        <div className='rightSide'>
          <form id='register-form' method='POST'>
            <h1>Create Driver Account</h1>
            <label htmlFor='name'>First Name</label>
            <input name='name' placeholder='Enter First Name' type='text'/>
            <label htmlFor='name'>Last Name</label>
            <input name='name' placeholder='Enter Last Name' type='text'/>
            <label htmlFor='number'>Phone Number</label>
            <input name='number' placeholder='Enter Phone Number' type='text'/>
            <label htmlFor='nic'>NIC</label>
            <input name='nic' placeholder='Enter NIC' type='text'/>
            <label htmlFor='email'>Email</label>
            <input name='email' placeholder='Enter Email' type='email'/>
            <label htmlFor='experiance'>Work Experience</label>
            <input name='experiance'  type='text'/>
            <button type='submit'>REGISTER</button>
          </form>
        </div>
      </div>
    
  );
}

export default DriverRegister;