import React, {useState} from 'react';
import {Button} from "../Buttons/Button";
import css from "../TopCars/TopCars.module.css";


type FilterType = "All" | "Dollars" | "Rubls"

export const Babki = () => {

    const [money, setMoney] = useState([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'Rubls', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'Rubls', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'Rubls', value: 50, number: ' v1234567890'},
    ])

    const [filter, setFilter] = useState<FilterType>("All")

    let currentMoney = money
    if(filter === "Dollars") {
        currentMoney = money.filter(t => {
            return t.banknots === "Dollars"
        })
    } else if (filter === "Rubls") {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknots === "Rubls")
    }

    const onClickFilterHandler = (nameButton: FilterType) => {
        setFilter(nameButton)
    }

    return (
        <div>
            <h2>Babki!</h2>
            <Button name={"All"} callBack={() => onClickFilterHandler("All")}/>
            <Button name={"Rubls"} callBack={() => onClickFilterHandler("Rubls")}/>
            <Button name={"Dollars"} callBack={() => onClickFilterHandler("Dollars")}/>
            <table className={css.color}>
                <tbody>
                <tr>
                    <th>Banknots</th>
                    <th>Value</th>
                    <th>Serial number</th>
                </tr>
                {currentMoney.map((t, index) => {
                    return (
                        <tr key={index}>
                            <td> {t.banknots} </td>
                            <td> {t.value} </td>
                            <td> {t.number} </td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    );
};

export default Babki;