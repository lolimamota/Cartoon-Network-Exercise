import styled from "styled-components";
import { keyframes } from 'styled-components'

const bearing = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
  0%{
    transform: translateX(100%)
  }
`;

export const SectionBlack = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #211921;
  width: 100%;
  height: 40vh;
  `;

export const Img = styled.img`
animation: ${bearing} 30s infinite linear;
`;


const bearingReverse = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(100%);
  }
  0%{
    transform: translateX(-100%)
  }
`;

export const SectionYellow = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #EDD820;
  width: 100%;
  height: 40vh;
  `;

export const ImgReverse = styled.img`
animation: ${bearingReverse} 30s infinite linear;
`;

export const SectionSponsors = styled.section`
background-color: #211921;
color: #FFFFFF;
display: flex;
justify-content: space-around;
align-items: center;
height: 25vh;
`;