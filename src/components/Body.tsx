import React from "react";
import {NewComponent} from "./NewComponent";

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