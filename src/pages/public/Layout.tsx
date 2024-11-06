
import { routeAnimation } from '../../animations'
import Navbar from '../../components/NavBar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import style from './layout.module.css'
import { AnimatePresence, motion } from 'framer-motion'

 const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) =>  {
  return (
      <div className={style.divGeneral} >

        <div className={style.divSidebar}>
          <Sidebar/>
        </div>

        <div className={style.divDashboard }>
          <Navbar/>
          <AnimatePresence mode='wait'>
            <main>{children}</main>
          </AnimatePresence>
        </div>

      </div>

      

    
  )
}
export default Layout