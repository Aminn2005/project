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
const EditWindowContainer = styled.div`
  width: 70%;
  background-color: black;
  z-index: 200;
  position: fixed;
  margin: 0vh 15% 0vh 15%;
  display: grid;
  grid-template-columns: 1fr;
`
const EditWindowContainerUpper = styled.div`
  height: 5vh;
  width: 100%;
  background-color: #009408;
  display: flex;

`

const EditWindowContainerMiddle = styled.div`
  width: 100%;
  background-color: #009408;
  display: grid;
  grid-template-columns: 1fr ;
  gap: 2px;
  padding: 2px 0px 2px 0px;
`
const EditWindowBox = styled.div`
  height: 6vh;
  width: 99%;
  margin-left: 0.5%;
  background-color: #009408;
  display: grid;
  grid-template-columns: 40% 60% ;
  color: #009408;
`

const EditWindowBoxLeft = styled.div`
  background-color: black;
  margin-right: 2%;
  display: flex;
  justify-content: center;
  place-items: center;
  font-size: 20px;
`;

const EditWindowBoxRight = styled.div`
  background-color: black;
  display: flex;
  justify-content: center;
  place-items: center;
  font-size: 20px;
`;

const EditButton = styled.button`
  font-size: 25px;
  color:white;
  &:hover{
  color:black;
  };
`

let SQLCommand = "";

const Product = () => {

////////////////////////////////////////////////////////////////////////////////////
const [allDataExists, setAllDataExists] = useState(true); 

  const [phones, setPhones] = useState([]);
  const [laptops, setLaptops] = useState([]);
  const [consoles, setConsoles] = useState([]);
  const [headphones, setHeadphones] = useState([]);
  const [tablets, setTablets] = useState([]);

  useEffect(() => {
    let mounted = true;
    const fetchAll = async () => {
      try {
        const [
          phonesRes,
          laptopsRes,
          consolesRes,
          headphonesRes,
          tabletsRes
        ] = await Promise.all([
          axios.get("http://localhost:5001/phone"),
          axios.get("http://localhost:5001/laptop"),
          axios.get("http://localhost:5001/console"),
          axios.get("http://localhost:5001/headphone"),
          axios.get("http://localhost:5001/tablet")
        ]);

        if (!mounted) return;

        const phonesData = phonesRes.data || [];
        const laptopsData = laptopsRes.data || [];
        const consolesData = consolesRes.data || [];
        const headphonesData = headphonesRes.data || [];
        const tabletsData = tabletsRes.data || [];

        setPhones(phonesData);
        setLaptops(laptopsData);
        setConsoles(consolesData);
        setHeadphones(headphonesData);
        setTablets(tabletsData);

        if (!allDataExists) {
          const allData = [];
          allData.push(...phonesData.slice(0, 20));
          allData.push(...laptopsData);
          allData.push(...consolesData);
          allData.push(...headphonesData);
          allData.push(...tabletsData);
          allData.push(...phonesData.slice(20, 33));
          localStorage.setItem("allData", JSON.stringify(allData));
          setAllDataExists(true);
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchAll();
    return () => { mounted = false; };
  }, [allDataExists]);

  ////////////////////////////////////////////////////////////////////////////////////

  let id = localStorage.getItem('id')
  const indexJson = localStorage.getItem('id') - 1;
  const pField = allItems[ indexJson ].field;
  let pBrand = allItems[ indexJson ].brand;
  const indexTable = id - 1;
  
  const data = (JSON.parse(localStorage.getItem("allData")));

  const pImg = "../../images/" + data[ indexTable ]?.img + ".webp";
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

  const [editWindowIsOpen, setEditWindowIsOpen] = useState(false);
  
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

  return (
    <Container>
      { editWindowIsOpen === true &&( 
      <EditWindowContainer >
        <EditWindowContainerUpper>
          <button style={{ backgroundColor:"black", color:"#009408", fontSize:"25px" }} onClick={()=> setEditWindowIsOpen(false) } >CLOSE</button>
          
          <button style={{ backgroundColor:"black", color:"#009408", fontSize:"25px", marginLeft:"1%" }} onClick={()=> setAllDataExists(false) } >GET NEW DATA FROM DATA BASE takes 3 seconds</button>
          <button style={{ backgroundColor:"black", color:"red", fontSize:"25px", marginLeft:"1%" }} onClick={()=> localStorage.setItem("allData", "") } >CLEAR ALL DATA</button>
        </EditWindowContainerUpper>
        <EditWindowContainerMiddle>
          {data[indexJson] && Object.entries(data[indexJson]).filter(([key]) => key !== "description").map(([key, value])=>(
            <EditWindowBox key={key} className="row" >
              <EditWindowBoxLeft className="name" >
                {key}
              </EditWindowBoxLeft>
              <EditWindowBoxRight className="value" >
                <input type="text" placeholder={value} style={{ backgroundColor:"black", border:"none", color:"#009408", fontSize:"20px", width:"80%" }} 
                onChange={ (e) => {
                  
                  SQLCommand = "UPDATE " + pField + " SET " + key + " = '" + e.target.value + "' WHERE id = " + id + ";";
                  console.log(SQLCommand);
                }} >                         
                </input>
                <button style={{ backgroundColor:"black", color:"#009408", fontSize:"20px" }} onClick={()=>{ localStorage.setItem("SQLCommand", SQLCommand); axios.post("http://localhost:5001/update-item", { sql: SQLCommand } )  }} >save</button>
              </EditWindowBoxRight>
             </EditWindowBox>
          ))}
        </EditWindowContainerMiddle>
      </EditWindowContainer>
      )}
      <Navbar />
      <EditButton style={{ border:"none", backgroundColor:"white", cursor:"pointer",  }} onClick={ () => setEditWindowIsOpen(true) } >edit</EditButton>
      <Wrapper>
        <ImgContainer>
          { pImg && <Image src={pImg} /> }
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
              { TomanIcon && <img src={TomanIcon} alt="Toman" style={{ width:"30px", height:"30px" }} />}
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
            {data.filter( item => ( item.field.trim() == pField && item.id !== id ) ).slice(0,6).map((item) => ( 
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
