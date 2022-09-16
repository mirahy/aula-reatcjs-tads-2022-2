import { useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";
import { getUsers } from "../../api/users";
import { CardUser } from "../CardUser";

export function List(){
    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const listUser = async () =>{
        const list = await getUsers()
        setUsers(list.results)
        setIsLoading(false)   
    }

    useEffect(()=>{
        setTimeout(listUser, 2000);
         
    },[])

    console.log(users)
    return(
       
        <div>
            {isLoading ? <BeatLoader color="#c536d6"/> : ''}
            {
            users.map(user=><CardUser key={user.email} user={user} textButton="Ver Perfil" />)
            }   
        </div>
    )
}