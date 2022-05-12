import React from 'react';
import { MDBCard,  MDBCardText } from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
const Contact = () => {
  return (
    <div
      style={{
     margin:'5px'
      }}
    >
        <MDBCard style={{ width: '18rem' }}>
      
        <MDBCardText>
          <p>Phone Number : +966 555- 656-23.</p>
          <p> Email : CeremonyCompany@gmail.com</p>

        </MDBCardText>
      
    </MDBCard>
    </div>
  );
};

export default Contact;
