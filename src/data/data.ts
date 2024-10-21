import {RiComputerLine} from 'react-icons/ri'
import { IProject, IService, ISkill } from '../types'
import { FaServer } from 'react-icons/fa'
import { MdDeveloperMode } from 'react-icons/md'
import { AiOutlineAntDesign } from 'react-icons/ai'
import { BsCircleFill } from 'react-icons/bs'



export const services:IService[] = [
    {
        title: "Frontend Engineer",
        about: "I can build a beatiful and scalable SPA using <b>ReactJS</b>, <b>Typescript</b>, <b>CSS</b> and <b>HTML</b>",
        Icon: RiComputerLine
    },
    {
        title: "Backend Dev",
        about: "Handle database, server, api using <>Express</> and <b>NodeJS</b>",
        Icon: FaServer
    },
    {
        title: "Competitive Coder",
        about: "A daily problem solver for <b>Competitive Programming</b> problems",
        Icon: MdDeveloperMode
    },
    {
        title: "UI/UX Designer",
        about: "Highly skilled in <b>Figma</b> and <b>Prototyping</b>",
        Icon: AiOutlineAntDesign
    },
    {
        title: "UI/UX Designer",
        about: "Highly skilled in <b>Figma</b> and <b>Prototyping</b>",
        Icon: AiOutlineAntDesign
    },
    {
        title: "UI/UX Designer",
        about: "Highly skilled in <b>Figma</b> and <b>Prototyping</b>",
        Icon: AiOutlineAntDesign
    },{
        title: "UI/UX Designer",
        about: "Highly skilled in <b>Figma</b> and <b>Prototyping</b>",
        Icon: AiOutlineAntDesign
    }
]

export const lenguages:ISkill[] = [
    {
        name: 'Python', 
        level: '0%',
        Icon: BsCircleFill
    },
    {
        name: 'Javacript', 
        level: '80%',
        Icon: BsCircleFill
    },
    {
        name: 'React ', 
        level: '70%',
        Icon: BsCircleFill
    },
    {
        name: 'Typescript', 
        level: '60%',
        Icon: BsCircleFill
    },
    {
        name: 'Java', 
        level: '50%',
        Icon: BsCircleFill
    },

]

export const tools:ISkill[] = [
    {
        name: 'Figma', 
        level: '40%',
        Icon: BsCircleFill
    },
    {
        name: 'Photoshop', 
        level: '60%',
        Icon: BsCircleFill
    },
]

export const projects:IProject[] = [
    {
        name: "COVID Tracker",
        description: "This is a React app that shows a Covid19 tracker",
        image_path: "/images/COVID19.jpg",
        deployed_url: "https://covid-19-tracker-by-sumit.web-app/",
        github_url: "https://github.com/Dey-Sumit/Covid-19-Tracker",
        category: ["react"],
        key_techs: ["React", "Chart.js", "Material UI"],
    },
    {
        name: "COVID Tracker",
        description: "This is a React app that shows a Covid19 tracker",
        image_path: "/images/COVID19.jpg",
        deployed_url: "https://covid-19-tracker-by-sumit.web-app/",
        github_url: "https://github.com/Dey-Sumit/Covid-19-Tracker",
        category: ["mongo"],
        key_techs: ["React", "Chart.js", "Material UI"],
    },
    {
        name: "COVID Tracker",
        description: "This is a React app that shows a Covid19 tracker",
        image_path: "/images/COVID19.jpg",
        deployed_url: "https://covid-19-tracker-by-sumit.web-app/",
        github_url: "https://github.com/Dey-Sumit/Covid-19-Tracker",
        category: ["node"],
        key_techs: ["React", "Chart.js", "Material UI"],
    },
    {
        name: "COVID Tracker",
        description: "This is a React app that shows a Covid19 tracker",
        image_path: "/images/COVID19.jpg",
        deployed_url: "https://covid-19-tracker-by-sumit.web-app/",
        github_url: "https://github.com/Dey-Sumit/Covid-19-Tracker",
        category: ["node"],
        key_techs: ["React", "Chart.js", "Material UI"],
    },
    {
        name: "COVID Tracker",
        description: "This is a React app that shows a Covid19 tracker",
        image_path: "/images/COVID19.jpg",
        deployed_url: "https://covid-19-tracker-by-sumit.web-app/",
        github_url: "https://github.com/Dey-Sumit/Covid-19-Tracker",
        category: ["django"],
        key_techs: ["React", "Chart.js", "Material UI"],
    }
]