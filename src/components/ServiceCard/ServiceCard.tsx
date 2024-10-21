import { FunctionComponent } from "react"
import { IService } from "../../types"
import style from './ServiceCard.module.css'

export const ServiceCard:FunctionComponent<{service:IService}> = ({service:{Icon, title, about}}) => {
    const createMarkup = () => {
        return {__html: about};
    }
  return (
    <div className={style.divGeneral}>
        <Icon className={style.iconSC}/>
        <div>
            <h4 className={style.h4SC}>{title}</h4>
            <p dangerouslySetInnerHTML={createMarkup()}/>
        </div>
    </div>
  )
}
