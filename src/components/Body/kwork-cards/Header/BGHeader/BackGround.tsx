import React from 'react';
import css from './BackGround.module.css';


export const BackGround = () => {
  const repeatedItems = [];
  const items = [
    { '--i': '6', '--clr': '#28799d' } as React.CSSProperties,
    { '--i': '5', '--clr': '#5ccfee' } as React.CSSProperties,
    { '--i': '4', '--clr': '#e4552d' } as React.CSSProperties,
    { '--i': '3', '--clr': '#c32aa3' } as React.CSSProperties,
    { '--i': '2', '--clr': '#f7c631' } as React.CSSProperties,
    { '--i': '1', '--clr': '#0a66c2' } as React.CSSProperties
  ];
  for (let i = 0; i < 30; i++) {
    repeatedItems.push(...items);
  }

 return (
   <>
     {repeatedItems.map((el, index) => (
       <div key={index} className={css.block} style={el}></div>
     ))}
   </>
  );
};
