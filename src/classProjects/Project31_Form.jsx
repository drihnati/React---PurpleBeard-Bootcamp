import React from 'react';
import { InputText } from 'primereact/inputtext';
import {InputNumber} from 'primereact/inputnumber';
import { Checkbox } from 'primereact/checkbox';

import './Project31_Styles.css';

import _NavBar from './_NavBarCP'

function Project31_Form() {
  return (
      <div className="app-container">
      <_NavBar /> 
      <div className="content">
      <form action="#">
      <label htmlForm="firstName">First Name</label>
      <InputText required id="firstName" />
      <br />
      <label htmlForm="lastName">Last Name</label>
      <InputText required id="lastName" />
      <br />
      <label htmlForm="age">Age</label>
      <InputNumber id="age" />
      <br />
      <label htmlForm="alive">Are you Alive?</label>
      <Checkbox id='alive'></Checkbox>
      <br />
      <button>Click Me</button>
      </form>
      </div>
      </div>
  );
}

export default Project31_Form;