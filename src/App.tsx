import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Body} from "./components/Body/Body";
import {Footer} from "./components/Footer/Footer";
import {carsType, TopCars} from "./components/Body/TopCars/TopCars";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import {Buttons} from "./components/Body/Buttons/Buttons";



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
                    <Route path="/" element={<Body  titleForBody={"New Body"}/>} />
                    <Route path="/topcars" element={<TopCars  cars={topCars}/>} />
                    <Route path="/buttons" element={<Buttons />} />
                </Routes>
                {/*<Body titleForBody={"New Body"}/>*/}
            </div>
            <Footer titleForFooter={"New Footer"}/>
        </div>


    </BrowserRouter>

    );
}

export default App;
