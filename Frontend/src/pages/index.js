import React, { useEffect, useState } from "react"
import dataowner from "../db/owrderdb"
import styled from "styled-components";
import axios from "axios";

const BoxContainerben = styled.div`
  width: 80%;
  min-height: 100px;
  display: flex;
  flex-direction: column;
  border-radius: 19px;
  background-color: rgba(97, 97, 97 , 0.7);
  box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
  padding: 20px;
  margin :10px;
  font-family: 'Tapestry', cursive;
  
`;
const BoxContainerreg = styled.div`
  width: 80%;
  min-height: 100px;
  display: flex;
  flex-direction: column;
  border-radius: 19px;
  background-color: rgba(255, 0, 13, 0.5);
  box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
  padding: 20px;
  margin :10px;
  
  
`;
const BoxContaineracs = styled.div`
  width: 80%;
  min-height: 100px;
  display: flex;
  flex-direction: column;
  border-radius: 19px;
  background-color: rgba(13, 110, 37, 0.7);
  box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
  padding: 20px;
  margin :10px;
  
  
`;
const BoxC =styled.div`

width:100%;
margin :'10px'
`;
const   ElemContainer=styled.div`
width: 50%;
padding: 11px ;
color: #fff;
font-size: 15px;
font-weight: 600;
border: none;
border-radius: 19px;
background-color: rgba(244, 90, 8  );


margin :10px
`;
const   Elempay=styled.div`
width: 50%;
min-hight:20px;
padding: 11px ;
color: #fff;
font-size: 15px;
font-weight: 600;
border: none;
border-radius: 19px;
background-color: rgba(249,9,77);
border:solid 3px  #fff;


margin :10px
`;
const Elemst=styled.div`
width: 20%;
min-hight:50px;
padding: 20px ;
color: #fff;
font-size: 20px;
font-weight: 600;
border: none;
border-radius: 19px;
background-color: rgba(249,9,77);
border:solid 3px  #fff;


margin :10px
`;
const BoxContainer =styled.div``;
const Home = () => {

  const [orders, setorders] = useState([])


  const fetchData = async () => {
    const { userId } = JSON.parse(localStorage.getItem('user'));
  

    const response = await axios.get(`http://localhost:4000/ceremony/home/${userId}`)
 
    const data = response.data

    setorders(data)

  }


  useEffect(() => {

   fetchData()

  }, [])
  

  return (
    <div
  >

      {(orders.length > 0) && (
        <BoxC>



          {orders.map(order => (
          (order.status==="Agree") &&<BoxContaineracs  key={orders.id} style={{color:'red'}}>
              <Elemst>status :{order.status}</Elemst>

            <ElemContainer>Name :{order.Name}</ElemContainer>
            <ElemContainer>Phone :{order.Phone}</ElemContainer>
            <ElemContainer>Date :{order.Date}</ElemContainer>
            <ElemContainer>Location :{order.Location}</ElemContainer>
          
            <ElemContainer>Service_Class :{order.Service_Class}</ElemContainer>
            <ElemContainer>Number_Guests :{order.Number_Guests}</ElemContainer>
            <Elempay>payment :{order.payment}$</Elempay>
           
            </BoxContaineracs>||
            (order.status==="Reject") &&<BoxContainerreg  key={orders.id} style={{color:'red'}}>
              <Elemst>status :{order.status}</Elemst>

           <ElemContainer>Name :{order.Name}</ElemContainer>
            <ElemContainer>Phone :{order.Phone}</ElemContainer>
            <ElemContainer>Date :{order.Date}</ElemContainer>
            <ElemContainer>Location :{order.Location}</ElemContainer>
            
            <ElemContainer>Service_Class :{order.Service_Class}</ElemContainer>
            <ElemContainer>Number_Guests :{order.Number_Guests}</ElemContainer>
            <Elempay>payment :{order.payment}$</Elempay>
           
            </BoxContainerreg>||
            (order.status==="pending") &&<BoxContainerben key={orders.id} style={{color:'red'}}>
           <Elemst>status :{order.status}</Elemst>
             <ElemContainer>Name :{order.Name}</ElemContainer>
            <ElemContainer>Phone :{order.Phone}</ElemContainer>
            <ElemContainer>Date :{order.Date}</ElemContainer>
            <ElemContainer>Location :{order.Location}</ElemContainer>
            <ElemContainer>Service_Class :{order.Service_Class}</ElemContainer>
            <ElemContainer>Number_Guests :{order.Number_Guests}</ElemContainer>
            <Elempay>payment :{order.payment}$</Elempay>
           
            </BoxContainerben>

          ))}
          </BoxC>
          



      )}
      


    </div>

  )

}


export default Home
