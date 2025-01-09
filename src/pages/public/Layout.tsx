
import Navbar from '../../components/NavBar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import { AnimatePresence,  } from 'framer-motion'

 const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) =>  {
  return (
      <div className='grid grid-cols-12 gap-6 px-10 my-14 md:px-32 lg:px-20 ' >

        <div className='col-span-12 p-4 items-center bg-[#111111] rounded-2xl lg:col-span-4'>
          <Sidebar/>
        </div>

        <div className='col-span-12 flex flex-col overflow-hidden bg-[#111111] rounded-2xl lg:col-span-8'>
          <Navbar/>
          <AnimatePresence mode='wait'>
            <main>{children}</main>
          </AnimatePresence>
        </div>

      </div>

      

    
  )
}
export default Layout