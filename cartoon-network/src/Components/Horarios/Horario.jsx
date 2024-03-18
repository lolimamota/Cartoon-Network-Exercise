import React, { useLayoutEffect, useState } from "react";
import Ben10 from '../Main/Images/ben10.png';
import Looney from '../Main/Images/looney.png';
import Gumball from '../Main/Images/gumball.png';
import Ppg from '../Main/Images/ppg.png';
import Sd from '../Main/Images/sd.png';
import TomJerry from '../Main/Images/tomejerry.png';
import Regular from '../Main/Images/apenasumshow.png';
import Courage from '../Main/Images/courage.png';
import Adventure from '../Main/Images/adventuretime.png';
import TeenTitans from '../Main/Images/teentitans.png';
import Steven from '../Main/Images/steven.png';
import Ursos from '../Main/Images/ursos.png';
import Billy from './Images/billy.png';
import Dexter from './Images/dexter.png';
import Dudu from './Images/dudu.png';
import Jorel from './Images/jorelito.png';
import Monica from './Images/monica.png';
import Vaca from './Images/cow.png';
import * as S from './HorarioStyle.jsx';
import { Section } from "../Main/MainStyle.jsx";

export default function Horarios(){
    const [program, setProgram] = useState([
        {hora: "03:00", nome: "The grim adventure of Billy and Mandy", imagem: Billy, aMeridian: true },
        {hora: "04:00", nome: "Dexter's Laboratory", imagem: Dexter, aMeridian: true },
        {hora: "05:00", nome: "Du, Dudu e Edu", imagem: Dudu, aMeridian: true },
        {hora: "06:00", nome: "Cow and Chicken", imagem: Vaca, aMeridian: true },
        {hora: "07:00", nome: "Ben 10", imagem: Ben10, aMeridian: true },
        {hora: "08:00", nome: "The Looney Tunes Show", imagem: Looney, aMeridian: true },
        {hora: "09:00", nome: "The amazing world of Gumball", imagem: Gumball, aMeridian: true },
        {hora: "10:00", nome: "The Power Puff Girls", imagem: Ppg, aMeridian: true },
        {hora: "11:00", nome: "Scooby-doo", imagem: Sd, aMeridian: true },
        {hora: "12:00", nome: "Tom and Jerry", imagem: TomJerry, aMeridian: false },
        {hora: "13:00", nome: "Regular Show", imagem: Regular, aMeridian: false },
        {hora: "14:00", nome: "Courage: The cowardly dog", imagem: Courage, aMeridian: false },
        {hora: "15:00", nome: "Adventure time", imagem: Adventure, aMeridian: false },
        {hora: "16:00", nome: "Teen Titans Go!", imagem: TeenTitans, aMeridian: false },
        {hora: "17:00", nome: "Steven Universe", imagem: Steven, aMeridian: false },
        {hora: "18:00", nome: "We Bare Bears", imagem: Ursos, aMeridian: false },
        {hora: "19:00", nome: "Jorel's Brothers", imagem: Jorel, aMeridian: false },
        {hora: "20:00", nome: "Monica teen", imagem: Monica, aMeridian: false },
    ])

    //Todos os desenhos que forem true, serão armazenados em uma nova lista, (programsAMeridian)
    const programsAMeridian = program.filter((item)=> item.aMeridian === true)

    return(
        <section>
        <S.SectionMap>
            {program.map((item)=>(
                <S.Div>
                <h2>
                    {item.hora}
                </h2>
                <h2>
                    {item.nome}
                </h2>
                <S.Img src={item.imagem} alt={item.nome} />
                </S.Div>
            ))}
        </S.SectionMap>
        <S.SectionFilter>
            {programsAMeridian.map((item)=>(
                <ul>
                    <li>{item.hora}</li>
                    <li>{item.nome}</li>
                    <li><img src={item.imagem} alt={item.nome}/></li>
                </ul>
            ))}
        </S.SectionFilter>
        </section>
    )
}