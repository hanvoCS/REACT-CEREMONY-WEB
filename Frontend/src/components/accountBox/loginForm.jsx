import React from "react";
import { useState, useContext } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export function LoginForm(props) {
  const { switchToSignup } = useContext(AccountContext);

  const [usernam, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const history = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:4000/ceremony/login",
        { data: JSON.stringify({ user_name: usernam, password: pwd }) }
      );

      localStorage.setItem(
        "user",
        JSON.stringify({ userId: response.data._id })
      );
      console.log(JSON.stringify(response.data));
      //console.log(JSON.stringify(response));

      const admin = response?.data?.IsAdmin;
      console.log(admin);
      setUser("");
      setPwd("");
      if (admin) {
        history("/admine");
      } else {
        history("/");
      }
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

  return (
    <BoxContainer>
      <FormContainer>
        <Input
          type="email"
          placeholder="Email"
          onChange={(e) => {
            setUser(e.target.value);
          }}
        />
        <Input
          type="password"
          placeholder="Password"
          onChange={(e) => {
            setPwd(e.target.value);
          }}
        />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <MutedLink href="#">Forget your password?</MutedLink>
      <Marginer direction="vertical" margin="1.6em" />
      <SubmitButton type="submit" onClick={handleSubmit}>
        Signin
      </SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Don't have an accoun?{" "}
        <BoldLink href="#" onClick={switchToSignup}>
          Register
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}
