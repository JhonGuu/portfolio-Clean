import { FunctionComponent } from "react"
import { ISkill } from "../../types"
import style from './Bar.module.css'

export const Bar:FunctionComponent<{data:ISkill}> =  ({data:{Icon, level, name }}) => {
    
  return (
    <div className={style.divGeneral}>
      <div className={style.divBar} style={{width: level}}>
        <Icon className={style.iconBar}/>
        {name}
      </div>
    </div>
  )
}
