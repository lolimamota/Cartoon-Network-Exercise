import React from 'react';
import * as S from './MainStyle.jsx';
import Ben10 from './Images/ben10.png';
import Looney from './Images/looney.png';
import Gumball from './Images/gumball.png';
import Ppg from './Images/ppg.png';
import Sd from './Images/sd.png';
import TomJerry from './Images/tomejerry.png';
import Warner from '../Footer/Images/logoWarner.png';
import Linkedin from '../Footer/Images/logoLinkedin.png';
import Github from '../Footer/Images/logoGithub.png';


export default function Main(){
    return(
        <main>
            <S.SectionBlack>
                <S.DivBlack><S.ImgBlack src={Sd} alt="Scooby-doo e sua turma" /></S.DivBlack>
                <S.DivBlack><S.ImgBlack src={Ben10} alt="Ben 10" /></S.DivBlack>
                <S.DivBlack><S.ImgBlack src={Looney} alt="Os Looney tunes" /></S.DivBlack>
            </S.SectionBlack>
            <S.Section>
                <div><img src={Gumball} alt="O incrivel mundo de Gumball" /></div>
                <div><img src={Ppg} alt="As meninas super poderosas" /></div>
                <div><img src={TomJerry} alt="Tom e Jerry" /></div>
            </S.Section>
            <S.SectionBlack>
                <S.ImgBlack src={Warner} alt="Warner enterprise" />
                <h2>Sobre nós</h2>
                <h2>Produtos</h2>
                <h2>Personagens</h2>
                <S.ImgBlack src={Github} alt="logo do github" />
                <S.ImgBlack src={Linkedin} alt="logo do linkedin" />
            </S.SectionBlack>
        </main>
    )
}