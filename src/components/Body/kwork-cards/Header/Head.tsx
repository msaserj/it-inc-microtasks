import React from 'react';
import css from './Head.module.css';


export const Head = () => {
  return (
    <div className={css.container} style={{display: "flex", justifyContent: "center", alignItems: "center", width: "1920px", height: "226px"}}>
      <div className={css.nav}>

        <h1 className={css.header}>IT-PRAGMAT</h1>
      </div>
    </div>

  );
};
