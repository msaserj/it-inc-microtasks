import React, {useState} from 'react';

import 'rc-slider/assets/index.css';

import {TwoThumbInputRange} from "react-two-thumb-input-range";
import {DoubleRangeTwo} from "./DoubleRangeTwo";



export const DoubleRange = () => {

    const [value, setValue] = useState<[number,number]>([0, 1000])
    const onValueChange = (values: [number,number]) => {
        setValue(values)
    }
    return (
            <div>
                <h2>InputRange</h2>
                <div >
                    <p>Eritrean Nakfa:</p>
                    <p>
                        {value[0]}Nfk - {value[1]}Nfk

                    </p>
                </div>
                <TwoThumbInputRange  onChange={onValueChange} values={value} min={0} max={1000} />
                <DoubleRangeTwo/>
            </div>
    );
};

