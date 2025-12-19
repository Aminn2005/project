 <NavLink style={{ all: "unset", cursor: "pointer" }}  to="/Product" >
        <SearchResultBox key={item.id} onClick={()=>{ localStorage.setItem("id", item.id); pathname === "/Product" && window.location.reload();}} >
          { item.img && <SearchResultIMG src={ "../../images/" + item.img + ".webp"} />}
          <SearchResultDetails>
            <SearchResultName>{item.name}</SearchResultName>
            <SearchResultPrice>{item.pricestring}</SearchResultPrice>
          </SearchResultDetails>
        </SearchResultBox>
        </NavLink>





















<button onClick={ () => { setShowSearchResultBox(false) } } style={{fontSize:"14px"}}>x</button>


  localStorage.setItem("profileData",JSON.stringify({...JSON.parse(localStorage.getItem("profileData")),user_name: "newUsername"}))


///////////////////////////////////////////////productcomponent
localStorage.setItem("profileData",JSON.stringify({...JSON.parse(localStorage.getItem("profileData")), user_likes: JSON.parse(localStorage.getItem("profileData")).user_likes.push(item.id) }))


import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material"; 
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { setimgGlobalSrc } from "../Redux/store";
import { setproductGlobalData } from "../Redux/store";
import { NavLink } from "react-router-dom";


const Info = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  display: grid;
  grid-template-columns: repeat( 1, 1fr );
  align-items: start;
  justify-content: start;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const IconHolder = styled.div`
  opacity: 0;
  transition: all 0.8s ease;
`

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat( 1, 1fr)
  margin: 5px;
  width: 200px;
  height: 250px;
  justify-content: center;
  position: relative;
  background-color: white;
  border-radius: 15px;
  &:hover ${IconHolder}{
    opacity: 1;
  };
  &:hover ${Info}{
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 15px;
  };
`;

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  position: absolute;
  background-color: trasparent;
`;

const Image = styled.img`
  border-radius: 10px;
  height: 150px;
  width: 150px;
  z-index: 2;
`;



const Icon = styled.div`
  width: 40px;
  height: 40px;
  padding: 0px 0px 0px 0px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  flex: 0 0 15%;
  align-items: center;
  justify-content: center;
  margin: 5px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

const DataHolderParent = styled.div`
  display: flex;
  align-items: end;
  height: 150px;
  width: 100%;
`
const DataHolder = styled.div`
  dispaly: grid;
  grid-template-columns: repeat( 1, 1fr);
  height: 100px;
  width: 100%;
`

const NameDiv = styled.div`
  -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin: 5px;
  width: 190px;
  height: 50px;
`

const PriceDiv = styled.div`
  margin: 5px;
  width: 190px;
  height: 35px;
`
const PName = styled.p`
  width: 170px;
  font-size: 20px;
  direction: rtl;
  display: flex;
  justify-content: center;
`
const PPrice =styled.div`
  font-size: 25px;
  display: flex;
  justify-content: center;
