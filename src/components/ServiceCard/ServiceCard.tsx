import { FunctionComponent } from "react"
import { IService } from "../../types"

export const ServiceCard:FunctionComponent<{service:IService}> = ({service:{Icon, title, about}}) => {
    const createMarkup = () => {
        return {__html: about};
    }
  return (
    <div className='flex items-center justify-between p-4 mr-4'>
        <Icon className='w-32 h-20 mr-4 text-[#f77bbf]'/>
        <div>
            <h4 className='font-bold text-[#f77bbf] '>{title}</h4>
            <p dangerouslySetInnerHTML={createMarkup()}/>
        </div>
    </div>
  )
}
