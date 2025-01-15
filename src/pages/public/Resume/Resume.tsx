import { Bar } from '../../../components'
import { lenguages, tools } from '../../../data'
import { motion } from 'framer-motion'
import { fadeInUp, routeAnimation } from '../../../animations';
function Resume() {
  return (
    <motion.div className='px-6 py-2 ' variants={routeAnimation} initial='initial' animate='animate' exit={'exit'} >

      {/*education & exp*/}
        <div className='grid gap-6 text-white md:grid-cols-2'>
          <motion.div variants={fadeInUp} initial='initial' animate='animate'>
            <h5 className='text-[#f77bbf] my-3 text-xl font-bold'>Education</h5>
            <div>
              <h5 className='my-2 font-semibold'>Principios de Programacion con java</h5>
              <p className='font-medium'>Curso java Argentina Gobierno 2023</p>
              <p className='my-3'>Curso de 6 meses donde veiamos los principios de la pogramaccion hasta poder hacer una app con java </p>
            </div>
          </motion.div>
          <motion.div variants={fadeInUp} initial='initial' animate='animate'>
            <h5 className='text-[#f77bbf] my-3 text-xl font-bold'>Experience</h5>
            <div>
              <h5 className='my-2 font-semibold'>web developer Junior</h5>
              <p className='font-medium'>Curso java Argentina Gobierno 2023</p>
              <p className='my-3'>Curso de 6 meses donde veiamos los principios de la pogramaccion hasta poder hacer una app con java </p>
            </div>
          </motion.div>
        </div>
      {/*Lenguages y tools */}
      <div className='grid gap-6 md:grid-cols-2'>
        <div>
          <h5 className='text-[#f77bbf] my-3 text-2xl font-bold'>Lenguages & Frameworks</h5>
            <div className='my-2'>
              {
                lenguages.map(lenguage => <Bar data={lenguage} key={lenguage.name}/>)
              }
            </div>
        </div>

        <div>
          <h5 className='text-[#f77bbf] my-3 text-2xl font-bold'>Tools & Softwares</h5>
            <div className='my-2'>
              {
                tools.map(tools => <Bar data={tools} key={tools.name}/>)
              }
            </div>
        </div>
        
      </div>
    </motion.div>
  )
}
export default Resume