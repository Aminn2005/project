import styled from "styled-components";
import { categories } from "../data";
import { mobile } from "../responsive";
import CategoryItem from "./CategoryItem";
import { NavLink } from "react-router-dom";

const Container = styled.div`
  background-color: ;
  display: flex;
  padding: 50px 0px 50px 0px;
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection:"column" })}

`;

const Categories = () => {
  return (
    <Container>
      
        {categories.map((item) => (
          <NavLink to="/Results" 
            key={item.id} 
            onClick={ () => {
              localStorage.setItem( "field", item.field)
              localStorage.setItem( "brand", "all")
              localStorage.setItem( 'specialFilter','' )
            }}>
          <CategoryItem 
           item={item}  />
          </NavLink>
        ))}
      
    </Container>
  );
};

export default Categories;
