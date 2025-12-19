import styled from "styled-components";
import {mobile} from "../responsive";
import Navbar from '../components/Navbar'
import Footer from "../components/Footer";
import { NavLink } from "react-router-dom";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

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
  border-radius: 40px;
  width: 35%;
  padding: 20px;
  height: 60vh;
  background-color: rgb(235, 235, 235);
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  direction: rtl;
  padding-right: 15px;
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

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  margin-top: 10px;
  height: 7vh;
  justify-self: end;
  margin-right: 15px;
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 16px;
  color: blue;
  cursor: pointer;
  direction: rtl;
  margin-right: 15px;
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
`

const Login = (props) => {
  
  return (   
    <ContainerParent>
      <Navbar />
     <Container>
       <Wrapper>
       <div style={{display:"grid", width:"100%", gridTemplateColumns:"1fr 1fr"}} >
          <HighlightOffIcon style={{fontSize:"35px", justifySelf:"start"}} />
          <Title>ورود</Title>
        </div>
         <Form>
           <Input placeholder="نام کاربری" />
           <Input placeholder="رمز ورود" />
           <Link>رمز عبور خود را فراموش کرده اید؟ بازیابی رمز عبور</Link>
           <Button>تایید</Button>
           <SwitchButton><NavLink style={{textDecoration: "none",color: "inherit" }} to="/Register" >حساب کاربری ندارید؟ ایجاد حساب کاربری</NavLink></SwitchButton>
         </Form>
       </Wrapper>
     </Container>
     <Footer />
     </ContainerParent>
  );
};


export default Login;

/*
background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
*/