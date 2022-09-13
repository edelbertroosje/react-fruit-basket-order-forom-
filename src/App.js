import React, {useState} from 'react';
import './App.css';
import Buttons from "./components/Buttons";
import Form from "./components/Form";
import logo from "./assets/screenshot-logo.png";

function App() {

    //set functions for the fruits
    const [aardbei, setAardbei] = useState(0);
    const [banaan, setBanaan] = useState(0);
    const [apple, setApple] = useState(0);
    const [kiwi, setKiwi] = useState(0);
    const order = `aardbei: ${aardbei} banaan: ${banaan} appel: ${apple} kiwi: ${kiwi}` ;
    console.log(order)


  //  reset function
  function reset (){
      setBanaan(0);
      setApple(0);
      setAardbei(0);
      setKiwi(0);
  }
    return (
        <>
            <img src={logo} alt="photo"/>
            <Buttons name="🍓 Aardbei" fruit={aardbei} setFruit={setAardbei}/>
            <Buttons name="🍌 Banaan" fruit={banaan} setFruit={setBanaan}/>
            <Buttons name="🍎 Appels" fruit={apple} setFruit={setApple}/>
            <Buttons name="🥝 Kiwi's" fruit={kiwi} setFruit={setKiwi}/>
            <button className="reset" onClick={reset}>Reset</button>
            <Form />
        </>
    );
}

export default App;
