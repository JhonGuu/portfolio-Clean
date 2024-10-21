import { FunctionComponent } from "react"
import { Category } from "../../types"
import style from './ProjectsNavbar.module.css'

export const NavItem:FunctionComponent<{value: Category | 'all', handlerFilterCategory: Function, active: string}> = ({value, handlerFilterCategory,active}) => {
  let className = style.liNavItem;
  if(active === value) className =  style.active;
    return (
        <li 
        className={className} 
        onClick={() => handlerFilterCategory(value)}>{value}
        </li>
    )
}

export const ProjectsNavbar:FunctionComponent<{handlerFilterCategory: Function, active: string }> = (props) => {
  return (
    <div className={style.divGeneral}>
        <NavItem value="all" {...props}/>
        <NavItem value="react" {...props}/>
        <NavItem value="mongo" {...props}/>
        <NavItem value="django" {...props}/>
        <NavItem value="node" {...props}/>
        
    </div>
  )
}