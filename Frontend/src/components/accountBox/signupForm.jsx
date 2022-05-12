import React, { useContext } from "react";
import axios from 'axios';
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { useRef, useState, useEffect } from "react";
import { useNavigate  } from "react-router-dom";
import { AccountContext } from "./accountContext";

export function SignupForm(props) {
  const { switchToSignin } = useContext(AccountContext);
  const [user, setUser] = useState('');
  const [email,setemail]=useState('');
  const [phone,setphone]=useState('');
  const [pwd, setPwd] = useState('');
  const [matchPwd, setMatchPwd] = useState('');
  const history = useNavigate ();
  const handleSubmit = async (e) => {
      e.preventDefault();
     
      // if button enabled with JS hack 
       axios.post('http://localhost:4000/ceremony/register',
      {data: JSON.stringify({ user_name:user,email:email,password: pwd,passwordCon:matchPwd,phone:phone })} ,
        
           
          
          ).then(function (response) {
         console.log(response.data);
          // TODO: remove console.logs before deployment
          console.log(JSON.stringify(response));
          //console.log(JSON.stringify(response
          //clear state and controlled inputs
          setUser('');
          setPwd('');
          setMatchPwd('');
          setemail('');
          setphone('');
          history('/signin');
          switchToSignin();
        })
      . catch (function (err) {
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
          
      })
  }
 
  return (
    <BoxContainer>
      <FormContainer  >
        <Input type="text" placeholder="Full Name"         
        onChange={(e)=>{
          setUser(e.target.value);

        }}/>
        <Input type="email" placeholder="Email" 
         onChange={(e)=>{
          setemail(e.target.value);

        }}/>
        <Input type="password" placeholder="Password" 
         onChange={(e)=>{
        setPwd(e.target.value);

        }}/>
        <Input type="password" placeholder="Confirm Password" 
         onChange={(e)=>{
          setMatchPwd(e.target.value);

        }}/>
        <Input type="text" placeholder="Phone" 
         onChange={(e)=>{
          setphone(e.target.value);

        }}/>
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <SubmitButton type="submit" onClick={handleSubmit } >Register</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Already have an account?
        <BoldLink href="#" onClick={switchToSignin}>
          Signin
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}
