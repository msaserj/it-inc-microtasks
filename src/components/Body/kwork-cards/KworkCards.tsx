import React from "react";
import css from "./KworkCards.module.css"
import {Kwork} from "./Kwork/Kwork";
import {Head} from "./Header/Head";
import {FaCss3, FaElementor, FaFigma, FaHtml5, FaJs, FaNodeJs, FaReact, FaWordpress} from "react-icons/fa";
import {LightButton} from "./Kwork/LigthButton/LightButton";
import {FaSass} from "react-icons/fa6";
import {SiRedux, SiTypescript} from "react-icons/si";


export type PropsType = {}


export const KworkCards = (props: PropsType) => {

  const style: any = {width: '90%', height: '90%'}
  const tech: any = {
    wordPress: '#28799d',
    elementor: '#8d0039',
    HTML: '#e4552d',
    CSS: '#2962e9',
    SCSS: '#c76395',
    JS: '#e8d44d',
    TS: '#0075c5',
    redux: '#7046b2',
    nodejs: '#7cc327',
    react: '#5ccfee',
    linux: '#f7c631',
    figma: '#ab4ff9'
  }
  const content = {
    card1: {
      title: "Доработка и исправление вёрстки",
      description: "WordPress"
    },
    card2: {
      title: "Доработка и исправление вёрстки",
      description: "HTML/CSS/JS"
    },
    card3: {
      title: "Разработка сайта на React",
      description: "React"
    },
    card4: {
      title: "Верстка сайта по макету Figma",
      description: "HTML/SCSS/JS/Figma"
    }
  }

  return (
    <div className={css.mainDiv}>
      <Head/>
      <div className={css.div}>
        <Kwork card={content.card1}>
          <LightButton color={tech.wordPress}>
            <FaWordpress/>
          </LightButton>
          <LightButton color={tech.elementor}>
            <FaElementor/>
          </LightButton>
        </Kwork>

        <Kwork card={content.card2}>
          <LightButton color={tech.HTML}>
            <FaHtml5/>
          </LightButton>
          <LightButton color={tech.CSS}>
            <FaCss3/>
          </LightButton>
          <LightButton color={tech.SCSS}>
            <FaSass/>
          </LightButton>
          <LightButton color={tech.JS}>
            <FaJs/>
          </LightButton>
        </Kwork>

        <Kwork card={content.card3}>
          <LightButton color={tech.react}>
            <FaReact/>
          </LightButton>
          <LightButton color={tech.TS}>
            <SiTypescript/>
          </LightButton>
          <LightButton color={tech.nodejs}>
            <FaNodeJs/>
          </LightButton>
          <LightButton color={tech.redux}>
            <SiRedux/>
          </LightButton>
        </Kwork>
        <Kwork card={content.card4}>
          <LightButton color={tech.HTML}>
            <FaHtml5/>
          </LightButton>
          <LightButton color={tech.CSS}>
            <FaCss3/>
          </LightButton>
          <LightButton color={tech.SCSS}>
            <FaSass/>
          </LightButton>
          <LightButton color={tech.JS}>
            <FaJs/>
          </LightButton>
          <LightButton color={tech.figma}>
            <FaFigma/>
          </LightButton>
        </Kwork>


      </div>
    </div>


  )
}