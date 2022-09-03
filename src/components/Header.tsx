import { ReactNode } from 'react'
import './Header.css'

type HeaderProps = {
    title:string
    logo:ReactNode
}
export function Header({title,logo}:HeaderProps){

    return(
      <header className='header'>
        <div className='logo'>{logo}</div>
        <h1>{title}</h1>
      </header>  
    )
}