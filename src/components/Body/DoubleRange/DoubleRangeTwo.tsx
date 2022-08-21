import React, {useState} from "react";
import css from './DoubleRangeTwo.module.css'
import Range from "rc-slider";
import "rc-slider/assets/index.css";

export const DoubleRangeTwo = () => {
    const sliderValues = [0, 100]

    const [valueRange, setValueRange] = useState<any>(sliderValues)

    const handleChange = (sliderValues: any) => {
        setValueRange(sliderValues);
    };

    return (
        <div className={css.range}>
            <div >
                <p>Eritrean Nakfa:</p>
                <p>
                    {valueRange[0]}Nfk - {valueRange[1]}Nfk

                </p>
            </div>
            <div className="mka__range-btn-align">
                <div className="sliderArea">
                    <Range
                        onChange={handleChange}
                        range
                        allowCross={false}
                        marks={{
                            0: `$ 0`,
                            100: `$ 100`
                        }}
                        min={0}
                        max={100}
                        defaultValue={[40, 60]}
                    />
                </div>
            </div>
        </div>
    );
}
