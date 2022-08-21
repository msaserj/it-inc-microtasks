import React from "react";
import {NavLink} from "react-router-dom";
import css from "./Header.module.css"

type HeaderType = {
    titleForHeader: string
}

const setActive = ({isActive}: { isActive: boolean }) => isActive ? css.activeLink : css.inactiveLink;


export const Header = (props: HeaderType) => {



    return (
        <nav className={css.nav}>
            <h1>{props.titleForHeader}</h1>

            <NavLink to="/" className={setActive}>Body</NavLink>
            <NavLink to="/topcars" className={setActive}>TopCars</NavLink>
            <NavLink to={"/buttons"} className={setActive}>Buttons</NavLink>
            <NavLink to={"/counter"} className={setActive}>Counter</NavLink>
            <NavLink to={"/babki"} className={setActive}>Babki</NavLink>
            <NavLink to={"/input"} className={setActive}>Input</NavLink>
            <NavLink to={"/doublerange"} className={setActive}>DoubleRange</NavLink>

        </nav>
    )
}