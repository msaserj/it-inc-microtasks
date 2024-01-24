import React, {ReactNode} from 'react';
import css from './Description.module.css';
import "@fontsource/poppins"; // Defaults to weight 400
import "@fontsource/poppins/600.css"; // Specify weight
import "@fontsource/poppins/600-italic.css"; // Specify weight and style


type PropsType = {
  card: {
    title: string
    description: string
  }
  children: ReactNode
};

export const Description: React.FC<PropsType> = ({card, children}) => {

  return (
    <div className={css.nav}>
      <h2>{card.title}</h2>
      <span style={{padding: '10px 0'}} >{card.description}</span>
      <div style={{padding: '0', marginBottom: '10px', width: '100%', borderBottom: '1px solid rgba(255, 255, 255, 0.33)'}}></div>
      <div style={{marginTop: '10px', display: "flex", flexWrap: 'wrap', gap: '22px'}}>
        {children}
      </div>
    </div>

  );
};
