// import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Cards from '../Components/Card';
import Navbar1 from '../Components/Navbar1p2';
import Navbar2 from '../Components/Navbar2p2';

const Projects = () => {
    return(
        <Router>
            <div className="p2">
                <Navbar1/>
                <Navbar2/>
                <div className="Header1p2">Coding Club</div>
                <div className="Subtitle1p2">I'll give you a subtitle soon</div>
                <div className="CC1p2">
                    <Cards/>
                    <Cards/>
                    <Cards/>
                </div>
                <a href="#" className="anchor1p2">See all projects</a>

                <div className="Header2p2">Coding Club</div>
                <div className="Subtitle2p2">I'll give you a subtitle soon</div>
                <div className="para1p2">Fames pellentesque nulla ultrices purus. Ornare enim purus vitae placerat aliquam purus, consequat in aliquam. Nisl diam sem sit pharetra metus, magnis est. Dui, non aliquet suspendisse imperdiet lobortis sed mauris. Amet facilisis velit justo, magna elementum. Fringilla nisl sed imperdiet dolor nulla tortor viverra gravida venenatis. Pellentesque in scelerisque quam id bibendum. Et gravida sapien ut pretium ullamcorper non fringilla massa id. Pulvinar amet ut enim, interdum cursus.</div>
                <div className="CC2p2">
                    <Cards/>
                    <Cards/>
                    <Cards/>
                </div>
                <a href="#" className="anchor2p2">See all projects</a>

                <div className="Header3p2">Coding Club</div>
                <div className="Subtitle3p2">I'll give you a subtitle soon</div>
                <div className="CC2p2">
                    <div className="para2p2">Fames pellentesque nulla ultrices purus. Ornare enim purus vitae placerat aliquam purus, consequat in aliquam. Nisl diam sem sit pharetra metus, magnis est. Dui, non aliquet suspendisse imperdiet lobortis sed mauris. Amet facilisis velit justo, magna elementum. Fringilla nisl sed imperdiet dolor nulla tortor viverra gravida venenatis. Pellentesque in scelerisque quam id bibendum. Et gravida sapien ut pretium ullamcorper non fringilla massa id. Pulvinar amet ut enim, interdum cursus.</div>
                    <Cards/>
                    <Cards/>
                </div>
                <a href="#" className="anchor3p2">See all projects</a>
            </div>
        </Router>
    );
}

export default Projects;