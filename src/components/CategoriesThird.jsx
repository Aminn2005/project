import styled from "styled-components";
import { categories } from "../data";
import { mobile } from "../responsive";
import CategoryItem from "./CategoryItem";
import { allItems } from "../data";
import Product from "./Product";
import axios from "axios";
import { useState, useEffect } from "react";

const Container = styled.div`
  height: 190vh;
  width: 100%;
  margin: 50px 0% 50px 0%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  height: 180vh;
  width: 97%;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  border: 1px solid gray;
  border-radius: 30px;
`
const TitleHolder = styled.div`
  height: 10vh;
  width: 100%;
  display: grid;
  justify-content: center;
  align-items: end;
`
const Title = styled.p`
  height: 8vh;
  font-size: 30px;
`

const ItemHolder = styled.div`
  height: 170vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
const ItemHolderChild = styled.div`
  height: 162vh;
  width: 97%;
  display: grid;
  grid-template-columns: repeat(6, 1fr)
`
const ItemHolderGrandChild = styled.div`
  height: 260px;
  width: 210px;
`

const CategoriesThird = () => {

    const [phones, setPhones] = useState([]);
  
    useEffect(() => {
      axios.get("http://localhost:5001/phone")
        .then(res => setPhones(res.data))
        .catch(err => console.error(err));
    }, []);

  return(
    <Container>
      <Wrapper>
        <TitleHolder>
          <Title>محصولات منتخب</Title>
        </TitleHolder><hr></hr>
        <ItemHolder>
          <ItemHolderChild>
            
              {phones.slice(0, 24).map((item) => (
                <ItemHolderGrandChild><Product  item={item} key={item.id} ></Product></ItemHolderGrandChild>    
              ))}
            
          </ItemHolderChild>
        </ItemHolder>
      </Wrapper>
    </Container>
  )
}


export default CategoriesThird;