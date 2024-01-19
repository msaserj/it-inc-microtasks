import React, {ReactNode} from "react";

export type PropsType = {
    color: string
    children: ReactNode
}

export const IconComponent = (props: PropsType) => {

    const style: any = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '70px',
        width: '70px',
        margin: '30px 50px',
        borderRadius: '10px',
        backgroundColor: props.color,
        border: `2px solid ${props.color}`,
        boxShadow: `1px 1px 15px ${props.color}, 1px 1px 20px ${props.color}`
    }

    return (
            <div style={style}>
                {props.children}
            </div>
    )
}