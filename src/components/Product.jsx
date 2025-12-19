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
import { useState } from "react";


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

  const [cartArray, setCartArray] = useState([]);

  const [likesArray, setLikeArray] = useState([]);

  function PushToCart(productId){
    const prevProfileData = JSON.parse(localStorage.getItem("profileData")) || { user_cart: [] };
    prevProfileData.user_cart.push(productId);
    localStorage.setItem('profileData', JSON.stringify(prevProfileData));
    setCartArray(prevProfileData.user_cart);
  };

  function PushToLikes(productId){
    const prevProfileData = JSON.parse(localStorage.getItem("profileData")) || { user_likes: [] };
    prevProfileData.user_likes.push(productId);
    localStorage.setItem('profileData', JSON.stringify(prevProfileData));
    setLikeArray(prevProfileData.user_likes);
  };

  return (
    <Container onClick={ () => {  localStorage.setItem( 'id' , itemImg ); localStorage.setItem( 'specialFilter' , "" ) } } >
      <NavLink style={{textDecoration: "none",color: "inherit", displa:"" }} to="/Product" >
      <Image src={"../../images/" + itemImg + ".webp"} style={{ justifySelf:"center" }}/>
      <Info>
        <IconHolder>
        <Icon onClick={(e)=>{
          e.preventDefault();
          if(JSON.parse(localStorage.getItem("userIsLogedIn")) === true){
            e.preventDefault();
            if(cartArray.includes(item.id)){
              console.log("exists");
            }else{
              PushToCart(item.id);
            };
          }else{
            console.log("Register first");
          }
          }}> 
          <ShoppingCartOutlined />
        </Icon>
        <Icon onClick={(e)=>{
          e.preventDefault();
          if(JSON.parse(localStorage.getItem("userIsLogedIn")) === true){
            e.preventDefault();
            if(likesArray.includes(item.id)){
              console.log("exists");
            }else{
              PushToLikes(item.id);
            };
          }else{
            console.log("Register first");
          }
          }} >
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
