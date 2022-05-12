import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { MDBBtn } from "mdb-react-ui-kit";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import axios from "axios";
const BoxContainerben = styled.div`
  width: 80%;
  min-height: 100px;
  display: flex;
  flex-direction: column;
  border-radius: 19px;
  background-color: rgba(97, 97, 97, 0.28);
  box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
  padding: 20px;
  margin: 10px;
`;
const ElemContainer = styled.div`
  width: 50%;
  padding: 11px;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  border: none;
  border-radius: 19px;
  background-color: rgba(244, 90, 8);
  font-family: "Tapestry", cursive;
  font-size: 20px;
  letter-spacing: 3px;
  margin: 20px;
  padding: 20px;
`;
const BoxC = styled.div`
  width: 100%;
  margin: "10px";
`;

const Admin = () => {
  const [orders, setorders] = useState([]);

  const fetchData = async () => {

    const response = await axios.get("http://localhost:4000/ceremony/admin", {
      
    });

    const data = response.data;
    console.log(response.data);

    setorders(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleEdit = async (id, signal) => {
    console.log(id);
    const editorder = orders.find((order) => order._id === id);
    editorder.status = signal;
    const updatedorder = { ...editorder };
    console.log(updatedorder);
    try {

      const response = await axios.patch(
        `http://localhost:4000/ceremony/admin/${id}`,
        updatedorder,
      );

      console.log(response);
      setorders(orders.filter((order) => order.id != id));
    } catch (err) {
      if (!err?.response) {
        console.log(err);
      } else if (err.response?.status === 400) {
        console.log(err);
      } else if (err.response?.status === 401) {
        console.log(err);
      } else {
        console.log(err);
      }
    }
  };

  function ay(e) {
    const id = e.o;
    let signal = "";

    if (e.sig === true) {
      signal = "Agree";
    } else {
      signal = "Reject";
    }

    handleEdit(id, signal);
    fetchData();
  }

  return (
    <div>
      {orders.length > 0 && (
        <BoxC>
          {orders.map((order) => (
            <BoxContainerben key={order._id} style={{ color: "red" }}>
              <ElemContainer key={order._id}>Name :{order.Name}</ElemContainer>
              <ElemContainer key={order._id}>
                Phone :{order.Phone}
              </ElemContainer>
              <ElemContainer key={order._id}>Date :{order.Date}</ElemContainer>
              <ElemContainer key={order._id}>
                Location :{order.Location}
              </ElemContainer>
              <ElemContainer key={order._id}>
                status :{order.status}
              </ElemContainer>
              <ElemContainer key={order._id}>
                Service_Class :{order.Service_Class}
              </ElemContainer>
              <ElemContainer key={order._id}>
                Number_Guests :{order.Number_Guests}
              </ElemContainer>
              <ElemContainer key={order._id}>
                payment :{order.payment}
              </ElemContainer>
              <MDBBtn
                style={{ margin: "10px" }}
                outline
                color="success"
                key={order._id}
                onClick={() => {
                  ay({ o: order._id, sig: true });
                }}
              >
                Agree
              </MDBBtn>
              <MDBBtn
                style={{ margin: "10px" }}
                id="foo"
                outline
                color="danger"
                key={order._id}
                onClick={() => {
                  ay({ o: order._id, sig: false });
                }}
              >
                Reject
              </MDBBtn>
            </BoxContainerben>
          ))}
        </BoxC>
      )}
    </div>
  );
};

export default Admin;
