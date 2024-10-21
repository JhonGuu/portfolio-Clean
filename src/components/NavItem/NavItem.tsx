import { Link } from "react-router-dom"
import style from './NavItem.module.css'
interface Props  { 
    activeItem: string,
    setActiveItem: Function,
    name:string,
    route: string
}
export const NavItem = ({activeItem, setActiveItem, name, route}:Props) => {
  return (
    activeItem !== name ? (
        <Link to={route}>
            <span className={style.spanLink} onClick={() => setActiveItem(name)}>{name}</span>
        </Link>
    ): null
  )
}
