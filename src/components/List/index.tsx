import { useEffect, useState } from "react";
import { getUsers } from "../../api/users";
import { CardUser } from "../CardUser";

export function List(){
    const [users,setUsers] = useState([])

    useEffect(()=>{
        setUsers(getUsers())
    })
    return(
        <div>
            {
            users.map(user=><CardUser key={user.id} user={user} textButton="Ver Perfil" />)
            }   
        </div>
    )
}