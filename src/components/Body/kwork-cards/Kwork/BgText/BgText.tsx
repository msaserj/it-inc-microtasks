import React, {ReactNode, useEffect, useRef} from 'react';
import css from './BgText.module.css';
import "@fontsource/poppins"; // Defaults to weight 400
import "@fontsource/poppins/600.css"; // Specify weight
import "@fontsource/poppins/600-italic.css"; // Specify weight and style


type PropsType = {
  children: ReactNode;
  link?: string;
  pointer?: boolean;
  blank?: boolean;
  title?: string;
};

export const BgText: React.FC<PropsType> = ({children, link, pointer, blank, title}) => {


  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const text = textRef.current;
    let shadow = '';

    for (let i = 0; i < 10; i++) {
      shadow += (shadow ? ',' : '') + -i + 'px ' + i + 'px 0 #575569';
    }

    if (text) {
      text.style.textShadow = shadow;
    }
  }, []);


  return (

    <div className={css.bodyBlock}>
      <div data-text='IT-PRAGMAT' ref={textRef} className={css.text}>
        IT-PRAGMAT
      </div>

    </div>

  );
};
