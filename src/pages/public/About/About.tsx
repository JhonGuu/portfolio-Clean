import { fadeInUp, routeAnimation, stagger } from '../../../animations'
import { ServiceCard } from '../../../components'
import {services} from '../../../data'
import style from './about.module.css'
import {motion} from 'framer-motion'
function About() {
  return (
    <motion.div className={style.divGeneral} variants={routeAnimation} initial='initial' animate='animate' exit={'exit'}>
      <h5 className={style.h5Dashboard}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae ipsum consequatur reprehenderit ducimus aspernatur tempore repudiandae eligendi est fugit veritatis cupiditate, obcaecati, fugiat expedita exercitationem ab corporis? Dicta, nostrum labore.</h5>
      <div className={style.divOffer}>
        <h6 className={style.h6Offer}>What I Offer</h6>
        <motion.div className={style.divServices} variants={stagger} initial='initial' animate='animate'>
          {
            services.map(service => (
              <motion.div 
              className={style.divServiceCard} 
              key={service.title}
              variants={fadeInUp}
              >
                <ServiceCard service={service}/>
              </motion.div>
              
            ))
          }
        </motion.div>
      </div>
    </motion.div>
  )
}
export default About