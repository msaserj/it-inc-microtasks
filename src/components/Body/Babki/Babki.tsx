import React, {useState} from 'react';
import {Button} from "../Buttons/Button";


export const Babki = () => {

    const [money, setMoney] = useState([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    ])

    const [filter, setFilter] = useState("all")

    let currentMoney = money
    if(filter === "Dollars") {
        currentMoney = money.filter(filteredMoney => filteredMoney.banknots === "Dollars")
    } else if (filter === "Rubls") {
        currentMoney = money.filter(filteredMoney => filteredMoney.banknots === "RUBLS")
    }

    const onClickFilterHandler = (nameButton: string) => {
        setFilter(nameButton)
    }

    return (
        <div>
            <ul>
                {currentMoney.map((t, index) => {
                    return (
                        <li key={index}>
                            <span> {t.banknots} </span>
                            <span> {t.value} </span>
                            <span> {t.number} </span>
                        </li>
                    )
                })}
            </ul>
            <Button name={"All"} callBack={() => onClickFilterHandler("all")}/>
            <Button name={"Rubls"} callBack={() => onClickFilterHandler("Rubls")}/>
            <Button name={"Dollars"} callBack={() => onClickFilterHandler("Dollars")}/>
        </div>
    );
};

export default Babki;