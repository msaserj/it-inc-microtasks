import React from "react";
import css from "./KworkCards.module.css"
import {Kwork} from "./Kwork/Kwork";
import {Head} from "./Header/Head";


export type PropsType = {}


export const KworkCards = (props: PropsType) => {

  const style: any = {width: '90%', height: '90%'}
  const tech: any = {
    typeScript: '#0075c5',
    javaScript: '#e8ce41',
    react: '#5ccfee',
    next: '#fff',
    redux: '#7046b2',
    nodejs: '#7cc327',
    express: '#fff',
    sass: '#c36192',
    html: '#f25320',
    jest: '#936271',
    ws: '#03b1c8',
    vs: '#0075c6',
    mui: '#0079f2',
    radix: '#6b44c1',
    git: '#e44c30',
    github: '#fff',
    gitlab: '#ef6724',
    storybook: '#f2437e',
    linux: '#f2a406',
    mint: '#64ac3c',
    nginx: '#419b45',
  }

  return (
    <div className={css.mainDiv}>
      <Head/>
      <div className={css.div}>
        <Kwork/>
        <Kwork/>
        <Kwork/>
        <Kwork/>
      </div>
    </div>


  )
}