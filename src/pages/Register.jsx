import styled from "styled-components";
import { mobile } from "../responsive";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { NavLink } from "react-router-dom";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { useState } from "react";

const ContainerParent = styled.div`

`;

const Container = styled.div`
  width: 100%;
  height: 80vh;
  margin-bottom: 15vh;
  
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  background-color: rgb(235, 235, 235);
  border-radius: 40px;
  width: 35%;
  padding: 20px;
  height: 60vh;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  direction: rtl;
  padding-right: 12px;
  justify-self: end;
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  height: 55vh;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
  height: 4vh;
  font-size: 20px;
  direction: rtl;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  margin-top: 10px;
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  height: 7vh;
  justify-self: end;
  margin-right: 15px;
`;
const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;
const SwitchButton = styled.button`
  background-color: white;
  border: none;
  border-radius: 100px;
  width: 70%;
  height: 6vh;
  justify-self: center;
  align-self: end;
  font-size: 15px;
  font-weight: bold;
`;

const Register = () => {

  

  return (
    <ContainerParent>
    <Container >
      <Wrapper>
        <div style={{display:"grid", width:"100%", gridTemplateColumns:"1fr 1fr"}} >
          <HighlightOffIcon style={{fontSize:"35px", justifySelf:"start"}} />
          <Title>ایجاد حساب کاربری</Title>
        </div>
        <Form>
          <Input placeholder="نام کاربری" />
          <Input placeholder="رمز ورود" />
          <Input placeholder="تایید رمز ورود" />
          <Button>تایید</Button>
          <SwitchButton><NavLink style={{textDecoration: "none",color: "inherit"  }} to="/Login" >قبلا حساب کاربری ساخته اید؟  ورود</NavLink></SwitchButton>
        </Form>
      </Wrapper>
    </Container>
    
    </ContainerParent>
  );
};

export default Register;

/*
background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
*/