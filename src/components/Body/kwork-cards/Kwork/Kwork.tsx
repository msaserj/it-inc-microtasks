import React, {ReactNode} from "react";
import css from './Kwork.module.css'

export type PropsType = {
    color?: string
    children?: ReactNode
}

export const Kwork = (props: PropsType) => {

    return (
      <div className={css.kworkcontainer}>
          <div><h3>Test Text</h3></div>
          <div><h3>Test Text</h3></div>
          <div><h3>Test Text</h3></div>
          {props.children}
      </div>
    )
}