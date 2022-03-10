import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.css';

import "primereact/resources/themes/lara-light-indigo/theme.css";  
import "primereact/resources/primereact.min.css";                  
import "primeicons/primeicons.css";                               

import App from './App';
import TempCM from './classMaterial/TempCM';
import Week9_03_PrimeForms from './classMaterial/Week9_03_PrimeForms';
import Week9_02 from './classMaterial/Week9_02';
import Project31_Form from './classProjects/Project31_Form';
import HomeWork1 from './homeWork/HomeWork1';
import HomeWork2 from './homeWork/HomeWork2';
import HomeWork3 from './homeWork/HomeWork3';
import TempCP from './classProjects/TempCP';
import Project32_Form from './classProjects/Project32_Form';



ReactDOM.render(
  // prettier-ignore
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/classMaterial/week9_01" element={<TempCM />}/>
        <Route path="/classMaterial/week9_02" element={<Week9_02 />}/>
        <Route path="/classMaterial/week9_03" element={<Week9_03_PrimeForms />}/>
        <Route path="/classProjects/project30" element={<TempCP />}/>
        <Route path="/classProjects/project31" element={<Project31_Form />}/>
        <Route path="/classProjects/project32" element={<Project32_Form />}/>
        <Route path="/homeWork/homework1" element={<HomeWork1 />}/>
        <Route path="/homeWork/homework2" element={<HomeWork2 />}/>
        <Route path="/homeWork/homework3" element={<HomeWork3 />}/>
      </Routes>
  </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
