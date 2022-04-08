import React from "react";
import {NavLink} from "react-router-dom";
import css from "./Header.module.css"

type HeaderType = {
    titleForHeader: string
}

const setActive = ({isActive}: {isActive: boolean}) => isActive ? css.activeLink : css.inactiveLink;


export const Header = (props: HeaderType) => {
    return(
        <nav className={css.nav}>
            <h1>{props.titleForHeader}</h1>

            <NavLink to="/" className = {setActive} >Body</NavLink>
            <NavLink to="/topcars" className = {setActive} >TopCars</NavLink>
            <NavLink to={"/money"} className = {setActive} >Money</NavLink>

        </nav>
    )
}