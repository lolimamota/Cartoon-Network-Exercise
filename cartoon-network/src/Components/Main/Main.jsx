//--------------------IMPORT DAS CONFIGS--------------------
import React from 'react';
import * as S from './MainStyle.jsx';

//--------------------IMPORT DE IMAGENS--------------------
import Ben10 from './Images/ben10.png';
import Looney from './Images/looney.png';
import Gumball from './Images/gumball.png';
import Ppg from './Images/ppg.png';
import Sd from './Images/sd.png';
import TomJerry from './Images/tomejerry.png';
import Regular from './Images/apenasumshow.png';
import Courage from './Images/courage.png';
import Adventure from './Images/adventuretime.png';
import TeenTitans from './Images/teentitans.png';
import Steven from './Images/steven.png';
import Ursos from './Images/ursos.png';
import Warner from '../Footer/Images/logoWarner.png';
import Linkedin from '../Footer/Images/logoLinkedin.png';
import Github from '../Footer/Images/logoGithub.png';

//--------------------IMPORT DE COMPONETIZAÇÕES--------------------
// import Programs from '../Horarios/Horario.jsx';

//--------------------FUNÇÃO--------------------

export default function Main() {
  return (
    <main>
      <S.SectionBlack>
        <S.Img src={Sd} alt="Scooby-doo e sua turma" />
        <S.Img src={Ben10} alt="Ben 10" />
        <S.Img src={Looney} alt="O show dos Looney Tunes" />
        <S.Img src={Courage} alt="Coragem: o cão corvarde" />
        <S.Img src={Adventure} alt="Hora de Aventura" />
        <S.Img src={Regular} alt="Apenas um show" />
      </S.SectionBlack>
      <S.SectionYellow>
        <S.ImgReverse src={Gumball} alt="O incrível mundo de Gumball" />
        <S.ImgReverse src={Ppg} alt="As meninas superpoderosas" />
        <S.ImgReverse src={TomJerry} alt="Tom e Jerry" />
        <S.ImgReverse src={TeenTitans} alt="Jovens Titãs em ação" />
        <S.ImgReverse src={Steven} alt="Steven Universo" />
        <S.ImgReverse src={Ursos} alt="Ursos sem curso" />
      </S.SectionYellow>
      <S.SectionSponsors>
        <img src={Warner} alt="Logo da Warner Bros Corporation" />
        <h2>Sobre nós</h2>
        <h2>Produtos</h2>
        <h2>Personagens</h2>
        <img src={Linkedin} alt="Logo do LinkedIn" />
        <img src={Github} alt="Logo do Github" />
      </S.SectionSponsors>
    </main>
  )
}