`


const Product = ({ item }) => {
  let itemArray = []
  itemArray.push(item.img)
  const itemImg = itemArray[ itemArray.length - 1 ]
  return (
    <Container onClick={ () => { localStorage.setItem( 'id' , itemImg ); localStorage.setItem( 'specialFilter' , "" ) } } >
      <NavLink style={{textDecoration: "none",color: "inherit", displa:"" }} to="/Product" >
      <Image src={"../../images/" + itemImg + ".webp"} style={{ justifySelf:"center" }}/>
      <Info>
        <IconHolder>
        <Icon> 
          <ShoppingCartOutlined  />
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
        </IconHolder>
        <DataHolderParent >
          <DataHolder >
            <NameDiv>
              <PName> {item.name} </PName>
            </NameDiv>
            <PriceDiv>
              <PPrice> {item.pricestring} </PPrice>
            </PriceDiv>
          </DataHolder>
        </DataHolderParent >
      </Info>
    </NavLink>  
    </Container>
  );
};

export default Product;


////////////////////////////////////////////////////////////////////////////////
















/////////////////////////////////////////////////// filter component 




















<FilterContainerParent>
        <FilterContainer>
        <Filter>
          <FilterText>AAA</FilterText>
          <Select>
            <Option disabled selected>
              0
            </Option>
            <Option>1</Option>
            <Option>2</Option>
            <Option>3</Option>
            <Option>4</Option>
            <Option>5</Option>
            <Option>6</Option>
          </Select>
          <FilterText>BBB</FilterText>
          <Select>
            <Option disabled selected>
              0
            </Option>
            <Option>1</Option>
            <Option>2</Option>
            <Option>3</Option>
            <Option>4</Option>
            <Option>5</Option>
          </Select>
          <FilterText>CCC</FilterText>
          <Select>
            <Option disabled selected>
              0
            </Option>
            <Option>1</Option>
            <Option>2</Option>
            <Option>3</Option>
            <Option>4</Option>
            <Option>5</Option>
            <Option>6</Option>
          </Select>
          <FilterText>DDD</FilterText>
          <Select>
            <Option disabled selected>
              0
            </Option>
            <Option>1</Option>
            <Option>2</Option>
            <Option>3</Option>
            <Option>4</Option>
            <Option>5</Option>
          </Select>
          <FilterText>EEE</FilterText>
          <Select>
            <Option disabled selected>
              0
            </Option>
            <Option>1</Option>
            <Option>2</Option>
            <Option>3</Option>
            <Option>4</Option>
            <Option>5</Option>
            <Option>6</Option>
          </Select>
          <FilterText>FFF</FilterText>
          <Select>
            <Option disabled selected>
              0
            </Option>
            <Option>1</Option>
            <Option>2</Option>
            <Option>3</Option>
            <Option>4</Option>
            <Option>5</Option>
          </Select>
          <FilterText>GGG</FilterText>
          <Select>
            <Option disabled selected>
              0
            </Option>
            <Option>1</Option>
            <Option>2</Option>
            <Option>3</Option>
            <Option>4</Option>
            <Option>5</Option>
            <Option>6</Option>
          </Select>
          <FilterText>HHH</FilterText>
          <Select>
            <Option disabled selected>
              0
            </Option>
            <Option>1</Option>
            <Option>2</Option>
            <Option>3</Option>
            <Option>4</Option>
            <Option>5</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>III</FilterText>
          <Select>
            <Option selected>0</Option>
            <Option>1</Option>
            <Option>2</Option>
          </Select>
        </Filter>
      </FilterContainer>
      </FilterContainerParent>





//////////////////////////////////////////////////// sql table
CREATE TABLE phone (
	id SERIAL PRIMARY KEY,
	img INT,
	field VARCHAR(200),
	name VARCHAR(200),
	brand VARCHAR(200),
	price INT,
	pricestring VARCHAR(200),
	ram INT,
	rom INT,
	maincamrez INT,
	selficamrez INT,
	tarakompixeli INT,
	description VARCHAR(10000)
);

CREATE TABLE laptop (
	id SERIAL PRIMARY KEY,
	img INT,
	field VARCHAR(200),
	name VARCHAR(200),
	brand VARCHAR(200),
	price INT,
	pricestring VARCHAR(200),
	ram INT,
	ramtype VARCHAR(200),
	rom INT,
	romtype VARCHAR(200),
	rez INT,
	cpu VARCHAR(200),
	gpu VARCHAR(200),
	usage VARCHAR(200),
	description VARCHAR(10000)
);

CREATE TABLE console (
	id SERIAL PRIMARY KEY,
	img INT,
	field VARCHAR(200),
	name VARCHAR(200),
	brand VARCHAR(200),
	price INT,
	pricestring VARCHAR(200),
	drive VARCHAR(200),
	rez VARCHAR(200),
	ram INT,
	ramtype VARCHAR(200),
	rom INT,
	romtype VARCHAR(200),
	framerate VARCHAR(200),
	controlerswith VARCHAR(200),
	description VARCHAR(10000)
);

CREATE TABLE headphone (
	id SERIAL PRIMARY KEY,
	img INT,
	field VARCHAR(200),
	name VARCHAR(200),
	brand VARCHAR(200),
	price INT,
	pricestring VARCHAR(200),
	type VARCHAR(200),
	range VARCHAR(200),
	batterylife VARCHAR(200),
	weight VARCHAR(200),
	otherinfo VARCHAR(200),
	connection VARCHAR(200),
	resistance VARCHAR(200),
	description VARCHAR(10000)
);

CREATE TABLE tablet (
	id SERIAL PRIMARY KEY,
	img INT,
	field VARCHAR(200),
	name VARCHAR(200),
	brand VARCHAR(200),
	price INT,
	pricestring VARCHAR(200),
	screensize VARCHAR(200),
	weight VARCHAR(200),
	ram INT,
	rom INT,
	maincamrez INT,
	selficamrez INT,
	tarakompixeli INT,
	description VARCHAR(10000)
);

CREATE TABLE accounts (
	id SERIAL PRIMARY KEY,
	user_name VARCHAR(200),
	user_password VARCHAR(200),
	user_pfp INT,
	user_cart  INTEGER[],
	user_likes  INTEGER[]
);

/////////////////////////////////////////////////// generate
const consoles = [

    

  ];

  const result = consoles.map(c => 
  [
    c.id,
    c.img,
    c.field,
    c.name,
    c.brand,
    c.price,
    c.priceString.replace(/,/g, '.'),
    c.ram,
    c.rom,
    c.mainCamRez,
    c.selfiCamRez,
    c.tarakomPixeli,
    c.description
  ].join(',')
).join('\n');

console.log(result);

////////////////////////////////////////////////// screen

const Screen = styled.div`
  background-color:red;
  height: 641px;
  width: 1351px;
