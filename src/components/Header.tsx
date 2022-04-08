import React from "react";

type HeaderType = {
    titleForHeader: string
}

export const Header = (props: HeaderType) => {
    return(
        <div>
            <h1>{props.titleForHeader}</h1>
        </div>
    )
}