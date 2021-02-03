// import React from 'react'
import './App.css';

import whatsappImage from './assets/whatsapp.png'
import Myvideo from './assets/videoPlanet.mp4'


function App() {
return (
 

<div className="App">

    <h1 className="Red">Insaf Said</h1>

   <img src="./whatsapp2.png" alt="firstimg" style={{ width: "30%" }} />
   <br/>
   <img src={whatsappImage} alt="secondimg" style={{ width: "30%" }} />

      
   {/* <img src="whatsapp2.png" alt="" style={{ width: "30%" }} />

    <img src={whatsappImage2} alt="" style={{ width: "30%" }} /> */}

    <div>
      <video width="{320}" height="{240}" controls>
        <source src={Myvideo} type="video/mp4" />
      </video>
    </div>

</div>
)}
  
export default App;
