import { FunctionComponent } from "react"
import { ISkill } from "../../types"
import style from './Bar.module.css'
import {motion} from 'framer-motion'

export const Bar:FunctionComponent<{data:ISkill}> =  ({data:{Icon, level, name }}) => {
  const variants = { 
    initial :{
      width: 0,
    },
    animate: {
      width: level,
      transition: { 
        duration: 0.4,
        type: 'spring',
        damping: 10,
        stiffnes:100,
     },
    }
  }
    
  return (
    <div className={style.divGeneral}>
      <motion.div 
        className={style.divBar} 
        style={{width: level}}
        variants={variants}
        initial='initial'
        animate='animate'
      >
        <Icon className={style.iconBar}/>
        {name}
      </motion.div>
    </div>
  )
}
