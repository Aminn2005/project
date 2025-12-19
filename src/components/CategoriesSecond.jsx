import styled from "styled-components";
import { categories } from "../data";
import { mobile } from "../responsive";
import CategoryItem from "./CategoryItem";
import { allItems } from "../data";
import Product from "./Product";
import { NavLink } from "react-router-dom";

const Container = styled.div`
  height: 68vh;
  width: 100%;
  margin: 50px 0% 50px 0%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

const Wrapper = styled.div`
  height: 68vh;
  width: 97%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`
const WrapperChildHolder = styled.div`
  height: 68vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid gray;
`

const WrapperChild = styled.div`
  height: 63vh;
  width: 85%;
  display: grid;
`

const WrapperGrandChildTop = styled.div`
  height:10vh;
  width: 100%;
  diplay: grid;
  grid-template-columns: repeat(1, 1fr);
  justify-content: end;
`
const P2 = styled.p`
  font-size: 30px;
  direction: rtl;
`

const P3 = styled.p`
  font-size: 17px;
  color: gray;
  direction: rtl;
  margin-top: 6px;
`

const WrapperGrandChildMiddle = styled.div`
  height: 280px;
  width: 100%;
  background-color: white;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`
const Img = styled.img`
  height: 120px;
  width: 120px;
  padding: 10px;
`

const WrapperGrandChildBottom = styled.div`
  height: 5vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
const P1 = styled.p`
  font-size: 20px;
  color: white;
  background-color: gray;
  padding: 3px 12px 3px 12px;
  border-radius: 20px;
`

const CategoriesSecond = () => {
  return(
    <Container>
      <Wrapper>
        <WrapperChildHolder style={{ borderTopLeftRadius:"30px", borderBottomLeftRadius:"30px" }} >
          <WrapperChild>
            <WrapperGrandChildTop>
              <P2>لپ تاپ لنوو</P2>
              <P3>پیشنهاد دیجی استور</P3>
            </WrapperGrandChildTop>
            <WrapperGrandChildMiddle>
            {allItems.map((item) => ( 
                [21, 23, 28, 34].includes(item.id) ? 
                <NavLink to="/Product" ><Img onClick={ () => { function saveIdToLocalStorage(){localStorage.setItem( 'id' , item.img )}saveIdToLocalStorage() } } src={ "/images/" + item.img + ".webp" } ></Img></NavLink>
              : null
              ))} 
            </WrapperGrandChildMiddle>
            <WrapperGrandChildBottom>
              <NavLink style={{textDecoration: "none", color: "black"}}
                to="/Results"
                onClick={ () => {
                  localStorage.setItem( "field", "laptop" )
                  localStorage.setItem( "brand", "len" )
                }}>
              <P1>مشاهده همه محصولات</P1></NavLink>
            </WrapperGrandChildBottom>
          </WrapperChild>
        </WrapperChildHolder>
        <WrapperChildHolder>
        <WrapperChild>
            <WrapperGrandChildTop>
              <P2>مک</P2>
              <P3>پیشنهاد دیجی استور</P3>
            </WrapperGrandChildTop>
            <WrapperGrandChildMiddle>
              {allItems.map((item) => ( 
                [35, 36, 37 ].includes(item.id) ? 
                <NavLink to="/Product" ><Img onClick={ () => { function saveIdToLocalStorage(){localStorage.setItem( 'id' , item.img )}saveIdToLocalStorage() } } src={ "/images/" + item.img + ".webp" } ></Img></NavLink>
              : null
              ))} 
            </WrapperGrandChildMiddle>
            <WrapperGrandChildBottom>
            <NavLink style={{textDecoration: "none",color: "inherit" }}
                to="/Results"
                onClick={ () => {
                  localStorage.setItem( "field", "laptop" )
                  localStorage.setItem( "brand", "mac" )
                }}>
              <P1>مشاهده همه محصولات</P1></NavLink>
            </WrapperGrandChildBottom>
          </WrapperChild>
        </WrapperChildHolder>
        <WrapperChildHolder>
        <WrapperChild>
            <WrapperGrandChildTop>
              <P2>هدفون جی بی ال</P2>
              <P3>پیشنهاد دیجی استور</P3>
            </WrapperGrandChildTop>
            <WrapperGrandChildMiddle>
              {allItems.map((item) => ( 
                [67, 75, 76, 77].includes(item.id) ? 
                <NavLink to="/Product" ><Img onClick={ () => { function saveIdToLocalStorage(){localStorage.setItem( 'id' , item.img )}saveIdToLocalStorage() } } src={ "/images/" + item.img + ".webp" } ></Img></NavLink>
              : null
              ))} 
            </WrapperGrandChildMiddle>
            <WrapperGrandChildBottom>
            <NavLink style={{textDecoration: "none",color: "inherit" }}
                to="/Results"
                onClick={ () => {
                  localStorage.setItem( "field", "headphone" )
                  localStorage.setItem( "brand", "jbl" )
                }}>
              <P1>مشاهده همه محصولات</P1></NavLink>
            </WrapperGrandChildBottom>
          </WrapperChild>
        </WrapperChildHolder>
        <WrapperChildHolder  style={{ borderTopRightRadius:"30px", borderBottomRightRadius:"30px" }} >
        <WrapperChild>
            <WrapperGrandChildTop>
              <P2>ایرپاد انکر</P2>
              <P3>پیشنهاد دیجی استور</P3>
            </WrapperGrandChildTop>
            <WrapperGrandChildMiddle>
              {allItems.map((item) => ( 
                [62, 63, 73, 61].includes(item.id) ? 
                <NavLink to="/Product" ><Img onClick={ () => { function saveIdToLocalStorage(){localStorage.setItem( 'id' , item.img )}saveIdToLocalStorage() } } src={ "/images/" + item.img + ".webp" } ></Img></NavLink>
              : null
              ))} 
            </WrapperGrandChildMiddle>
            <WrapperGrandChildBottom>
            <NavLink style={{textDecoration: "none",color: "inherit" }}
                to="/Results"
                onClick={ () => {
                  localStorage.setItem( "field", "headphone" )
                  localStorage.setItem( "brand", "ank" )
                }}>
              <P1>مشاهده همه محصولات</P1></NavLink>
            </WrapperGrandChildBottom>
          </WrapperChild>
        </WrapperChildHolder>
      </Wrapper>
    </Container>
  )
}


export default CategoriesSecond;