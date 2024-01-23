import React, {ReactNode} from "react";
import css from './Kwork.module.css'

import "@fontsource/montserrat"; // Defaults to weight 400
import "@fontsource/montserrat/800.css"; // Specify weight
import "@fontsource/montserrat/800-italic.css";
import {BgText} from "./BgText/BgText";
import {Blocks} from "./Blocks/Blocks";
import {Description} from "./Description/Description";


export type PropsType = {
  card: {
    title: string
    description: string
  }
}

export const Kwork: React.FC<PropsType> = ({card}) => {

  return (
    <div className={css.kworkcontainer}>
      <div className={css.bgTextContainer} style={{position: "absolute" }}>
        <BgText children={''}/>
      </div>
      <div className={css.content}>
        <Description   card={card}/>
        <Blocks children={''}/>
      </div>
    </div>
  )
}