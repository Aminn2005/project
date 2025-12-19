import { Badge } from "@mui/icons-material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Search } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import Register from "../pages/Register";
import Cart from "../pages/Cart"
import {useState} from "react";
import Login from "../pages/Login";
import { BrowserRouter as Router, Routes, Route, NavLink, useLocation } from "react-router-dom";
import NavbarSection2 from "./NavbarSection2"; 
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import DangerousIcon from '@mui/icons-material/Dangerous';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import axios from "axios";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import DoneIcon from '@mui/icons-material/Done';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import Product from "./Product"
import { allItems } from "../data";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const Container = styled.div` 
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  background-color: white;
  height: 11vh;
  margin:0px;
  margin-bottom: 1px;  
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  border: 1px solid rgb(190,190,190);
  background-color: white;
  z-index: 100;
  height: 8vh;
  width: 96%;
  position: fixed;
  top: 0;;
  padding: 1.5vh 2% 1.5vh 2%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Wrapper2 = styled.div`
  position: relative;
  height: 50px;
  width: 100%;
  background-color: pink;
`

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  padding: 5px;
  margin-left: 10%;
  background-color: rgb(210, 210, 210);
  padding: 1.5vh 2.5% 1.5vh 2.5%;
  border-radius: 200px;
  height: 5vh;
  width: 70%;
  border-radius: 200px;
  margin-bottom: 1vh;
`;

const Input = styled.input`
  border: none;
  height: 5vh;
  width: 90%;
  border-radius: 200px;
  font-size: 20px;
  padding: 2px 10px 2px 10px;
  ${mobile({ width: "50px" })}
`;

const SearchButton = styled.button`
  height: 5vh;
  border: none;
  border-radius: 200px;
  background-color: white;
  margin-left: 4%;
  cursor: pointer;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  margin-right: 10%;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  cursor: pointer;
  margin-left: 20px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;
const SearchResultContainer = styled.div`
  width: 25%;
  margin-left: 3.9%;
  margin-top: 72px;
  background-color: rgb(190,190,190);
  padding: 5px;
  z-index: 99;
  position: fixed;
  display: grid;
  grid-template-column: 1fr;
  border-radius: 0px 0px 25px 25px;
`
const SearchResultBox = styled.div`
  height: 10vh;
  width: 92%;
  display: grid;
  grid-template-columns: 1fr 4fr;
  background-color: white;
  margin: 0.5vh 0px 0.5vh 2%;
  border-radius: 15px;
  padding: 0vh 1% 0vh 3%; 
`
const SearchResultIMG = styled.img`
  background-color: black;
  height: 65px;
  width: 65px;
  border-radius: 15px;
`
const SearchResultDetails = styled.div`
  display: grid;
  grid-template-column: 1fr;
`
const SearchResultName = styled.p`
  
`
const SearchResultPrice = styled.p`
  
`
///////////////////////////////////register and login divs bellow

const Container2 = styled.div`
  width: 100%;
  height: 80vh;
  margin-bottom: 15vh;
  position: fixed;
  top: 12vh;
  z-index: 98;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper3 = styled.div`
  background-color: white;
  border-radius: 40px;
  border: 10px solid rgb(180, 180, 180);
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

const Input2 = styled.input`
  flex: 1;
  width: 92%;
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

const Button = styled.div`
  margin-top: 10px;
  width: 40%;
  border: none;
  padding: 0px;
  background-color: #ef4056;
  color: white;
  cursor: pointer;
  height: 7vh;
  justify-self: end;
  margin-right: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;
const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;
const SwitchButton = styled.div`
  background-color: white;
  border: none;
  border-radius: 100px;
  width: 70%;
  height: 6vh;
  justify-self: center;
  align-self: end;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  user-select: none;
  display:"flex";
  align-content: center;
  font-weight: 200;
  color: rgb(60,60,60);
`;
const RegisterSuccessfulContainer = styled.div`
  position: fixed;
  z-index: 100;
  height: 30vh;
  width: 30%;
  margin: 35vh 35% 35vh 35%;
  background-color: white;
  display: grid;
  grid-template-columns: 1fr, 2fr;
  border: 6px solid rgb(180,180,180);
  border-radius: 25px;
`;
const RegisterSuccessfulHeader = styled.div`
  background-color: white;
  justify-content: center;
  align-items: center;
  margin: 2vh 5% 2vh 5%;
`;
const RegisterSuccessText = styled.p`
  font-size: 35px;
  direction: rtl;
  color: rgb(10,10,10);
`;
const RegisterSuccessfulFooter = styled.div`
  background-color: white;
  border-radius: 40px;
  display: grid;
  grid-template-columns: repeat(2, 1fr); 
`;
const RegisterSuccessSeeButton = styled.button`
  border: 3px solid rgb(180,180,180);
  border-radius: 25px;
  background-color: white;
  margin: 0vh 5% 2vh 5%;
  color: rgb(60,60,60);
  font-size: 22px;
`;
const RegisterSuccessOkButton = styled.button`
  border: 3px solid rgb(180,180,180);
  border-radius: 25px;
  background-color: white;
  margin: 0vh 5% 2vh 5%;
  color: rgb(60,60,60);
  font-size: 22px;
