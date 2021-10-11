import React from 'react';
import fiedra_web_dev_logo from '../fiedra_web_dev_logo.png'; 
import styled from "styled-components";

const Nav = styled.nav`
  background: #6D45FC;
  height: 80px;
  display: flex;
  justify-content: space-between;
`;

const ImgStyles = styled.nav`
  background: #6D45FC;
  display: flex;
  justify-content: space-between;
  padding-top: 16px;
  padding-bottom: 16px;
  padding-left: 24px;
`;


export default function NavBar() {
    return (
      <Nav>
        <ImgStyles>
            <img src={fiedra_web_dev_logo} alt=""/>
        </ImgStyles>
      </Nav>

    )
}
