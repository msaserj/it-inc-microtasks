import React from "react";
import {Button} from "./Button";



export const Buttons = () => {

    const Button01Foo = (subscriber: string, age: number) => {
        console.log(subscriber, age)
    }

    const Button02Foo = (subscriber: string, age: number) => {
        console.log(subscriber, age)
    }
    return (
        <div>
            <Button name={"Button01"} callBack={() => Button01Foo('I`m Vasya', 21)}/>
            <Button name={"Button02"} callBack={() => Button02Foo('I`m Vanya', 22)}/>
        </div>
    )
}