import styled from "styled-components";
import { mobile } from "../responsive";
import { NavLink } from "react-router-dom";

const Container = styled.div`
  flex: 1;
  margin: 0px 1% 0px 1%;
  padding: 0px 12px 0px 12px;
  height: 45vh;
  position: relative;
  
`;

const Image = styled.img`
  border-radius: 50px;
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: "30vh" })}

`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
    color:white;
    margin-bottom: 20px;
`;

const Button = styled.button`
    border-radius:50px;
    border:none;
    padding: 10px;
    background-color: white;
    cursor: pointer;
    font-weight: 600;
    font-size:20px;
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
    </Container>
  );
};

export default CategoryItem;
