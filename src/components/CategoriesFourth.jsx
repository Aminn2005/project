import styled from "styled-components";
import { useState, useEffect } from "react";
import {NavLink} from "react-router-dom"

const Container = styled.div`
  background-color: white;
  width: 100%;
  height: 100px;
  margin-bottom: 50px;
`;

const CategoriesFourth = () => {
  const images = ['images/1011.png', 'images/1012.png'];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Container onClick={() =>{ localStorage.setItem( 'specialFilter', "1" ); localStorage.setItem('field', "phone"); localStorage.setItem('brand', ""); localStorage.setItem('id', "") }} >
      <NavLink to={"/Results"} ><img  style={{ width:"100%" }} src={images[index]} alt="Switching" /></NavLink>
    </Container>
  );
};

export default CategoriesFourth;