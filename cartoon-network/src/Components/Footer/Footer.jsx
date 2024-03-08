import React from 'react';
import styled from 'styled-components';

const H2 = styled.h2`
height: 10vh;
font-weight: 200;
color: white;
display: flex;
justify-content: center;
align-items: center;
`;

export default function Footer() {
  return (
    <footer>
        <H2>
        © 2024 Cartoon Network - para fins estudantis
        </H2>
    </footer>
  )
}

