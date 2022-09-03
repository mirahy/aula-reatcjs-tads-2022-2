import { Users } from "phosphor-react";
import {CardUser} from "./components/CardUser"
import { Header } from "./components/Header";

import './global.css'
function App() {
  let users = [
    {
      img:'https://randomuser.me/api/portraits/women/66.jpg',
      name:'Cassandra Wilson',
      id:1
    },
    {
      img:'https://randomuser.me/api/portraits/men/20.jpg',
      name:'Henry Dean',
      id:2
    },
    {
      img:'https://randomuser.me/api/portraits/women/29.jpg',
      name:'Nina Freeman',
      id:3
    },
    {
      img:'https://randomuser.me/api/portraits/men/95.jpg',
      name:'Joel Porter',
      id:4
    },
    {
      img:'https://randomuser.me/api/portraits/men/41.jpg',
      name:'Javier Parker',
      id:5
    },
    {
      img:'https://randomuser.me/api/portraits/women/8.jpg',
      name:'Vanessa Banks',
      id:6
    }

  ]

  // let cards = []
  // users.forEach(function(user){cards.push(<CardUser user={user} textButton ="Ver perfil"
  // description="Want to create your own customized data generator for your application?
  // Check out our other service RandomAPI!"/>)});

  const logo = <Users size={32} color="#f9f2ff" weight="duotone" />

  return (
    <div className="App">
      <Header title="Lista de Usuários" logo={logo}/>
      {users.map(user => <CardUser key={user.id} user={user} textButton ="Ver perfil"
        description="Want to create your own customized data generator for your application?
        Check out our other service RandomAPI!"/>)}
      
    </div>
  )
}

export default App
