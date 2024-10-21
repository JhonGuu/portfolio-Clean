import { ServiceCard } from '../../../components'
import {services} from '../../../data'
import style from './about.module.css'
function About() {
  return (
    <div className={style.divGeneral}>
      <h5 className={style.h5Dashboard}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae ipsum consequatur reprehenderit ducimus aspernatur tempore repudiandae eligendi est fugit veritatis cupiditate, obcaecati, fugiat expedita exercitationem ab corporis? Dicta, nostrum labore.</h5>
      <div className={style.divOffer}>
        <h6 className={style.h6Offer}>What I Offer</h6>
        <div className={style.divServices}>
          {
            services.map(service => (
              <div className={style.divServiceCard}>
                <ServiceCard service={service}/>
              </div>
              
            ))
          }
        </div>
      </div>
    </div>
  )
}
export default About