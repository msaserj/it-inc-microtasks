import React from "react";

type FooterType = {
    titleForFooter: string
}

export const Footer = (props: FooterType) => {
    return(
        <div>
            <h1>{props.titleForFooter}</h1>
        </div>
    )
}