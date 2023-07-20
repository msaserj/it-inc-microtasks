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

            <NavLink to="/sandbox-microtasks" className={setActive}>Body</NavLink>
            <NavLink to="/sandbox-microtasks/topcars" className={setActive}>TopCars</NavLink>
            <NavLink to="/sandbox-microtasks/buttons" className={setActive}>Buttons</NavLink>
            <NavLink to="/sandbox-microtasks/counter" className={setActive}>Counter</NavLink>
            <NavLink to="/sandbox-microtasks/babki" className={setActive}>Babki</NavLink>
            <NavLink to="/sandbox-microtasks/input" className={setActive}>Input</NavLink>
            <NavLink to="/sandbox-microtasks/doublerange" className={setActive}>DoubleRange</NavLink>
            <NavLink to="/sandbox-microtasks/icons" className={setActive}>icons</NavLink>

        </nav>
    )
}