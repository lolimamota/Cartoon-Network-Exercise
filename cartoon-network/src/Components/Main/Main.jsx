//--------------------IMPORT DAS CONFIGS--------------------
import React from 'react';
import * as S from './MainStyle.jsx';
import {motion} from 'framer-motion';

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
            <motion.img src={Sd} alt="Scooby-doo e sua turma" initial={{ x: -1000 }} animate={{ x: 0 }} transition={{ duration: 0.5 }} />
            <motion.img src={Ben10} alt="Ben 10" initial={{ x: -1000 }} animate={{ x: 0 }} transition={{ duration: 0.5 }} />
            <motion.img src={Looney} alt="O show dos Lonney Tunes" initial={{ x: -1000 }} animate={{ x: 0 }} transition={{ duration: 0.5 }}/>
            <motion.img src={Regular} alt="Apenas um show" initial={{ x: -1000 }} animate={{ x: 0 }} transition={{ duration: 0.5 }}/>
            <motion.img src={Courage} alt="Coragem: o cão covarde" initial={{ x: -1000 }} animate={{ x: 0 }} transition={{ duration: 0.5 }}/>
            <motion.img src={Adventure} alt="Hora de Aventura" initial={{ x: -1000 }} animate={{ x: 0 }} transition={{ duration: 0.5 }}/>
        </S.SectionBlack>
        <S.Section>
            <img src={Gumball} alt="O incrivel mundo de Gumball" />
            <img src={Ppg} alt="As meninas superpoderosas" />
            <img src={TomJerry} alt="O show de Tom e Jerry" />
            <img src={TeenTitans} alt="Os jovens titãs em ação" />
            <img src={Steven} alt="Steven universo" />
            <img src={Ursos} alt="Ursos sem curso" />
        </S.Section>
    </main>
  )
}