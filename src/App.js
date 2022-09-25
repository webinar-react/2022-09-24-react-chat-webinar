import "./styles/chat-styles.css";
import "./styles/style.css";
import logo from "./assets/chat-icon-blue.jpg";
import BarraNavegacion from "./components/BarraNavegacion";
import ChatLeft from "./components/ChatLeft/ChatLeft";
import ChatRight from "./components/ChatRight/ChatRight";
import * as React from "react";
import { getDataMessages } from "./fake-database/mensajes";
function App() {
  const [conversaciones, setConversaciones] = React.useState([]);
  async function initData() {
    const resultado = await getDataMessages();
    console.log(resultado);
    setConversaciones(resultado);
  }
  React.useEffect(() => {
    initData();
  }, []);

  return (
    <div className="main-container">
      <BarraNavegacion logoBarraNavegacion={logo} />
      <div className="main-chat-container">
        <div className="chat-container">
          <ChatLeft conversaciones={conversaciones} />

          {/* <!--  RIGHT PART CHAT --> */}
          <ChatRight
            mensajes={conversaciones.length > 0 ? conversaciones[0].mensajes : []}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