`

//////////////////////////////////////////////////// mysql workbench

CREATE DATABASE shop; ////// to create db

USE shop; ////// to view db 

//////// to create table

CREATE TABLE phone( 
	id int,
    img int,
    field CHAR(200),
    name CHAR(200),
    brand CHAR(200),
    price int,
    pricestring CHAR(200),
    ram int,
    rom int,
    maincamrez int,
    selficamrez int,
    tarakompixeli int,
    description TEXT 
    );  


CREATE TABLE laptop( 
	  id int,
    img int,
    field CHAR(200),
    name CHAR(200),
    brand CHAR(200),
    price int,
    pricestring CHAR(200),
    ram int,
	  ramtype CHAR(200),
    rom int,
  	romtype CHAR(200),
    rez int,
    cpu CHAR(200),
    gpu CHAR(200),
  	usage CHAR(200),
    description TEXT 
    );


CREATE TABLE console( 
	  id int,
    img int,
    field CHAR(200),
    name CHAR(200),
    brand CHAR(200),
    price int,
    pricestring CHAR(200),
    drive CHAR(200),
	  rez CHAR(200),
  	ram int,
  	ramtype CHAR(200),
  	rom int,
	  romtype CHAR(200),
  	framerate CHAR(200),
  	controlerswith CHAR(200),
    description TEXT 
    );

CREATE TABLE headphone( 
	  id int,
    img int,
    field CHAR(200),
    name CHAR(200),
    brand CHAR(200),
    price int,
    pricestring CHAR(200),
    type CHAR(200),
  	range CHAR(200),
  	batterylife CHAR(200),
  	weight CHAR(200),
  	otherinfo CHAR(200),
  	connection CHAR(200),
  	resistance CHAR(200),
    description TEXT 
    ); 

CREATE TABLE tablet( 
	  id int,
    img int,
    field CHAR(200),
    name CHAR(200),
    brand CHAR(200),
    price int,
    pricestring CHAR(200),
  	screensize CHAR(200),
  	weight CHAR(200),
    ram int,
    rom int,
    maincamrez int,
    selficamrez int,
    tarakompixeli int,
    description TEXT 
    ); 

///////// car supports 255 characters but text supports 65535 characters and mediumtext supports near 16m chars
SELECT * FROM tableName; ///////////// to view table 




////////////////////////////////////////////////////////////////
import React, { useState, useEffect } from 'react' 
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Announcement from '../components/Announcement'
import Categories from '../components/Categories'
import SpecialItems from '../components/SpecialItems'
import Products from '../components/Products' 
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import CategoriesSecond from "../components/CategoriesSecond"
import CategoriesThird from "../components/CategoriesThird"
import CategoriesFourth from "../components/CategoriesFourth"
import styled from 'styled-components'
import axios from "axios"


const Home = () => {

  const [allDataExists, setAllDataExists] = useState(false);

  if( !allDataExists ){
  let allData = []; //allData
  
  const [phones, setPhones] = useState([]); //phones
    useEffect(() => {
      axios.get("http://localhost:5001/phone")
        .then(res => setPhones(res.data))
        .catch(err => console.error(err));
    }, []);
  allData.push(...phones.slice(0, 20));

  const [laptops, setLaptops] = useState([]); //laptops
  useEffect(() => {
    axios.get("http://localhost:5001/laptop")
      .then(res => setLaptops(res.data))
      .catch(err => console.error(err));
  }, []);
  allData.push(...laptops);

  const [consoles, setConsoles] = useState([]); //consoles
  useEffect(() => {
    axios.get("http://localhost:5001/console")
      .then(res => setConsoles(res.data))
      .catch(err => console.error(err));
  }, []);
  allData.push(...consoles);

  const [headphones, setHeadphones] = useState([]); //headphones
  useEffect(() => {
    axios.get("http://localhost:5001/headphone")
      .then(res => setHeadphones(res.data))
      .catch(err => console.error(err));
  }, []);
  allData.push(...headphones);

  const [tablets, setTablets] = useState([]); //tablets
  useEffect(() => {
    axios.get("http://localhost:5001/tablet")
      .then(res => setTablets(res.data))
      .catch(err => console.error(err));
  }, []);
  allData.push(...tablets);
  allData.push(...phones.slice(20, 33)); //the remaining 12 items

  localStorage.setItem("allData", JSON.stringify(allData));
  }
  setAllDataExists(true);

  return (
    <div>
      <Navbar />
      <Slider />
      <Categories />
      <CategoriesSecond />
      <SpecialItems />
      <CategoriesThird />
      <CategoriesFourth />
      <Footer />
    </div>
  )
}

export default Home;
///////////////////////////////////////////////////////////////////////////

import { Add, Remove } from "@mui/icons-material";
import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { mobile } from "../responsive";
import { useSelector } from "react-redux";
import { allItems } from "../data"
import TomanIcon from '../assets/icons/toman.svg';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import SProduct from "../components/Product"
import {NavLink} from "react-router-dom"
import axios from "axios";
import { useState, useEffect } from "react";
import allData from "./Home"


const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection:"column" })}
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ height: "40vh" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 200;
  direction: rtl;
`;

const Desc = styled.div`
  margin: 0px 0px 5vh 0px;
  width: 100%;
  background-color: white;
  padding: 10px;
  display: grid;
  gap: 0px;
  grid-template-columns: repeat(3, 1fr);
  border-radius: 10px;
`;

