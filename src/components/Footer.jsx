import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@mui/icons-material";
import styled from "styled-components";
import { mobile } from "../responsive";
import { NavLink } from "react-router-dom";

const PLarge = styled.p`
  font-size: 36px;
  color: rgb(30,30,30);
  direction: rtl;
  line-height: 1.4;
`;
const PMedium = styled.p`
  font-size: 24px;
  color: rgb(60,60,60);
  direction: rtl;
  line-height: 1.4;
  padding: 1vh 0% 1vh 0%;
`;
const PSmall = styled.p`
  font-size: 18px;
  color: rgb(100,100,100);
  direction: rtl;
  line-height: 1.4;
  padding: 1vh 2% 1vh 2%;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 6fr 3fr 3fr;
  height: 40vh;
  width: 100%;
  
`;

const LeftContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: 25px 20px 20px 20px;
  border: 10px solid rgb(210,210,210);
  border-radius: 30px
`;


const CenterContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr 4fr;
  padding: 20px;
`;
const OptionsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  background-color: rgb(210,210,210);
  gap: 10px;
  padding: 10px;
  border-radius: 20px;
`; 
const OptionBox = styled.div`
  background-color: white;
  height: 5vh;
  width: 90%;
  border-radius: 15px;
  padding: 0vh 5% 0vh 5%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RightContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr 4fr;
  padding: 20px;
  
`;
const RightImgContainer = styled.div`
  display: flex;
  justify-content: end;
`;
const RightTextContainer = styled.div`
`

const Footer = () => {

  let something = "website"

  return (
    <Container>
      <LeftContainer>
        <PSmall style={{fontSize:"20px"}} >
        در یک روز آفتابی، پرندگان به شادمانی در آسمان پرواز می‌کردند و نسیم ملایم برگ‌های درختان را تکان می‌داد. کودکانی در حیاط بازی می‌کردند و صدای خنده‌هایشان فضای محله را پر کرده بود. گربه‌ای آرام از کنار دیوار عبور می‌کرد و سگ‌ها در دوردست پارس می‌کردند. بوی نان تازه از نانوایی نزدیک به مشام می‌رسید و مردم با خوشحالی خریدهای روزانه خود را انجام می‌دادند. در کوچه‌ها رنگ‌ها و صداها با هم آمیخته بودند و حس زندگی را به همه منتقل می‌کرد.
        </PSmall>
      </LeftContainer>
      <CenterContainer>
        <PLarge>
          درباره {something} :
        </PLarge>
        <OptionsContainer>
          <OptionBox>
            <PSmall>
              website
            </PSmall>
          </OptionBox>
          <OptionBox>
            <PSmall>
              developer
            </PSmall>
          </OptionBox>
          <OptionBox>
            <PSmall>
              data base
            </PSmall>
          </OptionBox>
          <OptionBox>
            <PSmall>
              AI tools
            </PSmall>
          </OptionBox>
          <OptionBox>
            <PSmall>
              register
            </PSmall>
          </OptionBox>
          <OptionBox>
            <PSmall>
              responsive
            </PSmall>
          </OptionBox>
          <OptionBox>
            <PSmall>
              admin panel
            </PSmall>
          </OptionBox>
          <OptionBox>
            <PSmall>
              UI / UX
            </PSmall>
          </OptionBox>
        </OptionsContainer>
      </CenterContainer>
      <RightContainer>
        <RightImgContainer>
          <img style={{height:"7vh"}} src="./images/dgstorelogo.jpg" />
        </RightImgContainer>
        <RightTextContainer>
          <PMedium>
          در یک روز آفتابی، پرندگان به شادمانی در آسمان پرواز می‌کردند و نسیم ملایم برگ‌های درختان را تکان می‌داد. کودکانی در حیاط بازی می‌کردند
          </PMedium>
        </RightTextContainer>
      </RightContainer>
    </Container>
  ); 
};

export default Footer;
