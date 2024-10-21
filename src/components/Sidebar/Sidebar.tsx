import style from './sidebar.module.css'
import perfilImage from '../../assets/perfilSinFondo.png'
import {AiFillGithub,AiFillLinkedin,AiFillInstagram} from 'react-icons/ai'
import {GoLocation} from 'react-icons/go'
import {GiTie} from 'react-icons/gi'

 export function Sidebar() {
  return (
    <>
        <
            img src={perfilImage} 
            alt="imagen de perfil" 
            className={style.perfilImage}
            
        />
        <h3 className={style.h3Sidebar}><span className={style.spanJhonguu}>JhonGuu</span>DEV</h3>
        <p className={style.pSidebar}>Web Developer</p>
        <a className={style.aResume}> <GiTie width={6} height={6}/>Download Resume</a>
        {/* Social Icons */}
        <div className={style.socialIcons}>
            <a href="">
                <AiFillGithub className={style.iconSidebar} />
            </a>
            <a href="">
                <AiFillLinkedin className={style.iconSidebar}/>
            </a>
            <a href="">
                <AiFillInstagram className={style.iconSidebar}/>
            </a>
        </div>
        {/* Adress*/}
        <div className={style.adress}>
            <div className={style.locationSidebar}>
                <GoLocation/>
                <span>San Juan, Argentina</span>
            </div>
            <p>arandajuanjose17@gmail.com</p>
            <p>+54 2646265090</p>
        </div>
        {/* Email Button*/}
        <button className={style.buttonSidebar} onClick={() => window.open('mailto:arandajuanjose17@gmail.com')}>Email Me</button>
        <button className={style.buttonSidebar}>Toggle Me</button>

    </>
  )
}
export default Sidebar