import React from "react";
import ThemeOn from '../../assets/images/themeOn.svg'
import ThemeOf from '../../assets/images/themeOff.svg'
import { Icone } from "../UI";

const claro = <Icone src={ThemeOn}  alt ="Tema Claro"/>;
const escuro = <Icone src={ThemeOf} alt ="Tema Escuro"/>;

export default ({ tema }) => (tema ? escuro : claro);