import React from 'react';
import { Image } from 'react-bootstrap';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Image src="ruta-de-la-imagen" roundedCircle />
      <h1>Título de la barra lateral</h1>
      <p>Descripción de la barra lateral</p>
    </div>
  );
}

export default Sidebar;
