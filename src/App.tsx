import React, {useState} from 'react';
import './App.css';
import {Header} from "./components/Header";
import {Body} from "./components/Body";
import {Footer} from "./components/Footer";
import {NewComponent} from "./components/NewComponent";



function App() {
    let [cars, setCars] = useState([
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'}
    ]);

    return (
        <div className="App">
            <Header titleForHeader={"New Header"}/>
            <Body titleForBody={"New Body"}/>
            {/*<NewComponent cars={cars}/>*/}
            <Footer titleForFooter={"New Footer"}/>
        </div>
    );
}

export default App;
