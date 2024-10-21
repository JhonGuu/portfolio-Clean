//import { useState } from "react";
import { useState } from 'react';
import style from './Navbar.module.css'
import { NavItem } from '../NavItem';



export function Navbar() {
    const [activeItem, setActiveItem] = useState<string>('');  
  return (
    <div className={style.divGeneral}>
         <span className={style.spanActiveItem}>{activeItem}</span>
        <div className={style.divItem}>
            <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name='Dashboard' route='/'/>
            <NavItem  activeItem={activeItem} setActiveItem={setActiveItem} name='About' route='/about'/>
            <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name='Projects' route='/projects'/>
            <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name='Resume' route='/resume'/>
        </div>      
    </div>
  )
}
export default Navbar