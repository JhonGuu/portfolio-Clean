import style from './layout.module.css'

 const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) =>  {
  return (
      <div className={style.gridGeneral}>

        <div className={style.gridSidebar}>
          Sidebar
        </div>

        <div className={style.gridDashboard}>
          <main>{children}</main>
        </div>


      </div>

      

    
  )
}
export default Layout