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
      <p>{card.description}</p>
      <div style={{display: "flex", flexWrap: 'wrap', gap: '22px'}}>
        {children}
      </div>
    </div>

  );
};
