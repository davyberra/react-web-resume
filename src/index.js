import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const name = 'Davy Berra';
const element = <h1>Hello, {name}</h1>;

reactDom.render(
    element,
    document.getElementById('root')
);