import React, { useState } from 'react';
import {
  MDBInput,
  MDBBtn,
  MDBCheckbox
} from 'mdb-react-ui-kit';
// import MyComponent from 'react-datepicker-calendar'
// import 'react-datepicker-calendar/dist/index.css'
import { useNavigate  } from "react-router-dom";
import styled from 'styled-components';
import api from '../api/post';
import axios from 'axios';
import Select from 'react-select'

import { Form } from 'react-bootstrap';
 





const NavBtnLink = styled.div`
size:100%;
background: rgba(235, 85, 52,0.7);
padding: 10px 22px;
color: #fff;
outline: none;
border: none;
text-decoration: none;
margin:5px;


/* Second Nav */
margin-left: 24px;


`;
const Services = () => {
  const options = [
    { value: 'Graduation', label: 'Graduation' },
    { value: 'Wedding', label: 'Wedding' },
    { value: 'Business event', label: 'Business event' }
  ]
  const cites = [
    { value: 'Riyadh', label: 'Riyadh' },
    { value: 'Jeddah', label: 'Jeddah' },
    { value: 'Al-Khobar', label: 'Al-Khobar' }
  ]
  const servicesClass = [
    { value: 350, label: 'Class A' },
    { value: 200, label: 'Class B' },
    { value: 100, label: 'Class C' }
  ]
  
  const [Name,setName]=useState('')
  const [Phone,setPhone]=useState('')
  const [Event_Type,setEvent_Type]=useState('')
  const [Date,setDate]=useState('')
  const [City,setCity]=useState('')
  const [Location,setLocation]=useState('')
  const [Number_Guests,setNumber_Guests]=useState('0')
  const [Service_Class,setService_Class]=useState('0')
  const [total,settotal]=useState('0')
  const history = useNavigate ();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({data: JSON.stringify({ Name,
      Phone,
      Event_Type,
      Date,
      City,
      Location,
      Number_Guests,
      Service_Class,
      total})});
      const { userId } = JSON.parse(localStorage.getItem('user'));
    try {
      console.log(Event_Type)
     
      const response = await axios.post(`http://localhost:4000/ceremony/neworder/${userId}`,  {data: JSON.stringify({ Name,
      Phone,
      Event_Type,
      Date,
      City,
      Location,
      Number_Guests,
      Service_Class,
      total})},
     
      
      )
      
      setName('');
      setPhone('');
      setEvent_Type('');
      setDate('');
      setCity('');
      setLocation('');
      setNumber_Guests('0');
      setService_Class('0');
      settotal('0')
      history('/');
      
      
    } catch (err) {
      if (err.response){
        console.log(err.response);

        //do something
        
        }else if(err.request){
          console.log(err.request);
        //do something else
        
        }else if(err.message){
          console.log(err.message);
        //do something other than the other two
        
        }
    }
  }

  
  return (
    <>
  
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh',
        margin:'30px'
      }}
    >
      <div>
        <NavBtnLink>Event Information</NavBtnLink>
        <NavBtnLink>owner Information</NavBtnLink>
        </div>
      <form className='row g-3'>
      <div className='col-md-4'>
          <MDBInput
           
          style={{backgroundColor:'#fff'}}
            name='Name'
           onChange={(e) => {
              setName(e.target.value);
            }}
            
           
            required
            label='owner name'
          />
        </div>
        <div className='col-md-4'>
          <MDBInput
          
          style={{backgroundColor:'#fff'}}
            name='Phone'
           
            onChange={(e) => {
              setPhone(e.target.value);
              console.log(e.target.value);
            }}
            required
            label='Phone'
            
          />
        </div>
        <div className='col-md-4'  >
          
        <Select  options={options}  
           
        onChange={(e)=>{
          setEvent_Type(e.value);
          console.log(e.value);
          console.log(Event_Type);
        }} />
        </div>
        <div className='col-md-4'>
        <div className="row">
                    <div className="col-md-4">
                        <Form.Group controlId="dob">
                            <Form.Label>Select Date</Form.Label>
                            <Form.Control type="date" name="dob" placeholder="Date of Birth"  onChange={(e)=>{
          setDate(e.target.value);
          console.log(e.target.value);
          
        }}/>
                        </Form.Group>
                    </div>
                </div>
        </div>
        <div className='col-md-4'>
        <Select options={cites}  
        label="city"  
        Name="city"
        onChange={(e)=>{
          setCity(e.value);
          console.log(e);
        
        }}
 />
        </div>
        <div className='col-md-4'>
          <MDBInput
          style={{backgroundColor:'#fff'}}
           
            name='Location'
            required
            label='Location'
            onChange={(e) => {
              setLocation(e.target.value);
            }}
          />
        </div>
        <div className='col-md-4'>
          <MDBInput
           
          style={{backgroundColor:'#fff'}}
            name='Number_Guests'
            required
            label='number of guests'
            onChange={(e) => {
              setNumber_Guests(e.target.value);
              settotal(Number(Service_Class)*Number(e.target.value))
            }}
          />
        </div>
        <div className='col-md-4'>
          
               <Select options={servicesClass}  
        label="service"  
        Name="service"
        onChange={(e)=>{
          setService_Class(e.value);
          console.log(e.value);
          settotal(Number(e.value)*Number(Number_Guests))
          
        
        }}
        
 />
        </div>
        <div className='col-12' >
          <MDBBtn  style={{ backgroundColor: 'rgba(235, 85, 52)' } }>{total}$</MDBBtn>
        </div>
        
        <div className='col-12' >
          <MDBBtn type='submit' onClick={handleSubmit} style={{ backgroundColor: 'rgba(235, 85, 52)' } }>Submit form</MDBBtn>
        </div>
      </form>
      </div>
      </>
  );
};

export default Services;
