
















































product page: 
import { Add, Remove } from "@mui/icons-material";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { mobile } from "../responsive";
import { useSelector } from "react-redux";
import { allItems } from "../data"

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection:"column" })}
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ height: "40vh" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover{
      background-color: #f8f4f4;
  }
`;

const Product = () => {
  "let id = useSelector( (state) => state.imgGlobalSrc.value )"
  const id = localStorage.getItem('id')
  const pImg = "../../images/" + id + ".webp"
  const pName = allItems[ id - 1 ].name;
  const pPrice = allItems[ id - 1 ].priceString
  const pBrand = allItems[ id - 1 ].brand
  let pBrandString = "نامشخص"
  if( 20 >= id ){ pBrandString = allItems[ id - 1 ].brandString }
  if( 21 <= id <= 40  ){ if( pBrand == "mac") {  pBrandString = "اپل" } else{ if( pBrand == "len" ){ pBrandString = "لنوو" } else{ if( pBrand == "asu" ){ pBrandString = "ایسوز" } else{ if( pBrand == "hp" ){ pBrandString = "اچ پی"} } }}}
  const pRam = allItems[ id - 1 ].ram
  const pRamType = allItems[ id - 1 ].ramType
  const pRom = allItems[ id - 1 ].rom
  const pRomType = allItems[ id - 1 ].romType
  const pMainCamRez = allItems[ id - 1 ].mainCamRez
  const pSelfiCamRez = allItems[ id - 1 ].selfiCamRez
  const pTarakomPixeli = allItems[ id - 1 ].tarakomPixeli
  const pGpu = allItems[ id - 1 ].gpu
  const pRez = allItems[ id - 1 ].rez
  const pUsage = allItems[ id - 1 ].usage
  const pCpu = allItems[ id - 1 ].cpu

  return (
    <Container>
      <Navbar />
      <Wrapper>
        <ImgContainer>
          <Image src={pImg} /> 
        </ImgContainer>
        <InfoContainer>
          <Title>{pName}</Title>
            <Desc>{
             id <= 20 
              ?(
                <div>
                  <hr></hr>
                  <h1>برند: {pBrandString}</h1><hr></hr>
                  <h1>رم: {pRam}</h1><hr></hr>
                  <h1>ظرفیت:{pRom}</h1><hr></hr>
                  <h1>رزولوشن دوربین اصلی:{pMainCamRez}</h1><hr></hr>
                  <h1>رزولوشن دوربین سلفی:{pSelfiCamRez}</h1><hr></hr>
                  <h1>تراکم پیکسلی:{pTarakomPixeli}</h1><hr></hr>
                </div>
              ): 21 <= id <= 40 ?(
                <div>
                  <hr></hr>
                  <h1>برند: {pBrandString} </h1><hr></hr>
                  <h1>پردازنده: {pCpu}</h1><hr></hr>
                  <h1>رم: {pRam}</h1><hr></hr>
                  <h1>نوع رم: {pRamType}</h1><hr></hr>
                  <h1>ظرفیت: {pRom}</h1><hr></hr>
                  <h1>نوع ظرفیت: {pRomType}</h1><hr></hr>
                  <h1>پردازنده گرافیکی مجزا: {pGpu}</h1><hr></hr>
                  <h1>کیفیت صفحه نمایش: {pRez}</h1><hr></hr>
                  <h1>کاربری: {pUsage}</h1><hr></hr>
                </div>
              ):

            <h1>id not found </h1>
            }</Desc>
          <Price>{pPrice}</Price>
          <AddContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Product;