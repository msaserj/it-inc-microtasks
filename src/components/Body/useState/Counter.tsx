import React, {useState} from 'react';
import {Button} from "../Buttons/Button";

export const Counter = () => {

    let [count, setCount] = useState(0)
    const onClickIncrement =()=> {
        setCount(++count)
    }
    const onClickReset = () => {
        setCount(0)
    }

    return (
        <div>

            <div>
                <h1>{count}</h1>
            </div>
            <div>
                <Button name={"increment"} callBack={onClickIncrement}/>
                <Button name={"reset"} callBack={onClickReset} />
            </div>
        </div>
    );
};

