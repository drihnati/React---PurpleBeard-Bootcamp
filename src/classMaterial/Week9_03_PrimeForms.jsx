import React from 'react'
import { InputText } from 'primereact/inputtext';

import _NavBar from './_NavBarCM';


function Week9_03_PrimeForms() {
  return (
    <div className="app-container">
      <_NavBar />
      <div className="content">
      <form action="#">
      <label htmlForm="input1">First Name</label>
      <input type="text" id="input1" />
      <br />
      <label htmlform="input2">Last Name</label>
      {/* <input type="text" id="input2" /> */}
      <InputText required id="input2" />
      <br />
      <button Type="submit">Submit</button>
      </form>
      </div>
      </div>
  );
}

export default Week9_03_PrimeForms;