import React from 'react';
import styled from "styled-components";

const BoxStyle = styled.nav`
  background: #F2F2F7;
  height: 1000px;
  width: 600px;
  margin: auto;
  display: flex;

`;

const OuterCard = styled.nav`
  background: white;
  height: 200px;
  width: 580px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  border-radius: 16px;
`; 

const CardThumbnail = styled.nav`
  background: #ECE6FF;
  height: 168px;
  width: 168px;
  margin: 16px 16px 16px 16px;
  display: flex;
  justify-content: space-between;
  border-radius: 10px;
`;

const HeadingText = styled.nav`
width: 364px;
height: 46px;

font-family: Arial;
font-style: normal;
font-weight: bold;
font-size: 20px;
line-height: 23px;
display: flex;
align-items: center;
letter-spacing: 0.03em;

color: #000000;

`;

const SecondaryText = styled.nav`
width: 364px;
height: 54px;

font-family: Arial;
font-style: italic;
font-weight: normal;
font-size: 16px;
line-height: 18px;
letter-spacing: 0.03em;

color: #000000;
`;

const Date = styled.nav`
width: 100%;
height: 22px;


font-family: Arial;
font-style: normal;
font-weight: bold;
font-size: 16px;
line-height: 18px;
display: flex;
letter-spacing: 0.03em;
color: #754EFF;
`;




export default function Box() {
    return (
        <BoxStyle>
            <OuterCard>
                <div>
                <CardThumbnail>
                </CardThumbnail>
                </div>
                    <div>
                    <HeadingText> Apple's AirPods Max headphones are $100 off at Amazon. Get this...          </HeadingText>
                    <SecondaryText>With excellent sound, solid ANC and good battery life, Apple's AirPods Max headphones have a lot going for them. If you've been...</SecondaryText>
                    <Date>September 21, 2021</Date>
                    </div>
        
            </OuterCard>
        </BoxStyle>
    )
}
