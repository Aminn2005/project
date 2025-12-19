import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  top: ${({ visible }) => (visible ? "72px" : "-100px")};
  height: 50px;
  width: 100%;
  background-color: gray; 
  transition: top 0.3s; /* smooth slide */
  z-index: 9;
`;

const NavbarSection2 = () => {
  const [prevScroll, setPrevScroll] = useState(window.scrollY);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScroll = window.scrollY;
    setVisible(prevScroll > currentScroll || currentScroll < 10); // show if scrolling up or near top
    setPrevScroll(currentScroll);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScroll]);

  return (
    <Container visible={visible}>
      <p>navbar</p>
    </Container>
  );
}

export default NavbarSection2;
