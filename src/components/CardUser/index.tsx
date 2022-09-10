import { Button } from '../Button'
import {CardUserStyle} from './styled'
type CardUserProps = {
    user:{
        img:string,
        name:string
    },
    textButton:string
}
export function CardUser({user,textButton}:CardUserProps){
    return(
        <CardUserStyle>
            <img src={user.img}/>
            <div className='info'>
                <h3>{user.name}</h3>
               <Button text={textButton}/>
            </div>
        </CardUserStyle>
            
        
    )
}
