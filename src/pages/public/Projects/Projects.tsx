import { useState } from 'react';
import { ProjectCard } from '../../../components';
import { ProjectsNavbar } from '../../../components/PorjectsNavbar';
import { projects as projectData } from '../../../data';
import style from './projects.module.css';
import { Category } from '../../../types';
function Projects() {
  const [projects, setProjects] = useState(projectData);
  const [active, setActive] = useState('all');

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
    <div className={style.divGeneral}>
      <ProjectsNavbar handlerFilterCategory={handlerFilterCategory } active={active} />
      <div className={style.divGeneralCards}>

        {
          projects.map(project => (
            <div className={style.divCard}>
              <ProjectCard  project={project} key={project.name} />
            </div>
          ))
        }
      </div>
    </div>
  )
}
export default Projects