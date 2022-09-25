import * as React from "react";
//import logoBarraNav from "../assets/chat-icon-blue.jpg";
const BarraNavegacion = (props) => {
  return (
    <nav className="chat-nav-bar">
      <img className="chat-na-avatar" src={props.logoBarraNavegacion} width="55" />
      <ul>
        <li>Mensajes</li>
        <li>Configuraciones</li>
        <li>Contactos</li>
        <li>Perfil</li>
      </ul>
    </nav>
  );
};
export default BarraNavegacion;
