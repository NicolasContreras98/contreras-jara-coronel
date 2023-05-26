import React from 'react';
import Button from 'react-bootstrap/Button';

const Menu = () => {
  return (
    <div className="menu">
      <Button variant="secondary" > INICIO </Button>
      <Button variant="secondary" > ARCHIVOS </Button>
      <Button variant="secondary" > AYUDA </Button>
      <Button variant="secondary" > ACERCA DE </Button>

    </div>
  );
}

export default Menu;