const DescBox = styled.div`
  background-color: rgb(235, 235, 235);
  margin: 10px;
  border-radius: 10px;
  height: 12vh;
  width: 90%;
  display: grid;
  grid-template-columns: (1fr, 1)
`
const DescBoxHeader = styled.p`
  display: grid;
  align-items: center;
  height: 5vh;
  width: 90%;
  margin: 0.5vh 5% 0.5vh 5%;
  direction: rtl;
`;

const DescBoxFooter = styled.p`
  display: grid;
  align-items: center;
  height: 5vh;
  width: 90%;
  margin: 0.5vh 5% 0.5vh 5%;
  direction: rtl;
`;

const PriceDiv = styled.div`
  height : 15vh;
  width: 80%;
  background-color: rgb(235, 235, 235);
  border-radius: 20px;
  margin: 0px 0px 0px 10%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);


`
const PriceDivPrice = styled.div`
  width: 90%;
  height: 10vh;
  margin: 2.5vh 5% 2.5vh 5% ;
  font-size: 40px;
  display: flex;
  align-items: center;
`
const PriceDivButton = styled.button`
  width: 90%;
  height: 8vh;
  border-radius: 10px;
  margin: 3.5vh 5% 3.5vh 5% ;
  border: none;
  font-size: 24px;
  color: white;
  border: 5px solid red;
  background-color: red;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    background-color: white;
    color: red;
  }

`
const AboutProductParent = styled.div`
  padding: 5px;
  widt: 100%;
  margin: 0vh 0% 2vh 0%;
  padding: 0vh 5% 0vh 5%;
  display: grid;
  grid-template-columns: repeat(1 , 1fr)
`
const AboutProductHeader = styled.div`
  direction: rtl;
  font-size: 30px;
  margin: 0px 0px 1vh 0px;
`
const AboutProductText = styled.div`
  direction: rtl;
  font-size: 22px;
  line-height: 1.35;
`
const AboutProductExpandParent = styled.div`
  width:  100%;
  display: flex;
  justify-content: end;
`

const AboutProductExpandButton = styled.div`
  color: #19BFD3;
  cursor: pointer;
  font-size: 20px;
  direction: rtl;
  `
//special items component here:

const SContainer = styled.div`
  margin: 50px 0px 100px 0px;
  height: 48vh;
  width: 100%;
`
const SWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 97%;
  background-color: white;
  border: 6px solid rgb(211, 211, 211);
  margin: 0px 1% 0px 1%;
  border-radius: 30px;
`
const ProductHolder = styled.div`
  display: flex;
  gap: 1.15%;
  margin: 0px 1.5% 0px 1.5%;
  width: 100%;
`
const ArrowHolder = styled.div`
  height: 250px;
  width: 78px;
  display: grid;
  display: flex;
  justify-content: center;
  align-items: center;
`
const ArrowHolderChild = styled.div`
  width: 78px;
  display: grid;
  grid-template-columns: repeat( 1, 1fr);
