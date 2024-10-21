import { FunctionComponent, useState } from "react"
import { IProject } from "../../types"
import { AiFillGithub, AiFillProject } from "react-icons/ai"
import { MdClose } from "react-icons/md"
import style from './ProjectCard.module.css'

export const ProjectCard:FunctionComponent<{project:IProject}> = ({
    project:{
        name, 
        description, 
        image_path, 
        deployed_url, 
        github_url, 
        category, 
        key_techs
    },
    }) => {

        const [showDetail, setShowDetail] = useState(false)

  return (
    <div>
        <img 
            src={image_path} 
            alt={name} className={style.imageProject} 
            width={100} 
            height={100} 
            onClick={() => setShowDetail(true)}
         />
        <p className={style.nameProject}>{name}</p>
        {
            showDetail && (
                
            

        <div className={style.details}>
            <div>
                <img src={image_path} alt={name} className="" width={100} height={100} />
                <div className={style.anchorsCard}>
                    <a href={github_url} className={style.anchor}>
                        <AiFillGithub/>
                        <span>GitHub</span>
                    </a>
                    <a href={deployed_url} className={style.anchor}>
                        <AiFillProject/>
                        <span>Project</span>
                    </a>
                </div>
            </div>

            <div>
                <h2 className={style.h2TitleTech}>{name}</h2>
                <h3 className={style.h3DescTech}>{description}</h3>
                <div className={style.divKeyTechs}>
                    {
                        key_techs.map(tech => <span key={tech} className={style.spanKeyTech}>{tech}</span>)
                    }
                </div>
            </div>

            <div>
                <button
                onClick={() => setShowDetail(false)}
                className={style.closeBtn}
                >
                    <MdClose size={30} />
                </button>
            </div>
        </div>
        )
    }
    </div>
  )
}