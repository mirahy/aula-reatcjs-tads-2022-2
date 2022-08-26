import {CardUser} from "./components/CardUser"

import './global.css'
function App() {
  let users = [
    {
      img:'https://randomuser.me/api/portraits/women/66.jpg',
      name:'Cassandra Wilson'
    },
    {
      img:'https://randomuser.me/api/portraits/men/20.jpg',
      name:'Henry Dean'
    },
    {
      img:'https://randomuser.me/api/portraits/women/29.jpg',
      name:'Nina Freeman'
    }
  ]
  return (
    <div className="App">
     <CardUser user={users[0]}/>
     <CardUser user={users[1]}/>
     <CardUser user={users[2]}/>
    </div>
  )
}

export default App
