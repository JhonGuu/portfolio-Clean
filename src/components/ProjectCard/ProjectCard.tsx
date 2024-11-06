import { FunctionComponent} from "react"
import { IProject } from "../../types"
import { AiFillGithub, AiFillProject } from "react-icons/ai"
import { IoMdCloseCircleOutline } from "react-icons/io"
import style from './ProjectCard.module.css'
import {motion} from 'framer-motion'
import { fadeInUp, stagger } from "../../animations"

export const ProjectCard: FunctionComponent<{

   project: IProject; 
   showDetail: number |null; 
   setShowDetail: (id:null | number) => void; 
  
  }> = ({
    project: {
      name,
      description,
      image_path,
      deployed_url,
      github_url,
      category,
      key_techs,
      id
    },
    showDetail,
    setShowDetail
  }) => {
  
    return (
      <div>
        <img
          src={image_path}
          alt={name}
          className={style.imageProject}
          width={300}
          height={150}
          onClick={() => setShowDetail(id)}
        />
        <p className={style.nameProject}>{name}</p>
        
        {showDetail === id && (
          <div className={style.details}>
            <motion.div variants={stagger} initial="initial" animate="animate">
              <motion.div variants={fadeInUp} className={style.divImage} >
                <img
                  src={image_path}
                  alt={name}
                  style={{overflow: 'hidden'}}
                  width={200}
                  height={150}
                />
              </motion.div>
  
              <motion.div className={style.anchorsCard} variants={fadeInUp}>
                <a href={github_url} className={style.anchor}>
                  <AiFillGithub />
                  <span>GitHub</span>
                </a>
                <a href={deployed_url} className={style.anchor}>
                  <AiFillProject />
                  <span>Project</span>
                </a>
              </motion.div>
            </motion.div>
  
            <motion.div variants={stagger} initial="initial" animate="animate">
              <motion.h2 variants={fadeInUp} className={style.h2TitleTech}>{name}</motion.h2>
              <motion.h3 variants={fadeInUp} className={style.h3DescTech}>{description}</motion.h3>
              <motion.div variants={fadeInUp} className={style.divKeyTechs}>
                {key_techs.map((tech) => (
                  <span key={tech} className={style.spanKeyTech}>
                    {tech}
                  </span>
                ))}
              </motion.div>
            </motion.div>
  
            <button onClick={() => setShowDetail(null)} className={style.closeBtn}>
                <IoMdCloseCircleOutline size={35} />
            </button>
            
          </div>
        )}
      </div>
    );
  };
  