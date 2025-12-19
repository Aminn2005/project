import styled from "styled-components";
import { allItems } from "../data"; 
import Product from "../components/Product";
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { mobile } from "../responsive";

const ContainerParent = styled.div`
  
`;
const Container = styled.div`
  width: 98.3%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  margin: 50px 0px 200px 1.7%;
  row-gap: 30px;
`
const FilterContainerParent = styled.div`
  height: 80px;
  width: 99%;
  margin: 20px 0px 20px 0px;
  border: 2px solid black;
  border-radius: 20px
  justify-content: center;
`
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;

const Results = () => {

  const itemField = localStorage.getItem('field');
  const itemBrand = localStorage.getItem('brand');
  const specialFilter = localStorage.getItem('specialFilter');
  const allData = JSON.parse(localStorage.getItem("allData") || []);

  if(allData.length >= 112){
  return (
    <ContainerParent >
      <Navbar />
          {
            specialFilter == "" &&
              <Container>
                {allData.filter((item) => (
                  ( itemField == "all" || item.field.trim() == itemField ) &&
                  ( itemBrand == "all" || item.brand.trim() == itemBrand )
                )).map((item) => (
                  <Product item={item} key={item.id}  />
                ))}
              </Container>
          }
          {
            specialFilter == "1" &&
              <Container>
                {allData.filter((item) => (
                  ( item.price <= 20000000 ) &&
                  ( item.field.trim() == "phone" )
                )).map((item) => (
                  <Product item={item} key={item.id}  />
                ))}
              </Container>
          }
          {
            specialFilter == "2" &&
              <Container>
                {[7,12,89,84,73,69,57,46,85,66,54,71,69,58,32,12,35,74].map( item => (
                  <Product item={allData[item]} key={allData[item].id}  />
                 ) )
                  
                }
              </Container>
          }
          {
            specialFilter == "3" &&
              <Container>
                {[9,11,33,74,79,68,57,15,79,35,26,48,75,98,85,63,12,45].map( item => (
                  <Product item={allData[item]} key={allData[item].id}  />
                 ) )
                  
                }
              </Container>
          }
          {
            specialFilter == "4" &&
              <Container>
                {[71,62,52,53,102,36,98,99,62,54,88,32,65,45,14,91,38,17].map( item => (
                  <Product item={allData[item]} key={allData[item].id}  />
                 ) )
                  
                }
              </Container>
          }
          {
            specialFilter == "search" &&
              <Container>
                {JSON.parse(localStorage.getItem("searchArray",)).map((item) => (
                  <Product item={item} key={item.id}  />
                ))}
              </Container>
          }
          {
          JSON.parse(localStorage.getItem("userIsLogedIn")) === true ?
            specialFilter == "likes" && JSON.parse(localStorage.getItem("profileData",)).user_likes.length >= 1 ?
              <Container>
                {JSON.parse(localStorage.getItem("profileData",)).user_likes.map((num) => (
                  <Product item={allData[num-1]} key={allData[num-1].id}  />
                ))}
              </Container>
            :
            <img style={{height:"35vh", margin:"20vh 22% 30vh 22%"}} src="./images/likesemptysmall.jpg" />
            : 
            <img style={{height:"90vh", margin:"0vh 0% 10vh 19%"}} src="./images/likesregisterfirst.jpg" />
          }
      <Footer />
    </ContainerParent >
  )
  ;}else{
    return(
      <h1>"allData does not exist (go to home page wait 3 seconds and then select a page)"</h1>
    );
  };}



export default Results;