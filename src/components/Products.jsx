import styled from "styled-components";
import { allItems, popularProducts } from "../data"; 
import Product from "./Product";
import axios from "axios";
import {useEffect, useState } from "react";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Products = () => {

  const [data, setData] = useState([]);
  
    useEffect(() => {
      axios.get("http://localhost:5001/phone")
        .then(res => setData(res.data))
        .catch(err => console.error(err));
    }, []);

  return (
    <Container >
      {data.map((item) => (
        <Product item={item} key={item.id}  />
      ))}
    </Container>
  );
};

export default Products;
