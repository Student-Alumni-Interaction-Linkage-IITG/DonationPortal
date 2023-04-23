//the cllass names are in the form of {projects_classname}

import React from 'react';
import { motion } from 'framer-motion';
import Cardone from '../../Components/projects-page/Project-Card/Project-Card.jsx';
import ProjectsFilter from '../../Components/projects-page/ProjectsFilter';
import NextNavbar from '../../Components/projects-page/Projects-Navbar/NextNavbar.js';
import ProfileCard from '../../Components/projects-page/ProfileCard';
import "./projects.css";

const container = {
  hidden: { opacity: 0, scale: 0.8},
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
      duration: 0.5
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

const Projects = () => {
    return(
       <div className="projects_mainbody">
            <NextNavbar/>
            <div className="projects_innerpage">
                <ProjectsFilter/>
                <div className="projects_projectsmenu">
                    <div className="projects_clubprojects">
                        <div className="projects_header">
                            Technical Board
                        </div>
                        <motion.div className="projects_projectlist"
                            variants={container}
                            initial="hidden"
                            animate="visible"
                        >
                            <Cardone name="Campus Rush" subtitle="Campus Tour Game" desc="Campus Rush is a virtual recreation of the entire campus for freshers and other to roam around and experience the rush" link='../../../assets/Home/CC.png'/>
                            <Cardone name="AsterHF" subtitle="Health" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla dolor lorem, sed vehicula nibh consequat et. Donec id ultrices nunc" link=""/>
                            <Cardone name="CourseHub" subtitle="Study" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla dolor lorem, sed vehicula nibh consequat et. Donec id ultrices nunc" link=""/>
                        </motion.div>
                        <motion.a href="#" className="projects_button" whileHover={{scale: 1.03}}>See all projects</motion.a>
                    </div>
                    <div className="projects_clubprojects">
                        <div className="projects_header">
                            Cultural Board
                        </div>
                        <div className="projects_projectlist"
                            variants={container}
                            initial="hidden"
                            animate="visible"
                        >
                            <Cardone name="AsterHF" subtitle="Health" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla dolor lorem, sed vehicula nibh consequat et. Donec id ultrices nunc" link=""/>
                            <Cardone name="CourseHub" subtitle="Study" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla dolor lorem, sed vehicula nibh consequat et. Donec id ultrices nunc" link=""/>
                            <Cardone name="Campus Rush" subtitle="Campus Tour Game" desc="Campus Rush is a virtual recreation of the entire campus for freshers and other to roam around and experience the rush" link='../../../assets/Home/CC.png'/>
                        </div>
                        <motion.a href="#" className="projects_button" whileHover={{scale: 1.03}}>See all projects</motion.a>
                    </div>
                    <div className="projects_clubprojects">
                        <div className="projects_header">
                            Sports Board
                        </div>
                        <div className="projects_projectlist"
                            variants={container}
                            initial="hidden"
                            animate="visible"
                        >
                            <Cardone name="CourseHub" subtitle="Study" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla dolor lorem, sed vehicula nibh consequat et. Donec id ultrices nunc" link=""/>
                            <Cardone name="Campus Rush" subtitle="Campus Tour Game" desc="Campus Rush is a virtual recreation of the entire campus for freshers and other to roam around and experience the rush" link='../../../assets/Home/CC.png'/>
                            <Cardone name="AsterHF" subtitle="Health" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla dolor lorem, sed vehicula nibh consequat et. Donec id ultrices nunc" link=""/>
                        </div>
                        <motion.a href="#" className="projects_button" whileHover={{scale: 1.03}}>See all projects</motion.a>
                    </div>
                </div>
            </div>
       </div>
    );
}

export default Projects;
