import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { sliderItems } from "../data";
import { mobile } from "../responsive";
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { NavLink } from "react-router-dom";

const Container = styled.div`
  background-color:white;
  margin-top:0px;
  width: 100%;
  height: 569px;
  display: flex;
  position: relative;
  overflow: hidden;
  ${mobile ({})}
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.75;
  z-index: 1;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 0.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  align-items: center;
`;

const ImgContainer = styled.div`
  height: 100%;
  width: 100%;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : sliderItems.length - 1);
    } else {
      setSlideIndex(slideIndex < sliderItems.length - 1 ? slideIndex + 1 : 0);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex(prev => (prev < sliderItems.length - 1 ? prev + 1 : 0));
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowCircleLeftIcon style={{ fontSize:"75px", marginLeft:"25px" }}  />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide key={item.id}>
            <ImgContainer>
              <NavLink onClick={ () => { localStorage.setItem( 'specialFilter','' ) } } to="/Results" >
                {item.img && <Image onClick={ () => {
                  localStorage.setItem("field", item.field);           
                  localStorage.setItem("brand", item.brand)
                }} src={item.img} />}
              </NavLink>
            </ImgContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowCircleRightIcon style={{ fontSize:"75px", marginRight:"25px" }} />
      </Arrow>
    </Container>
  );
};

export default Slider;
