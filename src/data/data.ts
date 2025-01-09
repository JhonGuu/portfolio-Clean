import { RiComputerLine } from "react-icons/ri";
import { IProject, IService, ISkill } from "../types";
import { FaServer } from "react-icons/fa";
import { MdDeveloperMode } from "react-icons/md";
import { AiOutlineAntDesign } from "react-icons/ai";
import { BsCircleFill } from "react-icons/bs";

export const resume: string =
  "Soy un desarrollador de software de 26 años que hace dos años comenzó su camino en la programación y hace un año decidió dedicarse profesionalmente . Inicié con Java y luego me enfoqué en desarrollo web, aprendiendo HTML, CSS, JavaScript y continuando con tecnologías como TypeScript, React, Tailwind, ShadCN y Next.js. Actualmente, estoy expandiendo mis conocimientos al backend con Express, NestJS, bases de datos como MySQL y PostgreSQL, y siempre busco nuevos desafíos para seguir creciendo como desarrollador full-stack. La programación es mi pasión, y mi objetivo es aportar soluciones innovadoras y de calidad en cada proyecto.";

  export const services: IService[] = [
    {
      title: "Frontend Engineer",
      about:
        "I can build beautiful and scalable SPAs using <b>ReactJS</b>, <b>Next.js</b>, <b>TypeScript</b>, <b>ShadCN</b>, and <b>Tailwind CSS</b>.",
      Icon: RiComputerLine,
    },
    {
      title: "Backend Developer",
      about:
        "I specialize in building robust backend systems with <b>NestJS</b>, <b>Express</b>, and <b>Node.js</b>. I am experienced in working with databases such as <b>MySQL</b>, <b>PostgreSQL</b>, and <b>MongoDB</b>, and ORMs like <b>Prisma</b> and <b>Sequelize</b>.",
      Icon: FaServer,
    },
    {
      title: "Version Control Expert",
      about:
        "Proficient in using <b>Git</b> for version control, including branching, merging, and managing repositories effectively in team environments.",
      Icon: MdDeveloperMode,
    },
    {
      title: "UI/UX Enthusiast",
      about:
        "Skilled in creating modern and user-friendly interfaces using <b>Figma</b> for prototyping and wireframing, ensuring a seamless user experience.",
      Icon: AiOutlineAntDesign,
    },
    {
      title: "Full-Stack Developer",
      about:
        "Capable of handling full-stack development, integrating <b>React</b> with <b>Node.js</b> or <b>Next.js</b> for end-to-end solutions, and connecting frontend to backend seamlessly.",
      Icon: RiComputerLine,
    },
    {
      title: "3D Web Experiences",
      about:
        "Creating immersive 3D experiences using <b>Three.js</b>, with strong expertise in designing performant, visually engaging web applications.",
      Icon: AiOutlineAntDesign,
    },
    {
      title: "Database Management",
      about:
        "Experience in designing and managing relational and non-relational databases, including <b>MySQL</b>, <b>PostgreSQL</b>, <b>MongoDB</b>, and tools like <b>Prisma</b> and <b>Sequelize</b> for efficient data operations.",
      Icon: FaServer,
    },
  ];

export const lenguages: ISkill[] = [
  {
    name: "Python",
    level: "0%",
    Icon: BsCircleFill,
  },
  {
    name: "Javacript",
    level: "80%",
    Icon: BsCircleFill,
  },
  {
    name: "React ",
    level: "70%",
    Icon: BsCircleFill,
  },
  {
    name: "Typescript",
    level: "60%",
    Icon: BsCircleFill,
  },
  {
    name: "Java",
    level: "50%",
    Icon: BsCircleFill,
  },
];

export const tools: ISkill[] = [
  {
    name: "Figma",
    level: "40%",
    Icon: BsCircleFill,
  },
  {
    name: "Photoshop",
    level: "60%",
    Icon: BsCircleFill,
  },
];

export const projects: IProject[] = [
  {
    id: 1,
    name: "COVID Tracker",
    description: "This is a React app that shows a Covid19 tracker",
    image_path: "/images/COVID19.jpg",
    deployed_url: "https://covid-19-tracker-by-sumit.web-app/",
    github_url: "https://github.com/Dey-Sumit/Covid-19-Tracker",
    category: ["react"],
    key_techs: ["React", "Chart.js", "Material UI"],
  },
  {
    id: 2,
    name: "COVID Tracker",
    description: "This is a React app that shows a Covid19 tracker",
    image_path: "/images/COVID19.jpg",
    deployed_url: "https://covid-19-tracker-by-sumit.web-app/",
    github_url: "https://github.com/Dey-Sumit/Covid-19-Tracker",
    category: ["mongo"],
    key_techs: ["React", "Chart.js", "Material UI"],
  },
  {
    id: 3,
    name: "COVID Tracker",
    description: "This is a React app that shows a Covid19 tracker",
    image_path: "/images/COVID19.jpg",
    deployed_url: "https://covid-19-tracker-by-sumit.web-app/",
    github_url: "https://github.com/Dey-Sumit/Covid-19-Tracker",
    category: ["node"],
    key_techs: ["React", "Chart.js", "Material UI"],
  },
  {
    id: 4,
    name: "COVID Tracker",
    description: "This is a React app that shows a Covid19 tracker",
    image_path: "/images/COVID19.jpg",
    deployed_url: "https://covid-19-tracker-by-sumit.web-app/",
    github_url: "https://github.com/Dey-Sumit/Covid-19-Tracker",
    category: ["node"],
    key_techs: ["React", "Chart.js", "Material UI"],
  },
  {
    id: 5,
    name: "COVID Tracker",
    description: "This is a React app that shows a Covid19 tracker",
    image_path: "/images/COVID19.jpg",
    deployed_url: "https://covid-19-tracker-by-sumit.web-app/",
    github_url: "https://github.com/Dey-Sumit/Covid-19-Tracker",
    category: ["django"],
    key_techs: ["React", "Chart.js", "Material UI"],
  },
  {
    id: 6,
    name: "COVID Tracker",
    description: "This is a React app that shows a Covid19 tracker",
    image_path: "/images/COVID19.jpg",
    deployed_url: "https://covid-19-tracker-by-sumit.web-app/",
    github_url: "https://github.com/Dey-Sumit/Covid-19-Tracker",
    category: ["django"],
    key_techs: ["React", "Chart.js", "Material UI"],
  },
  {
    id: 7,
    name: "COVID Tracker",
    description: "This is a React app that shows a Covid19 tracker",
    image_path: "/images/COVID19.jpg",
    deployed_url: "https://covid-19-tracker-by-sumit.web-app/",
    github_url: "https://github.com/Dey-Sumit/Covid-19-Tracker",
    category: ["django"],
    key_techs: ["React", "Chart.js", "Material UI"],
  },
  {
    id: 8,
    name: "COVID Tracker",
    description: "This is a React app that shows a Covid19 tracker",
    image_path: "/images/COVID19.jpg",
    deployed_url: "https://covid-19-tracker-by-sumit.web-app/",
    github_url: "https://github.com/Dey-Sumit/Covid-19-Tracker",
    category: ["django"],
    key_techs: ["React", "Chart.js", "Material UI"],
  },
];
