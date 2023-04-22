
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Chart as ChartJS,CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend,} from 'chart.js';
import Navbar1 from '../../Components/Navbar1p2';
import Navbar2 from '../../Components/Navbar2p2';
import img1 from "../../assets/images/icon.png";
import img2 from "../../assets/images/Vector.png";
import './gsprojectdetail.css';
import img3 from "../../assets/images/iconpdf.png";
import Slideshow from '../../Components/slideshow';
import NextNavbar from '../../Components/projects-page/Projects-Navbar/NextNavbar.js';
//import Graph from '../../Components/gsprojectdetail/graph.js'
import { Bar } from "react-chartjs-2";
//import { Chart as ChartJS } from "chart.js/auto";
import { useState } from "react";
import { UserData } from "../../Components/gsprojectdetail/barchartdata.js";
import DatatablePage from "../../Components/gsprojectdetail/table.js";
import { PieChartgs } from './piechartgs';
import img4 from "../../assets/images/iconpdf2.png";
import { useRef } from 'react';
import { useHistory } from 'react-router-dom';
//import faker from "faker";
import { useLocation } from 'react-router-dom';






ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);



function GSProjectdetail() {

    const location = useLocation();
    const id = location.pathname.split("/").pop();

    const history = useHistory();

    const redirectToClose = () =>{

        const data = {
            "project_id": id,
            "project_title": "Project Title",
            "project_description": "Project Description",
        }

        history.push('/closeproject',data);
    }

    const chartOptions = {
        plugins: {
        // showScale: true,
        // pointDot: true,
        // showLines: true,
        //showLines: true,
        
        // title: {
        //     display: true,
        //     text: 'Chart.js Bar Chart'
        // },
    
        legend: {
            display:false,
        },
    
        scales: {
          yAxes: [{
              ticks: {
                  beginAtZero:true,
                  min: 0,
                  max: 100    
              },
              gridLines: {
                display:false
            }  
            }]
         }}
    }

    const ref1= useRef()
    const [see,setSee]=useState("more")
    const [userData, setUserData] = useState({
      labels: UserData.map((data) => data.year),
      datasets: [
        {
          label: "Inflow",
          data: UserData.map((data) => data.inflow),
          backgroundColor: [
            "#f3ba2f",
          ],
        //   borderColor: "black",
        //   borderWidth: 2,
        },
      ],
    });
    const clickhandle=()=>{
        if(ref1.current.style.height=='40vh'|| ref1.current.style.height==""){
            ref1.current.style.height='100%'
            setSee("less")
        }
        else{
            ref1.current.style.height='40vh'
            setSee("more")
        }
            
    }
    return (
        <Router>
                <NextNavbar />
                
                <div className="main">
                <div className="navigatorBar">
                    <div>
                        <img src={img1} className="" alt=""/>
                    </div>
                    <div className="linkstab">
                        <a href="#">Projects</a> <img src={img2} className="arrowsmall"/> <a href="#">Technical Board </a> <img src={img2} className="arrowsmall" alt=""/> <a href="#">Campus Rush</a>
                    </div>    
                </div>
                <div className='buttoncontainer'>
                    <a href="#" style={{textDecoration: 'none'}}><button className="Buttonp3">Technical</button></a>
                    <a href="#" style={{textDecoration: 'none'}}><button className="Buttonp3">Coding</button></a>
                    <a href="#" style={{textDecoration: 'none'}}><button className="Buttonp3">Project</button></a>
                </div>
                <div className='projectcontainer'>
                    <div className='projectinfo'>
                        <div className="Header4p2">Campus Rush</div>
                        <div className="Subtitle4p2">I'll give you a subtitle soon</div>
                        <div className="Header5p2"><p>About Project</p></div>
                        <div style={{display:'flex', flexDirection:'column'}}>
                        <div className="para3p2" ref={ref1}>Lorem ipsum dolor sit amet consectetur. Nunc et tincidunt dui vitae facilisi sed sed etiam. Vestibulum vel urna id vel nulla ullamcorper interdum viverra dictum. Facilisi urna gravida eget pretium a mi. Consectetur non dignissim in nam. Pharetra lectus purus cras dui magnis egestas leo quam adipiscing. Volutpat nascetur faucibus pharetra at eget eu lorem. Blandit velit condimentum condimentum et in quam pulvinar. Donec purus nisi tellus felis montes libero mauris. Morbi massa rhoncus malesuada quis ut. Purus leo  Volutpat nascetur faucibus pharetra at eget eu lorem. Blandit velit condimentum condimentum et in quam pulvinar. Donec purus nisi tellus felis montes libero mauris. Morbi massa rhoncus malesuada quis ut. Purus leo  Volutpat nascetur faucibus pharetra at eget eu lorem. Blandit velit condimentum condimentum et in quam pulvinar. Donec purus nisi tellus felis montes libero mauris. Morbi massa rhoncus malesuada quis ut. Purus leo </div>
                        <div>
                        <button className="seemorebtn" onClick={clickhandle}>See {see}</button>
                        </div>
                        
                        </div>
                        {/* <button  className="Buttonp5"><a href="#" style={{textDecoration: 'none'}}>Donate Now</a></button> */}
                    </div>
                    <div className="projectimage"><Slideshow/></div>
                </div>
                <div className='infocontainer'>
                    <div className='graphtablecontainer'>
                        <div className='Header4p2'>Inflow Record</div>
                        <div className='elementbox' style={{width:"50vw"}}><DatatablePage/></div>
                        <div className='Header4p2'>Inflow Graph</div>
                        <div className='elementbox'><div><Bar data={userData} options={chartOptions}/></div></div>
                        <div className='Header4p2'>Outflow Record</div>
                        <div className='elementbox' style={{width:"50vw"}}><DatatablePage/></div>
                        <div className='Header4p2'>Outflow Graph</div>
                        <div className='elementbox' ><div><Bar data={userData} options={chartOptions}/></div></div>
                    </div>
                    <div className='summary'>
                        <div className='elementbox'>
                            <div className="btncontainerx2">
                                <div>
                                <div className='Header5p2'>Donation Goal</div>
                                <btn className="Buttonp4" style={{width: '20vw',height: '80px',paddingLeft:'30px',justifyContent:'start',paddingTop:'0',paddingBottom:'0',paddingRight:'0'}}>
                                    <a href="#"><img src={img3} className="img3"/>   Details.pdf</a>
                                </btn>
                                </div>
                                <div>
                                <div className='Header5p2'>Total Inflow</div>
                                <btn className="Buttonp4" style={{width: '20vw',height: '80px',paddingLeft:'30px',justifyContent:'start',paddingTop:'0',paddingBottom:'0',paddingRight:'0'}}>
                                    <a href="#"><img src={img3} className="img3"/>   Details.pdf</a>
                                </btn>
                                </div>
                                <div>
                                <div className='Header5p2'>Total Outflow</div>
                                <btn className="Buttonp4" style={{width: '20vw',height: '80px',paddingLeft:'30px',justifyContent:'start',paddingTop:'0',paddingBottom:'0',paddingRight:'0'}}>
                                    <a href="#"><img src={img3} className="img3"/>   Details.pdf</a>
                                </btn>
                                </div> 
                                <div>
                                <div className='Header5p2'>Required Amount</div>
                                <btn className="Buttonp4" style={{width: '20vw',height: '80px',paddingLeft:'30px',justifyContent:'start',paddingTop:'0',paddingBottom:'0',paddingRight:'0'}}>
                                    <a href="#"><img src={img3} className="img3"/>   Details.pdf</a>
                                </btn> 
                                </div>
                                <div>
                                <div className='Header5p2'>Top Donor</div>
                                <btn className="Buttonp4" style={{width: '20vw',height: '80px',paddingLeft:'30px',justifyContent:'start',paddingTop:'0',paddingBottom:'0',paddingRight:'0'}}>
                                    <a href="#"><img src={img3} className="img3"/>   Details.pdf</a>
                                </btn>
                                </div> 
                            </div>
                        </div>
                        <div style={{marginTop:'15vh'}}>
                                <PieChartgs />
                        </div>
                    </div>
                </div>





                

                <div className="videobar" style={{
                    height:"750px",
                    paddingTop:"5%",
                    paddingBottom:"5%",
                }}>
                    <div className="Header5p2">Project Videos</div>
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/RzVvThhjAKw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="infobarflexgrid">
                    <div>
                        <p className="Header5p2" style={{paddingTop:'0'}}>How will we use your money</p>
                        <ul style={{color:'#233A3F',lineHeight:'24px'}}>
                            <li>Lorem ipsum dolor sit amet consectetur. Nunc et tincidunt dui vitae facilisi sed sed etiam. Vestibulum vel urna id vel nulla ullamcorper interdum viverra dictum. Facilisi urna gravida </li>
                            <li>eget pretium a mi. Consectetur non dignissim in nam. Pharetra lectus purus cras dui magnis egestas leo quam adipiscing. Volutpat n</li>
                            <li>ascetur faucibus pharetra at eget eu lorem. Blandit velit condimentum condim</li>
                            <li>entum et in quam pulvinar. Donec purus nisi tellus felis montes libero mauris. Morbi massa rhoncus malesuada quis ut. Purus leo </li>
                        </ul>
                    </div>
                    <div className="btncontainerx">
                        <btn className="Buttonp15" style={{width: '20vw',height: '80px',paddingLeft:'30px',justifyContent:'start',paddingTop:'0',paddingBottom:'0',paddingRight:'0'}}>
                            <a href="#"><img src={img4} className="img3"/>   Details.pdf</a>
                        </btn>
                        <btn onClick = {()=> redirectToClose } className="Buttonp4" style={{width: '20vw',height: '80px',paddingLeft:'30px',justifyContent:'start',paddingTop:'0',paddingBottom:'0',paddingRight:'0'}}>
                            <a href="#">Close Event</a>
                        </btn> 
                    </div>
                </div> 
            </div>   
        </Router>
    );
}

export default GSProjectdetail;