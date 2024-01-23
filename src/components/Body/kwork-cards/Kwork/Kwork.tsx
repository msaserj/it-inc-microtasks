import React, {ReactNode} from "react";
import css from './Kwork.module.css'

import "@fontsource/montserrat"; // Defaults to weight 400
import "@fontsource/montserrat/800.css"; // Specify weight
import "@fontsource/montserrat/800-italic.css";
import {BgText} from "./BgText/BgText";
import {Blocks} from "./Blocks/Blocks";


export type PropsType = {
  color?: string
  children?: ReactNode
}

export const Kwork = (props: PropsType) => {

  return (
    <div className={css.kworkcontainer}>
      <div className={css.bgTextContainer} style={{position: "absolute" }}>
        <BgText children={''}/>
      </div>
      <div style={{position: "relative", opacity: '0.9', marginRight: "-380px"}}>
        <Blocks children={''}/>
      </div>


      {props.children}
    </div>
  )
}