import React, {useState} from 'react';

import {TwoThumbInputRange} from "react-two-thumb-input-range";


export const DoubleRange = () => {

    const [value, setValue] = useState<[number,number]>([1000, 4333])
    const onValueChange = (values: [number,number]) => {
        setValue(values)
    }
    return (
            <div>
                <h2>InputRange</h2>
                <TwoThumbInputRange onChange={onValueChange} values={value} min={1000} max={10000} />
            </div>
    );
};

