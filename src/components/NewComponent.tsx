import React from "react";

type carsType = {
    manufacturer: string
    model: string
}


export const NewComponent = (props: carsType) => {

    return (

        <table>
            <tbody>
            {/*{*/}
            {/*    //map - это метод массива, который на основе каждого элемента в массиве создает новый элемент*/}
            {/*    props.((t) => {*/}
            {/*        return <li>*/}
            {/*            <input type="checkbox" checked={t.isDone}/>*/}
            {/*            <span>{t.title}</span>*/}
            {/*            <button onClick={() => { props.removeTask(t.id)}}>X</button>*/}
            {/*        </li>*/}
            {/*    })*/}
            {/*}*/}
            </tbody>
        </table>
    )
}