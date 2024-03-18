import React from "react";
import styled from "styled-components";

export const SectionMap = styled.section`
display: grid;
grid-template-columns: repeat(6, 1fr);
grid-template-rows: auto;
justify-content: space-around;
align-items: center;
`;

export const SectionFilter = styled.section`
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: auto;
justify-content: space-around;
align-items: center;
`;

export const Img = styled.img`
width: 5vw;
`;

export const Div = styled.div`
display: flex;
font-size: 0.6rem;
`;