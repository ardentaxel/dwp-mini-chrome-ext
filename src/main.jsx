import React from 'react';
import ReactDom from 'react-dom/client';
import Card from "./components/Card";
import './index.css';
import Student from "./Student";

const pks = [
]

let student = new Student("Beatrix Fleming",pks)

ReactDom.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Card student={student} className="card"/>
  </React.StrictMode>
);
