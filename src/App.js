import React from 'react';
import Card from './Components/Card';
import './App.css';
import data from './data.json';

import Header from './Components/Header';
import Footer from './Components/Footer';


function App() {
    console.log(data)
    let car1 = data[0];
    let car2 = data[1];
    let car3 = data[2];

    return(
        <div className='App'>
            <Header title='Galeria de imagenes con React'></Header>
        <div className='d-flex p-5'>
          <Card img = {car1.imagen} titulo = {car1.titulo} descrip = {car1.descripcion} />
          <Card img = {car2.imagen} titulo = {car2.titulo} descrip = {car2.descripcion} />
          <Card img = {car3.imagen} titulo = {car3.titulo} descrip = {car3.descripcion} />
       
          </div>
          <Footer desc="©2023 -- Todos los derechos reservados" />
       </div>
       
    )

}

export default App;