`;
const ForgotPasswordContainer =styled.div`
  height: 10vh;
  width: 16.5%;
  background-color: pink;
  position: fixed;
  margin-top: 34vh;
  display: grid;
  grid-template-columns: 1fr;
`
const ForgotPasswordHeader = styled.div`

`;
const ForgotPasswordFooter = styled.div`

`;
/////////////////////////////////////////////////////---profile
const ProfileContainer = styled.div`
  height: 58vh;
  display: grid;
  grid-template-rows: 8fr 6fr 6fr 2fr ;
  gap: 10px;
  background-color: white;
`;
const ProfileHeaderContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 5fr;
  gap: 10px;
`;
const ProfileHeaderLeftContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
`;
const ProfileHeaderLeftImgContainer = styled.div`
  height: 18.5vh;
  width: 90%;
  margin-left: 0px;
  border-radius: 500px;
  background-color: white;
`;
const ProfileHeaderLeftImgEditContainer = styled.div`
  height: 25px;
  width: 25px;
  border-radius: 50px;
  position: fixed;
  margin: 14vh 0%  0vh 8%;
  background-color: rgb(210, 210, 210);
  cursor: pointer;
`;
const ProfileHeaderRightContainer = styled.div`
`;
const ProfileHeaderRightUpper = styled.div`
  height: 8.5vh;
  display: grid;
  grid-template-columns: 1.8fr 13.5fr 5.2fr;
  border: 3px solid rgb(180, 180, 180);
  padding: 0px 4px 0px 4px;
  border-radius: 15px;
`;
const ProfileHeaderRightBottom = styled.div`
  height: 8.5vh;
  border: 3px solid rgb(180, 180, 180);
  display: grid;
  grid-template-columns: 1.8fr 13.5fr 5.2fr;
  margin-top: 4px;
  padding: 0px 4px 0px 4px;
  border-radius: 15px;
`;
const ProfileHeaderRightInputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ProfileHeaderRightTitleContainer = styled.div`
  display: grid;
  align-items: center;
`;
const ProfileHeaderInput = styled.input`
  height: 5vh;
  width: 95%;
  font-size: 20px;
  display: grid;
  justify-content: center;
  align-items: center;
  `;
const ProfileHeaderName = styled.p`
  display: grid;
  grid-template-columns: 5fr 1fr;
  height: 5.75vh;
  width: 98%;
  font-size: 20px;
  padding-left: 5px;
  align-items: center;
`;
const ProfileHeaderRightTitle = styled.p`
  font-size: 20px;
  direction: rtl;
  align-items: center;
`;
const ProfileCartContainer = styled.div`
  display: grid;
  grid-template-columns: 2.2fr 10fr 1.8fr;
  background-color: white;
  border-radius: 30px;
  border: 5px solid rgb(180, 180, 180);
`;
const ProfileLikesContainer = styled.div`
  display: grid;
  grid-template-columns: 2.2fr 10fr 1.8fr;
  background-color: white;
  border-radius: 30px;
  border: 5px solid rgb(180, 180, 180);
`;
const ProfileItemsLeft = styled.div`
  display: grid;
  align-items: center;
`;
const ProfileItemsMiddle = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 5px;
  align-items: center;
`;
const ProfileItemsRight = styled.div`
  display: grid;
  align-items: center;
`;
const ProfileFooterContainer = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
`;
const ProfileLoggOutButton = styled.button`
  height: 6vh;
  width: 15%;
  border: none;
  border-radius: 200px;
  background-color: green;
  position: fixed;
  margin-top: 3vh;
  font-size: 20px;
  background-color: rgb(210, 210, 210);
  cursor: pointer;
