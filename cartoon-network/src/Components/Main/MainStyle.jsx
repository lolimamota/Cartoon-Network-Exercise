import styled from "styled-components";
import { keyframes } from 'styled-components'

const bearing = keyframes`
  0% {
    transform: translateX(0);
  }
  50%{
    transform: translateX(-100%)
  }
  100% {
    transform: translateX(-200%);
  }
`;

export const SectionBlack = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #211921;
  width: 100%;
  height: 40vh;
  overflow: hidden;
  `;

export const Img = styled.img`
border: solid red;
animation: ${bearing} 10s infinite linear;
animation-fill-mode: forwards;
width: 60%;
`;


const bearingReverse = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(100%);
  }
`;

export const SectionYellow = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #EDD820;
  width: 100%;
  height: 40vh;
  overflow: hidden;
  `;

export const ImgReverse = styled.img`
border: solid red;
animation: ${bearingReverse} 30s infinite linear;
animation-fill-mode: forwards;
width: 60%;
`;

export const SectionSponsors = styled.section`
background-color: #211921;
color: #FFFFFF;
display: flex;
justify-content: space-around;
align-items: center;
height: 25vh;
`;