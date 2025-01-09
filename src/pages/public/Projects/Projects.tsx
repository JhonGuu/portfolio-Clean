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
    <motion.div className='py-2 px-5 h-[65vh] overflow-scroll' variants={routeAnimation} initial='initial' animate='animate' exit={'exit'}>
      <ProjectsNavbar handlerFilterCategory={handlerFilterCategory } active={active} />
      <motion.div className='grid grid-cols-12 gap-4 my-3 mx-0' variants={stagger} initial='initial' animate='animate'>

        {
          projects.map(project => (
            <motion.div 
              className='z-0 relative col-span-12 p-2 bg-[#1d1d1d] rounded-lg md:col-span-6 lg:col-span-4' 
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