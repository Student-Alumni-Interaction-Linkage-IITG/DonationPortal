// All classNames assigned to various elements contain "pp-" in the beginning , which stands for "profile page"
// tb ---> technical board .
// cb ---> cultural board .


import React from 'react';
import ProfileNavbar from './profileNavbar';
import AboutCard from './aboutCard';
import Cards from '../../Components/projects-page/Project-Card/Project-Card.jsx';
import ProjectsNav from './projectsNav';

function myProfile() {
  return (
    <div className='myProfile'>
      <div className='pp-header'>
        <ProfileNavbar />
      </div>
      <div className='ppbody'>
        <div className='ppleftbody'>
          <AboutCard />
        </div>
        <div className='pprightbody'>

          <div className='pprightbody1'>
            <div className='projectOptions'>
              <ProjectsNav />
            </div>
          </div>
          <div className='pprightbody2'>
            
            <h2 style={{margin: 30}}>Technical Board</h2>
            <div className='pp-techprojects'>
              <Cards />
              <Cards />
              {/* <div className='pp-cards'></div>
              <div className='pp-cards'></div> */}
            </div>
            <h2 style={{margin: 30}}>Cultural Board</h2>
            <div className='pp-cultprojects'>
              <Cards className="pp-cards"/>
              <Cards className="pp-cards"/>
              {/* <div className='pp-cards'></div>
              <div className='pp-cards'></div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default myProfile