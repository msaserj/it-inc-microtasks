import React from "react";
import css from "./TopCars.module.css"

export type carsType = {
    manufacturer: string
    model: string
}

type PropsType = {
    cars: Array<carsType>
}


export const TopCars = (props: PropsType) => {
    return (
        <table className={css.color}>
            <tbody>
            <tr>
                <th>Number</th>
                <th>Car model</th>
                <th>model</th>
            </tr>
                {
                    props.cars.map((t, index) => {
                        return (
                          //  обязательно key, необходимо для virtualdom
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{t.manufacturer}</td>
                                <td>{t.model}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>


    )
}