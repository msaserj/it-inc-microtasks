import React, {useState} from 'react';
import {Fullinput} from "./Fullinput";

export const Input = () => {
    let [message, setMessage] = useState([
        {message: "message1"},
        {message: "message2"},
        {message: "message3"}
    ])

    const addMessage = (title: string) => {
        let newMessage = {message: title};
        setMessage([newMessage, ...message ])
    }

    return (
        <div>
            <h2>Input</h2>
            <Fullinput addMessage={addMessage}/>

            {message.map((t, index) => {
                return (
                <div key={index}>{t.message}</div>
                )
            })}

        </div>
    );
};

