import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Body} from "./components/Body/Body";
import {Footer} from "./components/Footer/Footer";
import {carsType, TopCars} from "./components/Body/TopCars/TopCars";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Buttons} from "./components/Body/Buttons/Buttons";
import {Counter} from "./components/Body/useState/Counter";
import {Babki} from "./components/Body/Babki/Babki";
import {Input} from "./components/Body/Input/Input";
import {DoubleRange} from "./components/Body/DoubleRange/DoubleRange";
import {Icons} from "./components/Body/Icons/Icons";




function App() {
    const topCars: Array<carsType> = [
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'}
    ]
    return (
    <BrowserRouter >
        <div className="App">
            <Header titleForHeader={"New Header"} />
            <div>
                <Routes>
                    <Route path="/sanbox-microtasks" element={<Body  titleForBody={"New Body"}/>} />
                    <Route path="/sanbox-microtasks/topcars" element={<TopCars  cars={topCars}/>} />
                    <Route path="/sanbox-microtasks/buttons" element={<Buttons />} />
                    <Route path="/sanbox-microtasks/counter" element={<Counter />} />
                    <Route path="/sanbox-microtasks/babki" element={<Babki />} />
                    <Route path="/sanbox-microtasks/input" element={<Input />} />
                    <Route path="/sanbox-microtasks/doublerange" element={<DoubleRange />} />
                    <Route path="/sanbox-microtasks/icons" element={<Icons />} />
                </Routes>
            </div>
            <Footer titleForFooter={"New Footer"}/>
        </div>
    </BrowserRouter>

    );
}

export default App;
