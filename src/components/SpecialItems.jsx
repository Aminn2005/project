import styled from "styled-components";
import { allItems, categories } from "../data";
import { mobile } from "../responsive";
import CategoryItem from "./CategoryItem";
import { NavLink } from "react-router-dom";
import Product from "./Product"
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const Container = styled.div`
  margin: 50px 0px 50px 0px;
  height: 48vh;
  width: 100%;
`
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 98%;
  background-color: red;
  margin: 0px 1% 0px 1%;
  border-radius: 30px;
`
const ProductHolder = styled.div`
  display: flex;
  gap: 5px;
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

const SpecialItems = () => {

  const [data, setData] = useState([]);

  const allData = JSON.parse(localStorage.getItem("allData") || "[]")

  if(allData.length >= 100){
  return (
    
    <div>
      <Container>
        <Wrapper>
         <ProductHolder>
         <NavLink onClick={ () => { localStorage.setItem( 'specialFilter','2' ) } } style={{textDecoration: "none",color: "inherit" }} to="/Results" >
            <ArrowHolder>
              <ArrowHolderChild>
                <ArrowCircleLeftOutlinedIcon style={{ fontSize:"65px", marginTop:"10px", marginLeft:"2px", color:"white" }} />
                <p style={{ fontSize:"20px", color:"white" }} >مشاهده همه</p>
              </ArrowHolderChild>
            </ArrowHolder>
          </NavLink>
           {[7,12,89,84,73].map((item) => ( 
              <Product item={allData[item]} key={allData[item].id} />
           ))} 
           <img src="/images/1008.jpg" ></img>
          </ProductHolder>
        </Wrapper>
      </Container>
      <Container>
        <Wrapper style={{ backgroundColor:"white", border:"5px solid red", width:"97%" }} >
         <ProductHolder>
         <NavLink onClick={ () => { localStorage.setItem( 'specialFilter','3' ) } } style={{textDecoration: "none",color: "inherit" }} to="/Results" >
            <ArrowHolder>
              <ArrowHolderChild>
                <ArrowCircleLeftOutlinedIcon style={{ fontSize:"65px", marginTop:"10px", marginLeft:"2px", color:"red" }} />
                <p style={{ fontSize:"20px", color:"red" }} >مشاهده همه</p>
              </ArrowHolderChild>
            </ArrowHolder>
          </NavLink>
          {[9,11,33,74,79].map((item) => ( 
              <Product item={allData[item]} key={allData[item].id} />
           ))}  
           <img src="/images/1009.jpg" ></img> 
          </ProductHolder>
        </Wrapper>
      </Container>
      <Container>
        <Wrapper>
          <ProductHolder>
          <NavLink onClick={ () => { localStorage.setItem( 'specialFilter','4' ) } } style={{textDecoration: "none",color: "inherit" }} to="/Results" >
              <ArrowHolder>
                <ArrowHolderChild>
                  <ArrowCircleLeftOutlinedIcon style={{ fontSize:"65px", marginTop:"10px", marginLeft:"2px", color:"white" }} />
                  <p style={{ fontSize:"20px", color:"white" }} >مشاهده همه</p>
                </ArrowHolderChild>
              </ArrowHolder>
            </NavLink>
          {[71,62,52,53,102].map((item) => ( 
              <Product item={allData[item]} key={allData[item].id} />
           ))} 
           <img src="/images/1010.jpg" ></img>
          </ProductHolder>
        </Wrapper>
      </Container>
    </div>
    
  );}
};

export default SpecialItems;

