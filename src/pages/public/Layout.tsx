
import Navbar from '../../components/NavBar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import style from './layout.module.css'

 const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) =>  {
  return (
      <div className={style.divGeneral}>

        <div className={style.divSidebar}>
          <Sidebar/>
        </div>

        <div className={style.divDashboard }>
          <Navbar/>
          <main>{children}</main>
        </div>


      </div>

      

    
  )
}
export default Layout