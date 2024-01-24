import React from 'react';
import css from './Blocks.module.css';
import {FaHtml5, FaLinux, FaReact, FaServer, FaWordpress} from "react-icons/fa";
import {IoIosSpeedometer} from "react-icons/io";

type PropsType = {

};

export const Blocks: React.FC<PropsType> = ({}) => {
  const listItemStyle6: React.CSSProperties = {'--i': '6', '--clr': '#28799d',} as React.CSSProperties;
  const listItemStyle5: React.CSSProperties = {'--i': '5', '--clr': '#5ccfee',} as React.CSSProperties;
  const listItemStyle4: React.CSSProperties = {'--i': '4', '--clr': '#e4552d',} as React.CSSProperties;
  const listItemStyle3: React.CSSProperties = {'--i': '3', '--clr': '#c32aa3',} as React.CSSProperties;
  const listItemStyle2: React.CSSProperties = {'--i': '2', '--clr': '#f7c631',} as React.CSSProperties;
  const listItemStyle1: React.CSSProperties = {'--i': '1', '--clr': '#0a66c2',} as React.CSSProperties;
  return (

    <div className={css.bodyBlock}>
      <ul>
        <li style={listItemStyle6}><a href="#"><span><FaWordpress/></span>WordPress</a></li>
        <li style={listItemStyle5}><a href="#"><span><FaReact/></span>ReactJS</a></li>
        <li style={listItemStyle4}><a href="#"><span><FaHtml5 /></span>HTML/CSS/JS</a></li>
        <li style={listItemStyle3}><a href="#"><span><IoIosSpeedometer /></span>SiteOptimize</a></li>
        <li style={listItemStyle2}><a href="#"><span><FaLinux /></span>Linux</a></li>
        <li style={listItemStyle1}><a href="#"><span><FaServer /></span>Hosting</a></li>
      </ul>
    </div>

  );
};
