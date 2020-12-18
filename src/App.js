import React, { useState } from 'react'

import {VerticalMenu} from './Components/VerticalMenu.js'
import {Header} from './Components/Header.js'

function App() {

    const [toggle, setToggle] = useState(false);
    function toggleMenu() {
        setToggle(!toggle);
    };

  return (
    <div className="App">
        <div>
            <Header toggleMenu={toggleMenu}/>
        </div>
        <div>
            <VerticalMenu toggleMenu={toggle}/>
        </div>

        </div>
  );
}

export default App;