`;

const Navbar = () => {
  async function getAccountsData(){
    const { data } = await axios.get("http://localhost:5001/accounts");
    localStorage.setItem("accountsData", JSON.stringify(data));
  };
  //if(JSON.parse(localStorage.getItem("userIsLogedIn")) == true){
  //  getAccountsData()
  //};
  getAccountsData();
  const allData = (JSON.parse(localStorage.getItem("allData") || "[]")) ;
  const [searchInput, setSearchInput] = useState("");
  const [searchResult, setSearchResult] = useState("");
  const [showSearchResultBox, setShowSearchResultBox] = useState(true);
  const [accountsDataExists, setAccountsDataExists] = useState(false);
  const [userNameIsBig, setUserNameIsBig] = useState(true);
  const [registerSuccessfulIsOpen, setRegisterSuccessfulIsOpen] = useState(false);
  const [userIsLogedIn, setUserIsLogedIn] = useState(false);
  const [loggedInStatus, setLoggedInStatus] = useState(JSON.parse(localStorage.getItem("userIsLogedIn")) || false)
  const [profileIsOpen, setProfileIsOpen] = useState(false);
  const [userNameLoggIn, setUserNameLoggIn ] = useState("");
  const [userPasswordLoggIn, setUserPasswordLoggIn] = useState("");
  const [userPasswordLoggInIsWrong, setUserPasswordLoggInIsWrong] = useState(false);
  const [loggInUserNameNotFound, setLoggInUserNameNotFound] = useState(false)
  const [forgotPasswordIsOpen, setForgotPasswordIsOpen] = useState(false);
  const [forgotPasswordValue, setForgotPasswordValue] = useState("")
  const [userNameLoggInIsEmpty, setUserNameLoggInIsEmpty] = useState(false);
  const [userPasswordLoggInIsEmpty, setUserPasswordLoggInIsEmpty] = useState(false);
  const [userNameEditing, setUserNameEditing] = useState(false);
  const [userPassEditing, setUserPassEditing] = useState(false);
  const [userPassShow, setUserPassShow] = useState(false);
  const [editingProfileUserName, setEditingProfileUserName] = useState(false);
  const [profileImgChosing, setProfileImgChosing] = useState(false);
  const [profileNewUserName, setProfileNewUserName] = useState("");
  const [profileNewUserPass, setProfileNewUserPass] = useState("");


  const [profileData, setProfileData] = useState( JSON.parse(localStorage.getItem("profileData")) || { user_name:"something", user_password:"something", user_pfp:"500", user_cart:[], user_likes:[], user_id:"1" } )
  
  const { pathname } = useLocation();
    
  const [registerIsOpen, setRegisterIsOpen] = useState(false);
  const [loginIsOpen, setLoginIsOpen] = useState(false)

  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userPasswordConfirm, setUserPasswordConfirm] = useState("");
  const [passwordsAreEqual, setPasswordsAreEqual] = useState(true);
  const [passwordIsBig, setPasswordIsBig] = useState(true);
  const [SQLCommand, setSQLCommand] = useState("");

  if( accountsDataExists === false ){
    const accountsData = JSON.parse(localStorage.getItem("accountsData"));
    let accountsUserNames = [];
    accountsData.forEach( object => accountsUserNames.push(object.user_name.trim()) );
    setAccountsDataExists(true);
  }

  async function getAccountsData(){
    const { data } = await axios.get("http://localhost:5001/accounts");
    localStorage.setItem("accountsData", JSON.stringify(data));
  };

  return (
    <Container>
      <Wrapper>
        <Left>
          <SearchContainer>
            <Input  
            onClick={()=>{ setShowSearchResultBox(true) }}
            onChange={ (e) => {
              setSearchInput(e.target.value); setShowSearchResultBox(true); 
              setSearchResult( allData.filter( item => item.name.toLowerCase().includes(e.target.value.toLowerCase()) || item.description.toLowerCase().includes(e.target.value.toLowerCase())  ));
              console.log(allData.filter( item => item.name.toLowerCase().includes(e.target.value.toLowerCase()))); 
              localStorage.setItem("searchResult", JSON.stringify(allData.filter( item => item.name.toLowerCase().includes(e.target.value.toLowerCase()) || item.description.toLowerCase().includes(e.target.value.toLowerCase()) )))
            }} placeholder="جست و جو محصول" />
            <NavLink onClick={()=>{ if(searchInput.length >= 1){localStorage.setItem("specialFilter","search");localStorage.setItem("searchArray", JSON.stringify(searchResult));pathname === "/Results" && window.location.reload() }}} 
            style={{ all: "unset", cursor: "pointer", marginLeft:"5%" }}  
            >
              <SearchButton>
                <Search />
              </SearchButton>
            </NavLink>
          </SearchContainer>
        </Left>
        <Center>
          <Logo>
            <img 
            style={{
              height:"7vh",
              marginTop:"1vh",
            }} 
            src="./images/dgstorelogo.jpg" >
            </img>
          </Logo>
        </Center> 
        <Right>
        <MenuItem style={{backgroundColor:"black", height:"30px", width:"30px", borderRadius:"100px",border:"2px solid black"}}
          onClick={()=>{
            loggedInStatus == false && setRegisterIsOpen(true);
            loggedInStatus == true && setProfileIsOpen(true);
          }} >
        <img src={"./images/"+ profileData.user_pfp +".png"} style={{height:"30px", width:"30px", borderRadius:"200px"}} ></img>
          </MenuItem>
          <MenuItem>
            <NavLink style={{textDecoration: "none",color: "inherit" }} to="/Cart" >
              <ShoppingCartIcon style={{ fontSize:"38px", color:"black" }} badgeContent={4} color="primary">
              </ShoppingCartIcon>   
            </NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink onClick={()=>{localStorage.setItem("specialFilter","likes")}} style={{textDecoration: "none",color: "inherit" }} to="/Results" >
              <FavoriteIcon style={{ fontSize:"35px", color:"black" }} badgeContent={4} color="primary">
              </FavoriteIcon>   
            </NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink style={{textDecoration: "none",color: "inherit" }} to="/" >
              <HomeIcon style={{ fontSize:"38px", color:"black" }} badgeContent={4} color="primary">
              </HomeIcon>   
            </NavLink>
          </MenuItem>
        </Right>
      </Wrapper>
      {  searchInput !== "" && showSearchResultBox &&( 
      <SearchResultContainer>
      { JSON.parse(localStorage.getItem("searchResult")).length > 0 ? JSON.parse(localStorage.getItem("searchResult")).slice(0,6).map((item) => (
        <NavLink style={{ all: "unset", cursor: "pointer" }}  to="/Product" >
        <SearchResultBox key={item.id} onClick={()=>{ localStorage.setItem("id", item.id); pathname === "/Product" && window.location.reload();}} >
          { item.img && <SearchResultIMG src={ "../../images/" + item.img + ".webp"} />}
          <SearchResultDetails>
            <SearchResultName>{item.name}</SearchResultName>
            <SearchResultPrice>{item.pricestring}</SearchResultPrice>
          </SearchResultDetails>
        </SearchResultBox>
        </NavLink>
        
      )):
        <p style={{textAlign:"center", fontSize:"18px"}} >هیچ محصولی یافت نشد</p>      
      }{
        searchResult.length > 0   && 
        <div style={{display:"flex", justifyContent:"center", alignItems:"center", gap:"5%", margin:"0.5vh 0% 0.5vh 0%"}} >
          <button 
            onClick={()=>{ setShowSearchResultBox(false) }}
            style={{height:"4vh", display:"flex", borderRadius:"100px", border:"none", backgroundColor:"white"}} >
            <KeyboardArrowUpIcon /> 
          </button>
          <NavLink onClick={()=>{ localStorage.setItem("specialFilter","search");localStorage.setItem("searchArray", JSON.stringify(searchResult)); ; pathname === "/Results" && window.location.reload() }} style={{ all: "unset", cursor: "pointer" }}  to="/Results" >
            <button style={{height:"4vh", borderRadius:"200px", border:"none", backgroundColor:"white"}} >مشاهده همه {searchResult.length} محصول</button>
          </NavLink>    
        </div>
      }
      </SearchResultContainer>
      )
      }
      { registerIsOpen &&
      <Container2 >
        <Wrapper3>
          <div style={{display:"grid", width:"100%", gridTemplateColumns:"1fr 1fr"}} >
            <HighlightOffIcon onClick={()=>{ setLoginIsOpen(false); setRegisterIsOpen(false); setPasswordIsBig(true); setPasswordsAreEqual(true); setUserNameIsBig(true); setUserPassword(""); setUserName("") }} style={{fontSize:"35px", justifySelf:"start", cursor:"pointer"}} />
            <Title>ایجاد حساب کاربری</Title>
          </div>
          <Form>

          { !userNameIsBig &&
            <div style={{alignSelf:"center", position:"absolute", paddingTop:"8px", paddingLeft:"0.5%", color:"red", display:"flex", marginBottom:"275px"}} >
            <DangerousIcon style={{alignSelf:"center", paddingTop:"8px", paddingLeft:"0.5%", color:"red"}} />
            <p style={{alignSelf:"center",  paddingTop:"8px", paddingLeft:"2.5%", color:"red", width:"200px"}} >نام باید حداقل چهار کاراکنر باشد</p>
            </div>
          }

            <Input2 type="text" onChange={(e)=>{
              setUserName(e.target.value);
            }} placeholder="نام کاربری" />

            { !passwordIsBig &&
            <div style={{alignSelf:"center", position:"absolute", paddingTop:"8px", paddingLeft:"0.5%", color:"red", display:"flex", marginBottom:"115px"}} >
            <DangerousIcon style={{alignSelf:"center", paddingTop:"8px", paddingLeft:"0.5%", color:"red"}} />
            <p style={{alignSelf:"center",  paddingTop:"8px", paddingLeft:"2.5%", color:"red", width:"200px"}} >رمز باید حداقل چهار کاراکنر باشد</p>
            </div>
            }

            <Input2 type="text" onChange={(e)=>{
              setUserPassword(e.target.value);
            }} placeholder="رمز ورود" />
            
            <div style={{display:"flex"}} >
            { !passwordsAreEqual &&
            <div style={{alignSelf:"center", position:"absolute", paddingTop:"8px", paddingLeft:"0.5%", color:"red", display:"flex"}} >
            <DangerousIcon style={{alignSelf:"center", paddingTop:"8px", paddingLeft:"0.5%", color:"red"}} />
            <p style={{alignSelf:"center",  paddingTop:"8px", paddingLeft:"2.5%", color:"red", width:"200px"}} >رمز عبور تطابق ندارد</p>
            </div>
            }
            
            <Input2 type="text" onChange={(e)=>{
              setUserPasswordConfirm(e.target.value)
            }} placeholder="تکرار رمز ورود" />
            </div>
            {
              
            }
            <Button onClick={()=>{ 
              if(userPassword === userPasswordConfirm){setPasswordsAreEqual(true)}
                else{setPasswordsAreEqual(false)};
              if(userPassword.length >= 4){setPasswordIsBig(true)}
                else{setPasswordIsBig(false)};
              if(userName.length >= 4){setUserNameIsBig(true)}
                else{setUserNameIsBig(false)};
              if( userPassword === userPasswordConfirm && userPassword.length >= 4 && userName.length >= 4 ){
                getAccountsData(); //via axios
                axios.post("http://localhost:5001/update-item", { sql: `INSERT INTO accounts (user_name, user_password) VALUES ('${userName}', '${userPassword}');`});
                setRegisterIsOpen(false);
                setLoginIsOpen(false);
                setRegisterSuccessfulIsOpen(true);
                setLoggedInStatus(true);
                localStorage.setItem("userIsLogedIn", JSON.stringify(true) );
                setProfileData({ user_name:userName, user_password:userPassword, user_pfp:"500", user_cart:[], user_likes:[], user_id:"" }); 
                localStorage.setItem("profileData", JSON.stringify({ user_name:userName, user_password:userPassword, user_pfp:"500", user_cart:[], user_likes:[], user_id:"" }))
              }
            }} >تایید</Button>
            
            <SwitchButton onClick={()=>{ setRegisterIsOpen(false); setLoginIsOpen(true); getAccountsData();setPasswordIsBig(true); setPasswordsAreEqual(true); setUserNameIsBig(true); setUserPassword(""); setUserName("") }}  ><p style={{textAlign:"center"}} >قبلا حساب کاربری ساخته اید؟  ورود</p></SwitchButton>
            
          </Form>
        </Wrapper3>
      </Container2>
      }
      { loginIsOpen &&
      <Container2>
        <Wrapper3>
        <div style={{display:"grid", width:"100%", gridTemplateColumns:"1fr 1fr"}} >
           <HighlightOffIcon onClick={()=>{ setLoginIsOpen(false); setRegisterIsOpen(false); setUserNameLoggIn(""); setUserPasswordLoggIn(""); setUserPasswordLoggInIsEmpty(false); setUserNameLoggInIsEmpty(false); setUserPasswordLoggInIsWrong(false) }} style={{fontSize:"35px", justifySelf:"start", cursor:"pointer"}} />
           <Title>ورود</Title>
         </div>
          <Form>
            <Input2 onChange={(e)=>{ setUserNameLoggIn(e.target.value); setLoggInUserNameNotFound(false)  }} placeholder="نام کاربری" />
            { loggInUserNameNotFound && userNameLoggIn.length >= 1 &&
            <div style={{alignSelf:"center", position:"absolute", paddingTop:"8px", paddingLeft:"0.5%", color:"red", display:"flex", marginBottom:"275px"}} >
            <DangerousIcon style={{alignSelf:"center", paddingTop:"8px", paddingLeft:"0.5%", color:"red"}} />
            <p style={{alignSelf:"center",  paddingTop:"8px", paddingLeft:"2.5%", color:"red", width:"200px"}} >نام کاربری پیدا نشد</p>
            </div>
            }
            <Input2 onChange={(e)=>{ setUserPasswordLoggIn(e.target.value); setUserNameLoggInIsEmpty(false) }} placeholder="رمز ورود" />
            { userPasswordLoggInIsWrong &&
            <div style={{alignSelf:"center", position:"absolute", paddingTop:"8px", paddingLeft:"0.5%", color:"red", display:"flex", marginBottom:"80px"}} >
            <DangerousIcon style={{alignSelf:"center", paddingTop:"8px", paddingLeft:"0.5%", color:"red"}} />
            <p style={{alignSelf:"center",  paddingTop:"8px", paddingLeft:"2.5%", color:"red", width:"200px"}} >رمز اشتباه است</p>
            </div>
            }
            { userNameLoggInIsEmpty &&
            <div style={{alignSelf:"center", position:"absolute", paddingTop:"8px", paddingLeft:"0.5%", color:"red", display:"flex", marginBottom:"275px"}} >
            <DangerousIcon style={{alignSelf:"center", paddingTop:"8px", paddingLeft:"0.5%", color:"red"}} />
            <p style={{alignSelf:"center",  paddingTop:"8px", paddingLeft:"2.5%", color:"red", width:"200px"}} >نام کاربری خود را وارد کنید</p>
            </div>
            }
            { userPasswordLoggInIsEmpty &&
            <div style={{alignSelf:"center", position:"absolute", paddingTop:"8px", paddingLeft:"0.5%", color:"red", display:"flex", marginBottom:"80px"}} >
            <DangerousIcon style={{alignSelf:"center", paddingTop:"8px", paddingLeft:"0.5%", color:"red"}} />
            <p style={{alignSelf:"center",  paddingTop:"8px", paddingLeft:"2.5%", color:"red", width:"200px"}} >رمز ورود خود را وارد کنید</p>
            </div>
            }
            {/*
            <Link onClick={()=>{
              JSON.parse(localStorage.getItem("accountsData")).forEach((object)=>{
                if(object.user_name.trim() == userNameLoggIn){
                  setForgotPasswordValue(object.user_password.trim())
                }});
              setForgotPasswordIsOpen(true);
            }} >رمز عبور خود را فراموش کرده اید؟ بازیابی رمز عبور</Link>
            
            { forgotPasswordIsOpen &&
              <ForgotPasswordContainer>
              <ForgotPasswordFooter>
                {forgotPasswordValue == "" ? <p>نام کاربری خود را به درستی وارد کنید</p> : <p>{forgotPasswordValue}</p> }  
              </ForgotPasswordFooter>
              <div style={{backgroundColor:"yellow"}} onClick={()=>{
                JSON.parse(localStorage.getItem("accountsData")).forEach((object)=>{
                  if(object.user_name.trim() == userNameLoggIn){
                    setForgotPasswordValue(object.user_password.trim())
                  }});
                setForgotPasswordIsOpen(true);
              }} >تلاش دوباره</div>
            </ForgotPasswordContainer>
            }
            */}
            <Button onClick={()=>{
              if( userNameLoggIn == "" ){setUserNameLoggInIsEmpty(true)}else{setUserNameLoggInIsEmpty(false)};
              if( userPasswordLoggIn == "" ){setUserPasswordLoggInIsEmpty(true)}else{setUserPasswordLoggInIsEmpty(false)};
              if( userNameLoggIn.length >= 1 && userPasswordLoggIn.length >= 1){
                JSON.parse(localStorage.getItem("accountsData")).forEach((object)=>{
                  if(object.user_name.trim() == userNameLoggIn){
                    setLoggInUserNameNotFound(false)
                    if( object.user_password.trim() == userPasswordLoggIn ){
                        if(!object.user_pfp){object.user_pfp = 500};
                        if(!object.user_cart){object.user_cart = []};
                        if(!object.user_likes){object.user_likes = []};
                        console.log("both user name and user password are match !");
                        setLoggedInStatus(true);
                        localStorage.setItem("userIsLogedIn", JSON.stringify(true) );
                        setLoginIsOpen(false);
                        setRegisterSuccessfulIsOpen(true);
                        setUserPasswordLoggInIsWrong(false);
                        setUserNameLoggIn("");
                        setUserPasswordLoggIn("");
                        localStorage.setItem("profileData", JSON.stringify(object));
                        setProfileData(JSON.parse(localStorage.getItem("profileData")))
                      }else{
                        setUserPasswordLoggInIsWrong(true)
                      }
                    }
                })};
              if( JSON.parse(localStorage.getItem("accountsData")).find(x => x.user_name.trim() == userNameLoggIn )){
                setLoggInUserNameNotFound(false)
              }else{ setLoggInUserNameNotFound(true) }
            }} >تایید</Button> 
            
            <SwitchButton style={{marginLeft:"10%"}} onClick={()=>{ setLoginIsOpen(false); setRegisterIsOpen(true); setUserNameLoggIn(""); setUserPasswordLoggIn(""); setUserPasswordLoggInIsEmpty(false); setUserNameLoggInIsEmpty(false); setUserPasswordLoggInIsWrong(false) }} >حساب کاربری ندارید؟ ایجاد حساب کاربری</SwitchButton>
          </Form>
        </Wrapper3>
      </Container2>
      }
      { profileIsOpen &&
      <Container2>
        <HighlightOffIcon onClick={()=>{ setProfileIsOpen(false) }} style={{ fontSize:"35px",position:"fixed", alignSelf:"start", justifySelf:"start", margin:"8.4vh 34.3% 0px 0px", cursor:"pointer"}} >
        </HighlightOffIcon>
        <Wrapper3 style={{backgroundColor:"white", border:"10px solid gray"}} >
          <ProfileContainer>
          { profileImgChosing &&
                    <div style={{position:"fixed", height:"50vh", width:"25%", backgroundColor:"gray", margin:"0vh 0% 0vh 5%", zIndex:"20", borderRadius:"20px", display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gridTemplateRows:"1fr 1fr 1fr", gap:"10px", padding:"10px"}} >
                      {
                      [500, 501, 502, 503, 504, 505, 506, 507, 508].map((item)=>(
                        <img
                          onClick={()=>{ profileData.user_pfp = item ; setProfileImgChosing(false); localStorage.setItem("profileData", JSON.stringify(profileData));
                            axios.post("http://localhost:5001/update-item", { sql: `UPDATE accounts SET user_pfp = '${item}' WHERE user_name = '${profileData.user_name}';`});
                          }}
                          src={"./images/"+ item +".png"} style={{height:"100px", width:"100px", borderRadius:"200px", cursor:"pointer"}} >
                        </img>
                      ))}
                    </div>
                  }
            <ProfileHeaderContainer>
              <ProfileHeaderLeftContainer>
                <ProfileHeaderLeftImgContainer>
                  <img src={"./images/"+ profileData.user_pfp +".png"} style={{height:"18.5vh", width:"100%", borderRadius:"200px"}} >
                  </img>
                </ProfileHeaderLeftImgContainer>
                <ProfileHeaderLeftImgEditContainer>
                  <ModeEditOutlineOutlinedIcon onClick={()=>{ setProfileImgChosing(true) }}></ModeEditOutlineOutlinedIcon>
                </ProfileHeaderLeftImgEditContainer>
              </ProfileHeaderLeftContainer>
              <ProfileHeaderRightContainer>
                <ProfileHeaderRightUpper>
                  { !userNameEditing ?
                  <div>
                  <ProfileHeaderLeftImgEditContainer onClick={()=>{setUserNameEditing(true)}} style={{margin:"2.25vh 0px 0px 0px"}} >
                  <ModeEditOutlineOutlinedIcon></ModeEditOutlineOutlinedIcon>
                  </ProfileHeaderLeftImgEditContainer>
                  </div>
                  :
                  <div style={{height:"50px", width:"25px", display:"grid", gridTemplateRows:"1fr 1fr"}} >
                    <ProfileHeaderLeftImgEditContainer style={{margin:"1px 0px 0px 0px", cursor:"pointer"}} >
                      <DoneIcon onClick={()=>{
                        if(profileNewUserName.length >= 4){
                          axios.post("http://localhost:5001/update-item", { sql: `UPDATE accounts SET user_name = '${profileNewUserName}' WHERE user_name = '${profileData.user_name}';`});
                          profileData.user_name = profileNewUserName;
                          localStorage.setItem("profileData",JSON.stringify({...JSON.parse(localStorage.getItem("profileData")),user_name: profileNewUserName}));
                          setUserNameEditing(false); 
                      }else{alert("نام باید حداقل چهار کرکتر باشد")}
                    }} ></DoneIcon>
                    </ProfileHeaderLeftImgEditContainer>
                    <ProfileHeaderLeftImgEditContainer style={{margin:"29px 0px 0px 0px", cursor:"pointer"}} onClick={()=>{ setUserNameEditing(false) }} > 
                      <DeleteForeverIcon></DeleteForeverIcon>
                    </ProfileHeaderLeftImgEditContainer>
                  </div>
                  }
                  <ProfileHeaderRightInputContainer>
                    { userNameEditing ?
                    <ProfileHeaderInput onChange={(text)=>{
                      setProfileNewUserName(text.target.value)
                    }}
                    placeholder={profileData.user_name} >

                    </ProfileHeaderInput>
                    :
                    <ProfileHeaderName>
                      {profileData.user_name}
                    </ProfileHeaderName>
                    }
                  </ProfileHeaderRightInputContainer>
                  <ProfileHeaderRightTitleContainer>
                    <ProfileHeaderRightTitle>
                      نام کاربری :
                    </ProfileHeaderRightTitle>
                  </ProfileHeaderRightTitleContainer>
                </ProfileHeaderRightUpper>
                <ProfileHeaderRightBottom>
                { !userPassEditing ?
                <div>
                  <ProfileHeaderLeftImgEditContainer onClick={()=>{setUserPassEditing(true); setUserPassShow(true)}} style={{margin:"2.25vh 0px 0px 0px"}} >
                    <ModeEditOutlineOutlinedIcon></ModeEditOutlineOutlinedIcon>
                  </ProfileHeaderLeftImgEditContainer>
                </div> 
                :
                <div style={{height:"50px", width:"25px", display:"grid", gridTemplateRows:"1fr 1fr"}} >
                    <ProfileHeaderLeftImgEditContainer style={{margin:"1px 0px 0px 0px", cursor:"pointer"}} >
                    <DoneIcon onClick={()=>{
                        if(profileNewUserPass.length >= 4){
                          axios.post("http://localhost:5001/update-item", { sql: `UPDATE accounts SET user_password = '${profileNewUserPass}' WHERE user_name = '${profileData.user_name}';`});
                          profileData.user_password = profileNewUserPass;
                          localStorage.setItem("profileData",JSON.stringify({...JSON.parse(localStorage.getItem("profileData")),user_password: profileNewUserPass}));
                          setUserPassEditing(false); 
                      }else{alert("رمز باید حداقل چهار کرکتر باشد")}
                    }} ></DoneIcon>
                    </ProfileHeaderLeftImgEditContainer>
                    <ProfileHeaderLeftImgEditContainer style={{margin:"29px 0px 0px 0px", cursor:"pointer"}} onClick={()=>{ setUserPassEditing(false) }} > 
                      <DeleteForeverIcon></DeleteForeverIcon>
                    </ProfileHeaderLeftImgEditContainer>
                </div>
                }
                  <ProfileHeaderRightInputContainer>
                    { !userPassShow ?
                    <ProfileHeaderName onClick={()=>{ setUserPassShow(true) }} style={{cursor:"pointer"}} >
                      <span style={{fontSize:"40px", marginTop:"3px"}} >********</span><RemoveRedEyeIcon style={{margin:"0px 0px 12px 8px"}} ></RemoveRedEyeIcon> 
                    </ProfileHeaderName>
                    :
                    userPassEditing ?
                    <div style={{display:"grid", gridTemplateColumns:"999fr 0.1fr"}} >
                      <ProfileHeaderInput
                      onChange={(text)=>{setProfileNewUserPass(text.target.value)}}
                      placeholder={profileData.user_password} >
                      </ProfileHeaderInput>
                    </div>
                    :
                    <div style={{display:"grid", gridTemplateColumns:"999fr 0.1fr", width:"100%"}} >
                      <ProfileHeaderName style={{width:"100%"}}>
                        {profileData.user_password}
                      </ProfileHeaderName>
                      <VisibilityOffIcon style={{position:"fixed", cursor:"pointer", margin:"8px 0px 0px 185px"}} onClick={()=>{setUserPassShow(false)}} ></VisibilityOffIcon>
                    </div>
                    }
                  </ProfileHeaderRightInputContainer>
                  <ProfileHeaderRightTitleContainer>
                    <ProfileHeaderRightTitle>
                      رمز ورود :
                    </ProfileHeaderRightTitle>
                  </ProfileHeaderRightTitleContainer>
                </ProfileHeaderRightBottom>
              </ProfileHeaderRightContainer>
            </ProfileHeaderContainer>
            <ProfileCartContainer>
              <ProfileItemsLeft>
                <NavLink style={{textDecoration: "none",color: "inherit" }} to="/Cart" >
                  <p onClick={()=>{setProfileIsOpen(false)}} style={{display:"grid", justifyItems:"center"}} >
                  <ArrowCircleLeftOutlinedIcon style={{fontSize:"30px"}} ></ArrowCircleLeftOutlinedIcon> مشاهده همه
                  </p>
                </NavLink>
              </ProfileItemsLeft>
              <ProfileItemsMiddle>
              {JSON.parse(localStorage.getItem("profileData",)).user_cart && JSON.parse(localStorage.getItem("profileData",)).user_cart.length >= 1 ?
                JSON.parse(localStorage.getItem("profileData",)).user_cart.slice(0, 4).map((num) => (
                  <NavLink onClick={()=>{localStorage.setItem("id", num)}} style={{ all: "unset", cursor: "pointer" }}  to="/Product" >
                  <img style={{ height:"12vh", borderRadius:"10px" }} src={"/images/"+ num +".webp"} />
                  </NavLink>
                ))
              : <img style={{height:"12vh", marginLeft:"14%"}} src="./images/cartemptysmall.jpg" />
              }
              </ProfileItemsMiddle>
              <ProfileItemsRight>
              <p style={{display:"grid", justifyItems:"center"}} >
                <ShoppingCartIcon style={{fontSize:"30px"}} ></ShoppingCartIcon> سبد خرید
                </p>
              </ProfileItemsRight>
            </ProfileCartContainer>
            <ProfileLikesContainer>
              <ProfileItemsLeft>
                <NavLink 
                onClick={()=>{ localStorage.setItem("specialFilter", "likes"); setProfileIsOpen(false) }}
                style={{textDecoration: "none",color: "inherit" }} to="/Results" >
                  <p style={{display:"grid", justifyItems:"center"}} >
                  <ArrowCircleLeftOutlinedIcon style={{fontSize:"30px"}} ></ArrowCircleLeftOutlinedIcon> مشاهده همه
                  </p>
                </NavLink>
              </ProfileItemsLeft>
              <ProfileItemsMiddle>
                {JSON.parse(localStorage.getItem("profileData",)).user_likes && JSON.parse(localStorage.getItem("profileData",)).user_likes.length >= 1 ?
                JSON.parse(localStorage.getItem("profileData",)).user_likes.slice(0, 4).map((num) => (
                  <NavLink onClick={()=>{localStorage.setItem("id", num)}} style={{ all: "unset", cursor: "pointer" }}  to="/Product" >
                  <img style={{ height:"12vh", borderRadius:"10px" }} src={"/images/"+ num +".webp"} />
                  </NavLink>
                ))
                : <img style={{height:"12vh", marginLeft:"14%"}} src="./images/likesemptysmall.jpg" />
                }
              </ProfileItemsMiddle>
              <ProfileItemsRight>
              <p style={{display:"grid", justifyItems:"center"}} >
                <FavoriteBorderIcon style={{fontSize:"30px"}} ></FavoriteBorderIcon> لایک ها
                </p>
              </ProfileItemsRight>
            </ProfileLikesContainer>
            <ProfileFooterContainer>
              <ProfileLoggOutButton onClick={()=>{setProfileIsOpen(false); localStorage.removeItem("profileData"); ; setUserIsLogedIn(false); setLoggedInStatus(false); localStorage.setItem("userIsLogedIn", JSON.stringify(false)); profileData.user_pfp = 500 }} >
                خروج از حساب
              </ProfileLoggOutButton>
            </ProfileFooterContainer>
          </ProfileContainer>
        </Wrapper3>
      </Container2>
      } 
      { registerSuccessfulIsOpen &&
      <RegisterSuccessfulContainer>
        <RegisterSuccessfulHeader>
          <RegisterSuccessText>
          شما وارد اکانت خود شدید
          </RegisterSuccessText>
        </RegisterSuccessfulHeader>
        <RegisterSuccessfulFooter>
          <RegisterSuccessSeeButton onClick={()=>{ setRegisterSuccessfulIsOpen(false); setProfileIsOpen(true) }}  >
            مشاهده پروفایل
          </RegisterSuccessSeeButton>
          <RegisterSuccessOkButton onClick={()=>{ setRegisterSuccessfulIsOpen(false) }} >
            تایید
          </RegisterSuccessOkButton>
        </RegisterSuccessfulFooter>
      </RegisterSuccessfulContainer>
    }
    </Container>
  );
};

export  default Navbar;
// <NavLink style={{textDecoration: "none",color: "inherit" }} to="/" ><MenuItem></MenuItem></NavLink>