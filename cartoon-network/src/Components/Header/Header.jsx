import React from "react";
import * as S from "./HeaderStyle.jsx";
import LogoCN from "./Images/logoCN.png";
import Manete from "./Images/manete.png";
import Clock from "./Images/relogio.png";
// import LogoAnimated from "./Images/logoanimated.gif";

export default function Header(){
    return(
        <S.HeaderStyle>
                <img src={LogoCN} alt="Logo da Cartoon Network" />
            <S.Section>
                <S.Div>
                    <S.Img src={Manete} alt="Manete de Videogame" />
                    <h2>JOGOS</h2>
                </S.Div>
                <S.Div>
                    <S.Img src={Clock} alt="Relogio" />
                    <h2>PROGRAMAÇÃO</h2>
                </S.Div>
            </S.Section>
        </S.HeaderStyle>
    )
}