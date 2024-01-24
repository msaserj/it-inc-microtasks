import React, { ReactNode } from 'react';
import css from './LinkButton.module.css';

type PropsType = {
  children: ReactNode;
  title?: string;
};

export const LiBtn: React.FC<PropsType> = ({ children, title }) => {
  return (
    <div
      className={css.a}
      title={title}
    >
      <span  className={css.link}>
        {children}
      </span>
    </div>
  );
};
