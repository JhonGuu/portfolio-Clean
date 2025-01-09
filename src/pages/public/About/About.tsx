import { fadeInUp, routeAnimation, stagger } from "../../../animations";
import { ServiceCard } from "../../../components";
import { services } from "../../../data";
import { motion } from "framer-motion";
function About() {
  const highlightClass = "text-[#f77bbf] font-semibold";

  const description = (
    <>
      Soy un <span className={highlightClass}>Desarrollador de software</span>{" "}
      de 26 años que hace dos años comenzó su camino en la programación y hace
      un año decidió dedicarse profesionalmente. Inicié con{" "}
      <span className={highlightClass}>Java</span> y luego me enfoqué en
      desarrollo web, aprendiendo{" "}
      <span className={highlightClass}>HTML, CSS, JavaScript</span> y
      continuando con tecnologías como{" "}
      <span className={highlightClass}>
        TypeScript, React, Tailwind, ShadCN y Next.js
      </span>
      . Actualmente, estoy expandiendo mis conocimientos al{" "}
      <span className={highlightClass}>Backend</span> con{" "}
      <span className={highlightClass}>Express, NestJS</span>, bases de datos
      como <span className={highlightClass}>MySQL y PostgreSQL</span>, y siempre
      busco nuevos desafíos para seguir creciendo como desarrollador{" "}
      <span className={highlightClass}>Full-Stack</span>. La programación es mi{" "}
      <span>pasión</span>, y mi objetivo es aportar soluciones{" "}
      <span className={highlightClass}>innovadoras</span> y de{" "}
      <span className={highlightClass}>calidad</span> en cada proyecto.
    </>
  );
  return (
    <motion.div
      className="flex flex-col px-6 pt-1 grow-[2]"
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit={"exit"}
    >
      <h5 className="mx-3 text-lg text-white">{description}</h5>
      <div className="flex flex-col p-4 mt-5 bg-[#0d0d0d] -mx-6 grow-[1]">
        <h6 className="my-3 text-xl font-bold text-[#f77bbf] tracking-wider">
          What I Offer
        </h6>
        <motion.div
          className="grid gap-6 lg:grid-cols-2"
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          {services.map((service) => (
            <motion.div
              className="bg-[#1d1d1d] rounded-lg text-white"
              key={service.title}
              variants={fadeInUp}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
export default About;
