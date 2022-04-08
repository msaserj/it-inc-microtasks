import React from 'react';
import './App.css';
import {Header} from "./components/Header";
import {Body} from "./components/Body";
import {Footer} from "./components/Footer";
import {carsType, TopCars} from "./components/TopCars";



function App() {
    const topCars: Array<carsType>  = [
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'}
    ]

    return (
        <div className="App">
            <Header titleForHeader={"New Header"}/>
            <Body titleForBody={"New Body"}/>
            <TopCars cars={topCars}/>
            <Footer titleForFooter={"New Footer"}/>
        </div>
    );
}

export default App;
