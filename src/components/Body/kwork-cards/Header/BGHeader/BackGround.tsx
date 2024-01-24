import React from 'react';
import css from './BackGround.module.css';
import {FaNodeJs, FaReact, FaWordpress} from "react-icons/fa";
import {
  SiExpress,
  SiGit,
  SiGithub,
  SiGitlab, SiJavascript, SiJest,
  SiLinux,
  SiLinuxmint,
  SiMui, SiNextdotjs,
  SiNginx, SiReact, SiRedux,
  SiStorybook, SiTypescript,
  SiVisualstudio,
  SiWebstorm
} from "react-icons/si";
import {TbBrandRadixUi} from "react-icons/tb";
import {AiOutlineHtml5} from "react-icons/ai";
import {DiSass} from "react-icons/di";


export const BackGround = () => {
  const repeatedItems = [];

  const tech: any = [
    {'--i': '6', '--clr': '#28799d', component: <SiTypescript/>, color: '#0075c5'},
    {'--i': '5', '--clr': '#5ccfee', component: <SiJavascript/>, color: '#e8ce41'},
    {'--i': '4', '--clr': '#e4552d', component: <SiReact/>, color: '#5ccfee'},
    {'--i': '3', '--clr': '#c32aa3', component: <SiNextdotjs/>, color: '#fff'},
    {'--i': '2', '--clr': '#f7c631', component: <SiRedux/>, color: '#7046b2'},
    {'--i': '1', '--clr': '#0a66c2', component: <FaNodeJs/>, color: '#7cc327'},
    {'--i': '6', '--clr': '#28799d', component: <SiExpress/>, color: '#fff'},
    {'--i': '5', '--clr': '#5ccfee', component: <DiSass/>, color: '#c36192'},
    {'--i': '4', '--clr': '#e4552d', component: <AiOutlineHtml5/>, color: '#f25320'},
    {'--i': '3', '--clr': '#c32aa3', component: <SiJest/>, color: '#936271'},
    {'--i': '2', '--clr': '#f7c631', component: <SiWebstorm/>, color: '#03b1c8'},
    {'--i': '1', '--clr': '#0a66c2', component: <SiVisualstudio/>, color: '#0075c6'},
    {'--i': '6', '--clr': '#28799d', component: <SiMui/>, color: '#0079f2'},
    {'--i': '5', '--clr': '#5ccfee', component: <TbBrandRadixUi/>, color: '#6b44c1'},
    {'--i': '4', '--clr': '#e4552d', component: <SiGit/>, color: '#e44c30'},
    {'--i': '3', '--clr': '#c32aa3', component: <SiGithub/>, color: '#fff'},
    {'--i': '2', '--clr': '#f7c631', component: <SiGitlab/>, color: '#ef6724'},
    {'--i': '1', '--clr': '#0a66c2', component: <SiStorybook/>, color: '#f2437e'},
    {'--i': '6', '--clr': '#28799d', component: <SiLinux/>, color: '#f2a406'},
    {'--i': '5', '--clr': '#5ccfee', component: <SiLinuxmint/>, color: '#64ac3c'},
    {'--i': '4', '--clr': '#e4552d', component: <SiNginx/>, color: '#419b45'},
    {'--i': '3', '--clr': '#c32aa3', component: <FaWordpress/>, color: '#0079f2'},
  ]
  for (let i = 0; i < 8; i++) {
    repeatedItems.push(...tech);
  }

 return (
   <>
     {repeatedItems.map((el, index) => (
       <>
         <div key={index} className={css.block} style={el}></div>
         <div key={index} className={css.block} style={{
           display: "flex",
           justifyContent: 'center',
           alignItems: 'center',
           zIndex: 13,
           fontSize: `45px`,
           color: el.color}} >
           {el.component}
         </div>
       </>
     ))}
   </>
  );
};
