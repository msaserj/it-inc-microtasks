import React from "react";
import {Button} from "./Button";


type BodyType = {
    titleForBody: string
}

export const Body = (props: BodyType) => {

    const Button01Foo = (subscriber: string, age: number) => {
        console.log(subscriber, age)
    }

    const Button02Foo = (subscriber: string, age: number) => {
        console.log(subscriber, age)
    }

    return (

        <div>
            <h1>{props.titleForBody}</h1>
            <Button name={"Button01"} callBack={() => Button01Foo('I`m Vasya', 21)}/>
            <Button name={"Button02"} callBack={() => Button02Foo('I`m Vanya', 22)}/>
        </div>
    )
}