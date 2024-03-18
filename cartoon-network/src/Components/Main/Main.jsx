import React from 'react';
import * as S from './MainStyle.jsx';
import {motion} from 'framer-motion';
import Ben10 from './Images/ben10.png';
import Looney from './Images/looney.png';
import Gumball from './Images/gumball.png';
import Ppg from './Images/ppg.png';
import Sd from './Images/sd.png';
import TomJerry from './Images/tomejerry.png';
// import Regular from './Images/apenasumshow.png';
// import Courage from './Images/courage.png';
// import Adventure from './Images/adventuretime.png';
// import TeenTitans from './Images/teentitans.png';
// import Steven from './Images/steven.png';
// import Ursos from './Images/ursos.png';
import Warner from '../Footer/Images/logoWarner.png';
import Linkedin from '../Footer/Images/logoLinkedin.png';
import Github from '../Footer/Images/logoGithub.png';
import Programs from '../Horarios/Horario.jsx';

export default function Main(){
    return(
        <main>
            <S.SectionBlack>
                <S.DivBlack><S.ImgBlack src={Sd} alt="Scooby-doo e sua turma" /></S.DivBlack>
                <S.DivBlack><S.ImgBlack src={Ben10} alt="Ben 10" /></S.DivBlack>
                <S.DivBlack><S.ImgBlack src={Looney} alt="Os Looney Tunes" /></S.DivBlack>
                {/* <S.DivBlack><S.ImgBlack src={Adventure} alt="Hora de Aventura"/></S.DivBlack>
                <S.DivBlack><S.ImgBlack src={Regular} alt="Apenas um show"/></S.DivBlack>
                <S.DivBlack><S.ImgBlack src={Courage} alt="Coragem. o cão covarde"/></S.DivBlack> */}
            </S.SectionBlack>
            <S.Section>
                <div><img src={Gumball} alt="O incrivel mundo de Gumball" /></div>
                <div><img src={Ppg} alt="As meninas super poderosas" /></div>
                <div><img src={TomJerry} alt="Tom e Jerry" /></div>
                {/* <div><img src={Steven} alt="Steven Universo"/></div>
                <div><img src={Ursos} alt="Ursos sem curso"/></div>
                <div><img src={TeenTitans} alt="Jovens titãs em ação"/></div> */}
            </S.Section>
            <S.SectionBlack>
                <S.ImgBlack src={Warner} alt="Warner enterprise" />
                <S.BlackH2>Sobre nós</S.BlackH2>
                <S.BlackH2>Produtos</S.BlackH2>
                <S.BlackH2>Personagens</S.BlackH2>
                <S.ImgBlack src={Github} alt="logo do github" />
                <S.ImgBlack src={Linkedin} alt="logo do linkedin" />
            </S.SectionBlack>
            <section>
                <Programs/>
            </section>
        </main>
    )
}