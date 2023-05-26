import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';



const Footer = () => {
  return (
    <footer className="footer">
  
        <p className="copyright">
          <FontAwesomeIcon icon={faCopyright}/>
          &nbsp;{new Date().getFullYear()} Tu Empresa. Todos los derechos reservados.
        </p>
      
</footer>

  );
};

export default Footer;
