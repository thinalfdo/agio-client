import React from 'react'
import {Button, Form ,  Input,Select, DatePicker } from 'antd'
import '../mainreg.css';
import axios from "axios";
import toast from 'react-hot-toast';
import { useSelector,useDispatch } from 'react-redux';
import { showLoading, hideLoading } from '../redux/empalerts.js';
import Layout from '../components/Layout.js';



function Main_register() {
  const { Option } = Select;
  const dispatch = useDispatch();
  const { TextArea } = Input;


  const onFinish = async(values) => {
    console.log('Recieved values of form', values);
    try {
      dispatch(showLoading());
      const response = await axios.post('/api/employee/Main_register', values);
      dispatch(hideLoading());
      if(response.data.success){
          toast.success(response.data.message);
         
          
      }else{
          toast.error(response.data.message);

      }
      
  } catch (error) {
    dispatch(hideLoading());
      toast.error("Something went wrong");
  }
     
  };
  return (
    <Layout>
    <div className="mainreg mt-10" >
  <div className="main_login_form box p-3">
    <h3 className='title'>Employee Registration Form</h3>
    <Form layout='vertical' onFinish={onFinish}>
      <div className="form-row">
        <div className="item">
          <Form.Item label='Full Name' name='fname'>
            <Input placeholder='Full name' />
          </Form.Item>
        </div>
        <div className="item">
          <Form.Item label="Employee ID" name="empid">
          <Input placeholder='Employee ID' />
          </Form.Item>
        </div>
      </div>
      <div className="form-row">
        <div className="item">
          <Form.Item label='Username' name='username_log'>
            <Input placeholder='Username' />
          </Form.Item>
        </div>
        <div className="item">
          <Form.Item label='Password' name='password_log'>
            <Input placeholder='Password' />
          </Form.Item>
        </div>
      </div>
      <div className="form-row">
        <div className="item">
          <Form.Item label='Job Title' name='jobRole'>
            <Input placeholder='Job Title' />
          </Form.Item>
        </div>
        <div className="item">
          <Form.Item name="shift" label="Shift">
            <Select className="shift" placeholder="Select a shift">
              <Option value="morning">08:00 - 14:00</Option>
              <Option value="evening">14:00 - 20:00</Option>
              <Option value="other">No specific shift</Option>
            </Select>
          </Form.Item>
        </div>
      </div>
      <div className="form-row">
        <div className="item">
          <Form.Item label="Date Joined" name="dateJoined">
            <DatePicker className="date" />
          </Form.Item>
        </div>
        <div className="item">
          <Form.Item label='Phone Number' name='phoneNumber'>
            <Input placeholder='Phone Number' />
          </Form.Item>
        </div>
      </div>
      <div className="form-row">
      <div className="item">
          <Form.Item label="Date of Birth" name="dob">
            <DatePicker className="date" />
          </Form.Item>
        
      </div>
      <div className="item">
          <Form.Item name="department" label="Department">
            <Select className="department" placeholder="Select a department">
              <Option value="HR">HR</Option>
             
              <Option value="Logistics">Logistics</Option>
              <Option value="Procurement Department">Procurement Department</Option>
              <Option value="Quality Assurance">Quality Assurance</Option>
              <Option value="Production Department">Production Department</Option>
              <Option value="Sales and Marketing">Sales and Marketing</Option>
              <Option value="Finance and Accounting ">Finance and Accounting </Option>
            </Select>
          </Form.Item>
        </div>
        
        
      </div>
      <div className="form-row">
      
      <div className="item">
      <Form.Item label="Address" name="address">
    <Input.TextArea rows={4} className='address' />
  </Form.Item>
        
      
        </div>
        
        
      </div>
      <div className="Button-cons">
        <Button className='primary-button my-2' htmlType='submit'>REGISTER</Button>
      </div>
    </Form>
  </div>
</div>
</Layout>
  )
}

export default Main_register