`


const Product = () => {

  let id = localStorage.getItem('id')
  if( id >= 1 && id <= 20 ){ id = id - 0 };
  if( id >= 21 && id <= 40 ){ id = id - 20 };
  if( id >= 41 && id <= 60 ){ id = id - 40 };
  if( id >= 61 && id <= 80 ){ id = id - 60 };
  if( id >= 81 && id <= 100 ){ id = id - 80 };
  if( id >= 101  ){ id = id - 80 };
  const indexJson = localStorage.getItem('id') - 1;
  const pField = allItems[ indexJson ].field;
  let pBrand = allItems[ indexJson ].brand;
  const indexTable = id - 1;

  const [data, setData] = useState([]);
  
    useEffect(() => {
      axios.get("http://localhost:5001/" + pField)
        .then(res => setData(res.data))
        .catch(err => console.error(err));
    }, []);

  const pImg = "../../images/" + localStorage.getItem('id') + ".webp";
  const pFieldd = data[ indexTable ]?.field;
  const pBrandd = data[ indexTable ]?.brand;
  const pName = data[ indexTable ]?.name ;
  const pPrice = data[ indexTable ]?.pricestring
  const pText = data[ indexTable ]?.description;
  const pRam = data[ indexTable ]?.ram
  const pRamType = data[ indexTable ]?.ramtype
  const pRom = data[ indexTable ]?.rom
  const pRomType = data[ indexTable ]?.romtype
  const pMainCamRez = data[ indexTable ]?.maincamrez
  const pSelfiCamRez = data[ indexTable ]?.selficamrez
  const pTarakomPixeli = data[ indexTable ]?.tarakompixeli
  const pGpu = data[ indexTable ]?.gpu
  const pRez = data[ indexTable ]?.rez
  const pUsage = data[ indexTable ]?.usage
  const pCpu = data[ indexTable ]?.cpu
  const pDrive = data[ indexTable ]?.drive;
  const pFrameRate = data[ indexTable ]?.framerate;
  const pControlersWith = data[ indexTable ]?.controlerswith;
  const pType = data[ indexTable ]?.type;
  const pRange = data[ indexTable ]?.range;
  const pBatteryLife = data[ indexTable ]?.batterylife;
  const pWeight = data[ indexTable ]?.weight;
  const pConnection = data[ indexTable ]?.connection;
  const pResistance = data[ indexTable ]?.resistance;
  const pScreenSize = data[ indexTable ]?.screensize;
  
  let pBrandString = "نامشخص";

  const brands = {
    shi: "شیائومی", sam: "سامسونگ", iph: "اپل", 
    mac: "اپل", len: "لنوو", asu: "ایسوس", hp: "اچ پی", 
    sony: "سونی", nin: "نینتندو", xbox: "ایکس باکس",
    ank: "انکر", raz: "ریزر", jbl: "جی بی ال", 
   };

   pBrandString = brands[pBrand] || "نامشخص";

  const [expanded, setExpanded] = useState(false);
   const shortText = data[ indexTable ]?.description.slice(0, 100) + "...";
  
   const [ reRenderNum, setReRenderNum ] = useState(0);

  console.log(pFieldd+ "///" + pBrandd);

  return (
    <Container>
      <Navbar />
      <Wrapper>
        <ImgContainer>
          <Image src={pImg} /> 
        </ImgContainer>
        <InfoContainer>
          <Title>{pName}</Title>
          <h1 style={{textAlign:"end", width:"100%", marginTop:"5vh"}} >ویژگی ها</h1>
            { pField == "phone" &&  
            <Desc>
            <DescBox>
              <DescBoxHeader>
                برند
              </DescBoxHeader>
              <DescBoxFooter>
                {pBrandString}
              </DescBoxFooter>
            </DescBox>
            <DescBox>
              <DescBoxHeader>
              مقدار RAM
              </DescBoxHeader>
              <DescBoxFooter>
              {pRam} گیگابایت
              </DescBoxFooter>
            </DescBox>
            <DescBox>
              <DescBoxHeader>
              حافظه داخلی
              </DescBoxHeader>
              <DescBoxFooter>
              {pRom} گیگابایت
              </DescBoxFooter>
            </DescBox>
            <DescBox>
              <DescBoxHeader>
              رزولوشن دوربین اصلی
              </DescBoxHeader>
              <DescBoxFooter>
              {pMainCamRez} مگاپیکسل
              </DescBoxFooter>
            </DescBox>
            <DescBox>
              <DescBoxHeader>
              رزولوشن دوربین سلفی
              </DescBoxHeader>
              <DescBoxFooter>
              {pSelfiCamRez} مگاپیکسل
              </DescBoxFooter>
            </DescBox>
            <DescBox>
              <DescBoxHeader>
              تراکم پیکسلی
              </DescBoxHeader>
              <DescBoxFooter>
              {pTarakomPixeli} پیکسل بر اینچ
              </DescBoxFooter>
            </DescBox>
          </Desc>
            }
            { pField == "laptop" && 
            <Desc>
              <DescBox>
                <DescBoxHeader>
                  برند
                </DescBoxHeader>
                <DescBoxFooter>
                  {pBrandString}
                </DescBoxFooter>
              </DescBox>
              <DescBox>
                <DescBoxHeader>
                ظرفیت حافظه رم (RAM)
                </DescBoxHeader>
                <DescBoxFooter>
                  {pRam} گیگابایت
                </DescBoxFooter>
              </DescBox>
              <DescBox>
                <DescBoxHeader>
                نوع حافظه رم (RAM)
                </DescBoxHeader>
                <DescBoxFooter>
                  {pRamType}
                </DescBoxFooter>
              </DescBox>
              <DescBox>
                <DescBoxHeader>
                ظرفیت حافظه داخلی
                </DescBoxHeader>
                <DescBoxFooter>
                  {pRom} گیگابایت
                </DescBoxFooter>
              </DescBox>
              <DescBox>
                <DescBoxHeader>
                نوع حافظه داخلی
                </DescBoxHeader>
                <DescBoxFooter>
                  {pRomType}
                </DescBoxFooter>
              </DescBox>
              <DescBox>
                <DescBoxHeader>
                دقت صفحه نمایش
                </DescBoxHeader>
                <DescBoxFooter>
                  {pRez}
                </DescBoxFooter>
              </DescBox>
              <DescBox>
                <DescBoxHeader>
                پردازنده مرکزی (CPU)
                </DescBoxHeader>
                <DescBoxFooter>
                  {pCpu}
                </DescBoxFooter>
              </DescBox>
              <DescBox>
                <DescBoxHeader>
                پردازنده گرافیکی (GPU)
                </DescBoxHeader>
                <DescBoxFooter>
                  {pGpu}
                </DescBoxFooter>
              </DescBox>
              <DescBox>
                <DescBoxHeader>
                  کاربری
                </DescBoxHeader>
                <DescBoxFooter>
                  {pUsage}
                </DescBoxFooter>
              </DescBox>
            </Desc>
            }
            { pField == "console" &&
            
            <Desc>
              <DescBox>
                <DescBoxHeader>
                  برند
                </DescBoxHeader>
                <DescBoxFooter>
                  {pBrandString}
                </DescBoxFooter>
              </DescBox>
              <DescBox>
                <DescBoxHeader>
                نوع درایو کنسول
                </DescBoxHeader>
                <DescBoxFooter>
                  {pDrive}
                </DescBoxFooter>
              </DescBox>
              <DescBox>
                <DescBoxHeader>
                وضوح تصویر خروجی
                </DescBoxHeader>
                <DescBoxFooter>
                  {pRez}
                </DescBoxFooter>
              </DescBox>
              <DescBox>
                <DescBoxHeader>
                مشخصات حافظه رم (RAM)
                </DescBoxHeader>
                <DescBoxFooter>
                  {pRam} گیگابایت
                </DescBoxFooter>
              </DescBox>
              <DescBox>
                <DescBoxHeader>
                نوع حافظه رم (RAM)
                </DescBoxHeader>
                <DescBoxFooter>
                  {pRamType}
                </DescBoxFooter>
              </DescBox>
              <DescBox>
                <DescBoxHeader>
                ظرفیت حافظه داخلی
                </DescBoxHeader>
                <DescBoxFooter>
                  {pRom} گیگابایت
                </DescBoxFooter>
              </DescBox>
              <DescBox>
                <DescBoxHeader>
                نوع حافظه داخلی
                </DescBoxHeader>
                <DescBoxFooter>
                  {pRomType}
                </DescBoxFooter>
              </DescBox>
              <DescBox>
                <DescBoxHeader>
                حداکثر نرخ به‌روزرسانی
                </DescBoxHeader>
                <DescBoxFooter>
                  {pFrameRate}
                </DescBoxFooter>
              </DescBox>
              <DescBox>
                <DescBoxHeader>
                تعداد کنترلر همراه
                </DescBoxHeader>
                <DescBoxFooter>
                  {pControlersWith}
                </DescBoxFooter>
              </DescBox>
            </Desc>
            }
            { pField == "headphone" && 
            <Desc> 
            <DescBox>
                <DescBoxHeader>
                  برند
                </DescBoxHeader>
                <DescBoxFooter>
                  {pBrandString}
                </DescBoxFooter>
              </DescBox>
              <DescBox>
                <DescBoxHeader>
                نوع گوشی
                </DescBoxHeader>
                <DescBoxFooter>
                  {pType}
                </DescBoxFooter>
              </DescBox>
              <DescBox>
                <DescBoxHeader>
                محدوده عملکرد
                </DescBoxHeader>
                <DescBoxFooter>
                  {pRange}
                </DescBoxFooter>
              </DescBox>
              <DescBox>
                <DescBoxHeader>
                عمر باتری
                </DescBoxHeader>
                <DescBoxFooter>
                  {pBatteryLife}
                </DescBoxFooter>
              </DescBox>
              <DescBox>
                <DescBoxHeader>
                وزن
                </DescBoxHeader>
                <DescBoxFooter>
                  {pWeight}
                </DescBoxFooter>
              </DescBox>
              <DescBox>
                <DescBoxHeader>
                نوع اتصال
                </DescBoxHeader>
                <DescBoxFooter>
                  {pConnection}
                </DescBoxFooter>
              </DescBox>
              <DescBox>
                <DescBoxHeader>
                سایر توضیحات
                </DescBoxHeader>
                <DescBoxFooter>
                  {pResistance}
                </DescBoxFooter>
              </DescBox>
            </Desc>
            }
            { pField == "tablet" &&
            <Desc>
              <DescBox>
                <DescBoxHeader>
                  برند
                </DescBoxHeader>
                <DescBoxFooter>
                  {pBrandString}
                </DescBoxFooter>
              </DescBox>
              <DescBox>
                <DescBoxHeader>
                اندازه صفحه نمایش
                </DescBoxHeader>
                <DescBoxFooter>
                  {pScreenSize}
                </DescBoxFooter>
              </DescBox>
              <DescBox>
                <DescBoxHeader>
                  وزن
                </DescBoxHeader>
                <DescBoxFooter>
                  {pWeight}
                </DescBoxFooter>
              </DescBox>
              <DescBox>
                <DescBoxHeader>
                مقدار رم
                </DescBoxHeader>
                <DescBoxFooter>
                  {pRam} گیگابایت
                </DescBoxFooter>
              </DescBox>
              <DescBox>
                <DescBoxHeader>
                حافظه داخلی 
                </DescBoxHeader>
                <DescBoxFooter>
                  {pRom} گیگابایت
                </DescBoxFooter>
              </DescBox>
              <DescBox>
                <DescBoxHeader>
                رزولوشن دوربین اصلی
                </DescBoxHeader>
                <DescBoxFooter>
                  {pMainCamRez} مگاپیکسل
                </DescBoxFooter>
              </DescBox>
              <DescBox>
                <DescBoxHeader>
                رزولوشن دوربین سلفی
                </DescBoxHeader>
                <DescBoxFooter>
                  {pSelfiCamRez} مگاپیکسل
                </DescBoxFooter>
              </DescBox>
              <DescBox>
                <DescBoxHeader>
                تراکم پیکسلی
                </DescBoxHeader>
                <DescBoxFooter>
                  {pTarakomPixeli} پیکسل بر اینچ
                </DescBoxFooter>
              </DescBox>
            </Desc>
            }
            <PriceDiv>
              <PriceDivPrice>
              <img src={TomanIcon} alt="Toman" style={{ width:"30px", height:"30px" }} />
                {pPrice}
              </PriceDivPrice>
              <PriceDivButton>
                افزودن به سبد خرید
              </PriceDivButton>
            </PriceDiv> 
        </InfoContainer>
      </Wrapper>
      <AboutProductParent>
        <AboutProductHeader>معرفی</AboutProductHeader>
        <AboutProductText>
          {expanded ? pText : shortText}
         
        </AboutProductText>
        <AboutProductExpandParent>
        {(
            <AboutProductExpandButton
              onClick={()=>{ setExpanded(!expanded) }}
            >
              {expanded ? "   بستن" : "   بیشتر" }
            </AboutProductExpandButton>
          )}
        </AboutProductExpandParent>
      </AboutProductParent>
      <SContainer>
      <AboutProductHeader style={{ marginRight:"5%" }} >محصولات مشابه</AboutProductHeader>
        <SWrapper>
         <ProductHolder onClick={ () => { setReRenderNum( reRenderNum => reRenderNum + 1 ) } } >
            {data.filter( item => ( item.field == pField && item.id !== id ) ).slice(0,6).map((item) => ( 
              <SProduct onClick={ () => {  localStorage.setItem( 'id' , item.id ) } } item={item} key={item.id} />
            ))} 
          </ProductHolder>
        </SWrapper>
      </SContainer>
      <Footer />
    </Container>
  );
};

export default Product;
///////////////////////////////////////////////////////////////////////////////////////////////////
"UPDATE " + pField + " SET " + key + " = " + editedData + " WHERE id = " + id + ";"





"UPDATE table_name SET column_name = 'new_value' WHERE id = 10;"



<Wrapper2>
        <NavbarSection2>
          <p>"navbar"</p>
        </NavbarSection2>
      </Wrapper2>

////////////////////////////////// axios in nzvbzr register
`INSERT INTO accounts (user_name, user_password) VALUES (${userName}, ${userPassword});`




return res.status(500).send("SQL Error");




replace(/\s+/g, '')


{ !passwordIsBig &&
            <div style={{alignSelf:"center", position:"absolute", paddingTop:"8px", paddingLeft:"0.5%", color:"red", display:"flex"}} >
            <DangerousIcon style={{alignSelf:"center", paddingTop:"8px", paddingLeft:"0.5%", color:"red"}} />
            <p style={{alignSelf:"center",  paddingTop:"8px", paddingLeft:"2.5%", color:"red", width:"200px"}} >رمز عبور باید حداقل چهار کاراکتر باشد</p>
            </div>
            }

////////////////////////////// whole navbar component

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
import axios from "axios";

const Container = styled.div` 
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  border: 1px solid black;
  background-color: white;
  height: 70px;
  margin:0px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  border: 1px solid black;
  background-color: white;
  z-index: 10;
  height: 50px;
  width: 100%;
  position: fixed;
  top: 0;;
  padding: 10px 20px;
  display: flex;
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
  margin-left: 20%;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
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
  margin-right:50px;
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
  margin-left: 5%;
  margin-top: 72px;
  background-color: red;
  padding: 5px;
  z-index: 1;
  position: fixed;
  display: grid;
  grid-template-column: 1fr;
