import React from 'react';
import css from './Head.module.css';
import {BackGround} from "./BGHeader/BackGround";


export const Head = () => {
  return (
    <div className={css.container}>
      <div className={css.containerBlock}>
        <BackGround/>
      </div>

      <div className={css.nav}>

        <h1 className={css.header}>IT-PRAGMAT</h1>
      </div>
    </div>

  );
};
