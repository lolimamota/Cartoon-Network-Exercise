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

export default function Main(){
    const Rolling = document.querySelectorAll(".scroller");
    if(!window.matchMedia("(prefers-reduced-motion: reduce)").matches){
        addAnimation();
    };

    function addAnimation(){
        Rolling.forEach((scroller)=>{
            scroller.setAttribute("data-animated", true);

            const scrollerInner = scroller.querySelector('scroller_inner');
            const scrollerContent = Array.from(scrollerInner.children);

            scrollerContent.forEach(item=>{
                const duplicatedItem = item.cloneNode(true);
                duplicatedItem.setAttribute("aria-hidden", true);
                scrollerInner.appendChild(duplicatedItem);
            });
        });
    };

    return(
        <main>
            <>
            <S.Scroller className='scroller' data-direction="right">
                <S.Ul className='scroller_inner'>
                <li><img src={Sd}alt="Scooby-doo e sua turma" /></li>
                <li><img src={Ben10}alt="Ben 10" /></li>
                <li><img src={Looney}alt="The Looney Tunes Show" /></li>
                <li><img src={Adventure}alt="Hora de Aventura" /></li>
                <li><img src={Regular}alt="Apenas um Show" /></li>
                <li><img src={Courage}alt="Coragem: o Cão covarde" /></li>
                </S.Ul>
            </S.Scroller>
            </>
        </main>
    )
}