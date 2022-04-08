import React from "react";


type BodyType = {
    titleForBody: string
}

export const Body = (props: BodyType) => {
    return(
        <div>
            <h1>{props.titleForBody}</h1>

        </div>
    )
}