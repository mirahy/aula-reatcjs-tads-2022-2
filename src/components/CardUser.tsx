import { Button } from './Button'
import './cardUser.css'
type CardUserProps = {
    user:{
        img:string,
        name:string
    }
}
export function CardUser({user}:CardUserProps){
    return(
        <div className="card-user">
            <img src={user.img}/>
            <div className='info'>
                <h3>{user.name}</h3>
                <Button text='Ver Perfil'/>
            </div>
        </div>
    )
}
