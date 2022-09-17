import {Users} from "phosphor-react";
import {CardUser} from "./components/CardUser/"
import { FormUser } from "./components/FormUser";
import {Header} from "./components/Header"
import { List } from "./components/List";
import { GlobalStyle } from "./globalStyle";
import  'bootstrap/dist/css/bootstrap.min.css' ;

function App() {
  const logo = <Users size={60} color="#f5f5f5" weight="duotone" />
  return (
    <div className="App">
      <GlobalStyle/>
      <Header title="Lista de Usuários" logo={logo}/>
      <FormUser/>
    </div>
  )
}

export default App
