import { Bar } from '../../../components'
import { lenguages, tools } from '../../../data'
import style from './resume.module.css'
import { motion } from 'framer-motion'
import { fadeInUp, routeAnimation } from '../../../animations';
function Resume() {
  return (
    <motion.div className={style.divGeneral} variants={routeAnimation} initial='initial' animate='animate' exit={'exit'} >

      {/*education & exp*/}
        <div className={style.divEducation}>
          <motion.div variants={fadeInUp} initial='initial' animate='animate'>
            <h5 className={style.h5Education}>Education</h5>
            <div>
              <h5 className={style.h5Education2}>Principios de Programacion con java</h5>
              <p className={style.pEducation}>Curso java Argentina Gobierno 2023</p>
              <p className={style.pEducation2}>Curso de 6 meses donde veiamos los principios de la pogramaccion hasta poder hacer una app con java </p>
            </div>
          </motion.div>
          <motion.div variants={fadeInUp} initial='initial' animate='animate'>
            <h5 className={style.h5Education}>Experience</h5>
            <div>
              <h5 className={style.h5Education2}>web developer Junior</h5>
              <p className={style.pEducation}>Curso java Argentina Gobierno 2023</p>
              <p className={style.pEducation2}>Curso de 6 meses donde veiamos los principios de la pogramaccion hasta poder hacer una app con java </p>
            </div>
          </motion.div>
        </div>
      {/*Lenguages y tools */}
      <div className={style.divLenguages}>
        <div>
          <h5 className={style.h5Lenguages}>Lenguages & Frameworks</h5>
            <div className={style.divBars}>
              {
                lenguages.map(lenguage => <Bar data={lenguage} key={lenguage.name}/>)
              }
            </div>
        </div>

        <div>
          <h5 className={style.h5Lenguages}>Tools & Softwares</h5>
            <div className={style.divBars}>
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