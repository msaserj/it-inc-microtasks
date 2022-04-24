import React, {ChangeEvent, useState} from 'react';
import {Button} from "../Buttons/Button";


type FFullInputPropsType = {
    addMessage: (title: string) => void
}

export const Fullinput = (props: FFullInputPropsType) => {

    let [title, setTitle] = useState("")
    console.log(title)

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }

    const onClickButtonHandler = () => {
      props.addMessage(title)
        setTitle('')
    }

    return (
        <div>
            <input value={title} type="text" onChange={onChangeInputHandler} />
            <Button name={"+"} callBack={onClickButtonHandler}/>
        </div>
    );
};

