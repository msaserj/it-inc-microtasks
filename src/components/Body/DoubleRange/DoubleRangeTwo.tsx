import React, { Component } from "react";
// import "./styles.css";
import Range from "rc-slider";
import "rc-slider/assets/index.css";

class CarSlider extends Component {
    state = { sliderValues: [0, 100] };

    handleChange = (sliderValues: any) => {
        this.setState({ sliderValues });
    };

    render() {
        const { sliderValues } = this.state;

        return (
            <div className="mka__range-alignment">
                <div className="mka__range-text">
                    <p>Preisklasse:</p>
                    <p>
                        {sliderValues[0]}€ - {sliderValues[1]}€
                    </p>
                </div>
                <div className="mka__range-btn-align">
                    <div className="mka__range-width">
                        <Range
                            range
                            allowCross={false}
                            onChange={this.handleChange}
                            defaultValue={[40, 60]}
                            min={0}
                            max={100}
                        />
                    </div>
                    <button className="mka__range-button">Filter</button>
                </div>
            </div>
        );
    }
}

export default CarSlider;