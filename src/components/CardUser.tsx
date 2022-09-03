import { Button } from './Button'
import './cardUser.css'
type CardUserProps = {
    user:{
        img:string,
        name:string
    }

    textButton:string
    description:string
}
export function CardUser({user,textButton,description}:CardUserProps){
    return(
        <div className="card-user">
            <img src={user.img}/>
            <div className='info'>
                <h3>{user.name}</h3>
                <h6>{description}</h6>
                <Button text={textButton}/>
            </div>
        </div>
    )
}
