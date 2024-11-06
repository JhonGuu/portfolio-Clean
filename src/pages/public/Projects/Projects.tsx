import { useState } from 'react';
import { ProjectCard } from '../../../components';
import { ProjectsNavbar } from '../../../components/PorjectsNavbar';
import { projects as projectData } from '../../../data';
import style from './projects.module.css';
import { Category } from '../../../types';
import { motion } from 'framer-motion';
import { fadeInUp, routeAnimation, stagger } from '../../../animations';
function Projects() {
  const [projects, setProjects] = useState(projectData);
  const [active, setActive] = useState('all');

  const [showDetail, setShowDetail] = useState<number | null>(null);

  const handlerFilterCategory = (category: Category | 'all') => {
    if(category === 'all'){
      setProjects(projectData);
      setActive(category);
      return;
    }
     const newArray = projectData.filter(project => project.category.includes(category));
     setProjects(newArray);
     setActive(category);
  }
  return (
    <motion.div className={style.divGeneral} variants={routeAnimation} initial='initial' animate='animate' exit={'exit'}>
      <ProjectsNavbar handlerFilterCategory={handlerFilterCategory } active={active} />
      <motion.div className={style.divGeneralCards} variants={stagger} initial='initial' animate='animate'>

        {
          projects.map(project => (
            <motion.div 
              className={style.divCard} 
              variants={fadeInUp}
              key={project.id}
              style={{zIndex: showDetail === project.id ? 100 : 1}	}
            >
              <ProjectCard  project={project} showDetail={showDetail} setShowDetail={setShowDetail} />
            </motion.div>
          ))
        }
      </motion.div>
    </motion.div>
  )
}
export default Projects