`
const SearchResultBox = styled.div`
  height: 10vh;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 4fr;
  background-color: gray;
  margin: 2px 0px 2px 0px;
`
const SearchResultIMG = styled.img`
  background-color: black;
  height: 65px;
  width: 65px;
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
  z-index: 12;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper3 = styled.div`
  background-color: lightblue;
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
  background-color: teal;
  color: white;
  cursor: pointer;
  height: 7vh;
  justify-self: end;
  margin-right: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
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
  cursor: pointer;
`;

const Navbar = () => {
  const allData = (JSON.parse(localStorage.getItem("allData") || "[]")) ;
  const [searchInput, setSearchInput] = useState("");
  const [searchResult, setSearchResult] = useState("");
  const [showSearchResultBox, setShowSearchResultBox] = useState(false);
  const [accountsDataExists, setAccountsDataExists] = useState(false);

  function doSearch(x){
    setSearchResult( allData.filter( item => item.name.toLowerCase().includes(x.toLowerCase())));
    console.log(searchResult);
  };
  
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
    console.log(accountsUserNames); 
    setAccountsDataExists(true);
  }

  return (
    <Container>
      <Wrapper>
        <Left>
          <SearchContainer>
            <Input onKeyDown={(e)=>{ e.key === "Enter" && doSearch(e.target.value); setShowSearchResultBox(true) }} onChange={ (e) => { setSearchInput(e.target.value); doSearch(e.target.value); setShowSearchResultBox(false)  }} style={{ fontSize: "18px", }} placeholder="هنوز کار نمیکنه" />
            
            <button onClick={ () =>{ doSearch(); setShowSearchResultBox(true) }} ><Search style={{ color: "gray", fontSize: 16 }} /></button>
            <button onClick={ () => { setShowSearchResultBox(false) } } style={{fontSize:"14px"}}>x</button>
          </SearchContainer>
        </Left>
        <Center>
          <Logo>اسم فروشگاه</Logo>
        </Center> 
        <Right>
        <MenuItem onClick={()=> setRegisterIsOpen(true)} ><AccountCircleIcon style={{fontSize:"35px"}} /></MenuItem>
          <MenuItem>
            <NavLink style={{textDecoration: "none",color: "inherit" }} to="/Cart" >
            <ShoppingCartIcon style={{ fontSize:"35px", color:"black" }} badgeContent={4} color="primary">
            </ShoppingCartIcon>   
            </NavLink>
          </MenuItem>
        </Right>
      </Wrapper>
      { showSearchResultBox && searchInput !== "" && 
      <SearchResultContainer>
      { searchResult.length > 0 ?  searchResult.slice(0,6).map((item) => (
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
        <p>هیچ محصولی یافت نشد</p>      
      }{
        searchResult.length > 0 && 
        <NavLink onClick={()=>{ localStorage.setItem("specialFilter","search");localStorage.setItem("searchArray", JSON.stringify(searchResult)) }} style={{ all: "unset", cursor: "pointer" }}  to="/Results" >
          <button>مشاهده همه {searchResult.length} محصول</button>
        </NavLink>
      }
      </SearchResultContainer>
      }
      { registerIsOpen &&
      <Container2 >
        <Wrapper3>
          <div style={{display:"grid", width:"100%", gridTemplateColumns:"1fr 1fr"}} >
            <HighlightOffIcon onClick={()=>{ setLoginIsOpen(false); setRegisterIsOpen(false) }} style={{fontSize:"35px", justifySelf:"start", cursor:"pointer"}} />
            <Title>ایجاد حساب کاربری</Title>
          </div>
          <Form>
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
            <Button onClick={()=>{ if(userPassword === userPasswordConfirm && userPassword.length >= 4 && userName.length >= 1 && userPassword.length >= 1 ){axios.post("http://localhost:5001/update-item", { sql: `INSERT INTO accounts (user_name, user_password) VALUES ('${userName}', '${userPassword}');`})  ; setPasswordsAreEqual(true); setPasswordIsBig(true)}else{setPasswordsAreEqual(false); setPasswordIsBig(false)} ;console.log("done")}} >تایید</Button>
            
            <SwitchButton onClick={()=>{ setRegisterIsOpen(false); setLoginIsOpen(true) }}  >قبلا حساب کاربری ساخته اید؟  ورود</SwitchButton>
            
          </Form>
        </Wrapper3>
      </Container2>
      }
      { loginIsOpen &&
      <Container2>
        <Wrapper3>
        <div style={{display:"grid", width:"100%", gridTemplateColumns:"1fr 1fr"}} >
           <HighlightOffIcon onClick={()=>{ setLoginIsOpen(false); setRegisterIsOpen(false) }} style={{fontSize:"35px", justifySelf:"start", cursor:"pointer"}} />
           <Title>ورود</Title>
         </div>
          <Form>
            <Input2 placeholder="نام کاربری" />
            <Input2 placeholder="رمز ورود" />
            <Link>رمز عبور خود را فراموش کرده اید؟ بازیابی رمز عبور</Link>
            <Button>تایید</Button>
            <SwitchButton onClick={()=>{ setLoginIsOpen(false); setRegisterIsOpen(true) }} >حساب کاربری ندارید؟ ایجاد حساب کاربری</SwitchButton>
          </Form>
        </Wrapper3>
      </Container2>
      }
    </Container>
  );
};

export  default Navbar;
// <NavLink style={{textDecoration: "none",color: "inherit" }} to="/" ><MenuItem></MenuItem></NavLink>
//////taiid button
<Button onClick={()=>{ if(userPassword === userPasswordConfirm && userPassword.length >= 4 && userName.length >= 1 && userPassword.length >= 1 ){axios.post("http://localhost:5001/update-item", { sql: `INSERT INTO accounts (user_name, user_password) VALUES ('${userName}', '${userPassword}');`})  ; setPasswordsAreEqual(true); setPasswordIsBig(true)}else{setPasswordsAreEqual(false); setPasswordIsBig(false)} ;console.log("done")}} >تایید</Button>


if( localStorage.getItem("userIsLogedIn") === "true" || "false" ){
    if( localStorage.getItem("userIsLogedIn") === "true" ){ setRegisterSuccessfulIsOpen(true) ; console.log("user is logged in") }
    if( localStorage.getItem("userIsLogedIn") === "false" ){ setRegisterSuccessfulIsOpen(false) ; console.log("user is NOT logged in") }
  }else{
    console.log("cant get loing status from ls !!!!!!!!!!!!!!!!")
  }


///////account profile
<button onClick={()=>{ localStorage.setItem("userIsLogedIn", JSON.stringify(false)); setLoggedInStatus(false); setProfileIsOpen(false);  }} >خروج از حساب کاربری</button>
          <button onClick={()=>{ setProfileIsOpen(false) }} >X</button>


















