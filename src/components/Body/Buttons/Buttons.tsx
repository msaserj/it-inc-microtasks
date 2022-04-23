import React from "react";
import {Button} from "./Button";
import css from "./Buttons.module.css"



export const Buttons = () => {

    const Button01Foo = (subscriber: string, age: number) => {
        console.log(subscriber, age)
    }
    const Button02Foo = (subscriber: string, age: number) => {
        console.log(subscriber, age)
    }

    const onClickHandler01 = (name: string) => {
        console.log(name)
    }

    return (
        <div >
            <div className={css.buttonBlock}>
                <h3>See console</h3>
                {/*Components*/}
                <Button name={"Button01"} callBack={() => Button01Foo('I`m Vasya', 21)}/>
                <Button name={"Button02"} callBack={() => Button02Foo('I`m Vanya', 22)}/>
            </div>
            <div className={css.buttonBlock}>
                {/*Buttons*/}
                <button onClick={() => onClickHandler01("Peter")}>MyButton01</button>
                <button onClick={() =>onClickHandler01("Alex")}>MyButton02</button>
            </div>
        </div>
    )
}