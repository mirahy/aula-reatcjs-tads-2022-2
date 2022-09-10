import {Users} from "phosphor-react";
import {CardUser} from "./components/CardUser/"
import {Header} from "./components/Header"
import { GlobalStyle } from "./globalStyle";

function App() {
  const logo = <Users size={60} color="#f5f5f5" weight="duotone" />
  return (
    <div className="App">
      <GlobalStyle/>
      <Header title="Lista de Usuários" logo={logo}/>
    </div>
  )
}

export default App
