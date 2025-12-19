import { Add, Remove } from "@mui/icons-material";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";
import { useSelector } from "react-redux";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useState } from "react";
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const ComponentContainer = styled.div``;

const Container = styled.div`
  padding: 4vh 1.5% 4vh 1.5%;
  display: grid;
  grid-template-columns: 2fr 1fr;
  width: 97%;
  gap: 1.5%;
  margin-bottom: 60vh;
`;
const ContainerLeft = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1vh;
`;
const ProductContainer = styled.div`
  display: grid;
  background-color: rgb(190,190,190);
  height: 20vh;
  width: 97%;
  padding: 1vh 0.75% 1vh 0.75%;
  grid-template-columns: 2.75fr 7.5fr 7.5fr;
  border-radius: 25px;
`;
const ProductContainerImg = styled.img`
  background-color: black;
  height: 20vh;
  aspect-ratio: 1 / 1;
  border-radius: 20px;
`;
const ProductContainerDetails = styled.div`
  display: grid;
  background-color: rgb(190,190,190);
  height: 20vh;
  width: 100%;
  grid-template-rows: 1fr 1fr;
`;
const ProductData = styled.div`
  background-color: white;
  height: 8vh;
  width: 94%;
  margin: 1vh 3% 1vh 3%;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: end;
`;
const ContainerRight = styled.div`
  display: grid;
  grid-template-rows: 3fr 3fr 4fr;
  background-color: white;
  border: 5px solid rgb(190,190,190);
  minimum-height: 80vh;
  position: fixed;
  z-index: 20;
  height: 30vh;
  width: 30%;
  justify-self: end;
  padding: 1vh 0.5% 1vh 0.5%;
  border-radius: 25px;
`;
const ProductDataTopRight = styled.div`
  background-color: white;
  height: 8vh;
  width: 50%;
  border-radius: 20px;
  padding: 0vh 25% 0vh 25%;
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
`;
const ContainerRightTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
`;
const ContainerRightMiddle = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
`;
const ContainerRightBottom = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Purchesbutton = styled.div`
  height: 9vh;
  width: 60%;
  background-color: #ef4056;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Cart = () => {
  const productImg =useSelector( (state) => state.productGlobalData.value )
  const [userIsLogedIn, setUserIsLogedIn] = useState(JSON.parse(localStorage.getItem("userIsLogedIn")) || false)
  const [countNumber, setCountNumber] = useState(1);

  let userCartProducts = [];
  if( userIsLogedIn === true ){userCartProducts = JSON.parse(localStorage.getItem("profileData")).user_cart};
  
  const allData = JSON.parse(localStorage.getItem("allData"));
  
  let totalPrice = 0;
  function countTotalPrice(){
    userCartProducts.forEach((id)=>{
      allData.forEach((product)=>{
        if( product.id == id ){
          totalPrice = totalPrice + product.price
        }
      })
    })
  }
  countTotalPrice();

  return (
    <ComponentContainer>
      <Navbar />
      { userIsLogedIn ?
        userCartProducts && userCartProducts.length !== 0 ?
          <Container>
            <ContainerLeft>
              { userCartProducts.map((num)=>(
                <ProductContainer>
                  <ProductContainerImg src={"./images/"+ num +".webp"} />
                  <ProductContainerDetails>
                    <ProductData>
                      <p style={{padding:"0vh 5% 0vh 5%", fontSize:"20px", direction:"rtl"}} >
                        {allData[num-1].name}
                      </p>
                    </ProductData>
                    <ProductData>
                      <p style={{padding:"0vh 5% 0vh 5%", fontSize:"20px", direction:"rtl"}} >
                        قیمت : {allData[num-1].price} تومان
                      </p>
                    </ProductData>
                  </ProductContainerDetails>
                  <ProductContainerDetails>
                    <ProductData style={{display:"grid", gridTemplateColumns:"8fr 1fr", borderRadius:"0px", backgroundColor:"rgb(190,190,190)"}} >
                      <ProductDataTopRight>
                        <RemoveCircleOutlineIcon style={{fontSize:"30px"}} 
                        onClick={()=>{
                          if(countNumber >= 2){setCountNumber(countNumber-1)}
                        }}/>
                        <p style={{fontSize:"30px"}} >{countNumber}</p>
                        <AddCircleOutlineIcon style={{fontSize:"30px"}} 
                          onClick={()=>{
                            if(countNumber <= 9){setCountNumber(countNumber+1)}
                          }}/>
                      </ProductDataTopRight>
                      <DeleteForeverIcon style={{backgroundColor:"white", padding:"0.75vh 15% 0.75vh 15%", borderRadius:"200px", justifySelf:"center", marginLeft:"30%"}} ></DeleteForeverIcon>
                    </ProductData>
                    <ProductData>
                      <p style={{padding:"0vh 5% 0vh 5%", fontSize:"20px", direction:"rtl"}} >
                        قیمت کل : {allData[num-1].price} تومان
                      </p>
                    </ProductData>
                  </ProductContainerDetails>
                </ProductContainer>
              ))}
            </ContainerLeft>
            <ContainerRight>
              <ContainerRightTop>
                <p style={{margin:"0.5vh 5% 0vh 5%", fontSize:"30px", direction:"rtl"}} >
                  جمع کل سبد خرید :
                </p>
              </ContainerRightTop>
              <ContainerRightMiddle>
                <p style={{margin:"0.5vh 5% 0vh 5%", fontSize:"30px", direction:"rtl"}} >
                  {totalPrice} تومان 
                </p>
              </ContainerRightMiddle>
              <ContainerRightBottom>
                <Purchesbutton>
                  <p style={{margin:"0vh 5% 0vh 5%", fontSize:"30px", direction:"rtl", color:"white"}} >
                    تایید و تکمیل سفارش
                  </p>
                </Purchesbutton>
              </ContainerRightBottom>
            </ContainerRight>
          </Container>
          :
          <img style={{height:"35vh", margin:"20vh 22% 30vh 22%"}} src="./images/cartemptysmall.jpg" />
        
      :
      <img style={{height:"90vh", margin:"0vh 0% 10vh 19%"}} src="./images/cartregisterfirst.jpg" />
      }
      <Footer />
    </ComponentContainer>
  );
};

export default Cart;
