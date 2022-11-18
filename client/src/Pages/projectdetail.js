
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar1 from '../Components/Navbar1p2';
import Navbar2 from '../Components/Navbar2p2';
import img1 from "../assets/images/icon.png";
import img2 from "../assets/images/Vector.png";
import img3 from "../assets/images/iconpdf.png";
import Slideshow from '../Components/slideshow';
const Projectdetail = () => {
    return(
        <Router>
                <Navbar1/>
                
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
                        <div className="para3p2">Lorem ipsum dolor sit amet consectetur. Nunc et tincidunt dui vitae facilisi sed sed etiam. Vestibulum vel urna id vel nulla ullamcorper interdum viverra dictum. Facilisi urna gravida eget pretium a mi. Consectetur non dignissim in nam. Pharetra lectus purus cras dui magnis egestas leo quam adipiscing. Volutpat nascetur faucibus pharetra at eget eu lorem. Blandit velit condimentum condimentum et in quam pulvinar. Donec purus nisi tellus felis montes libero mauris. Morbi massa rhoncus malesuada quis ut. Purus leo</div>
                        <a href="#" className="anchor4p2">See more</a>
                        <button  className="Buttonp5"><a href="#" style={{textDecoration: 'none'}}>Donate Now</a></button>
                    </div>
                    <div className="projectimage"><Slideshow/></div>
                </div>
                <div className='donationcontainer'>
                    <div className="Header5p2">Donation Goal</div>

                    <div className="range-container2">
                        <label htmlFor="rangestart"><div className='sliderletters'>0 </div></label>
                        <input type="range" id="range" min="0" max="100" value="66" class="slider" valueLabelDisplay="on"/>
                        <label htmlFor="range"><div className='sliderletters'> 3 Cr</div></label>


                    </div>
                    <div className='donationinfo'>
                        <div className='donationleft'>Lorem ipsum dolor sit amet consectetur. Nunc et tincidunt dui vitae facilisi sed sed etiam. Vestibulum vel urna id vel nulla ullamcorper interdum viverra dictum. Facilisi urna gravida eget pretium a mi. Consectetur non dignissim in</div>
                        <div className='donationright'>nam. Pharetra lectus purus cras dui magnis egestas leo quam adipiscing. Volutpat nascetur faucibus pharetra at eget eu lorem. Blandit velit condimentum condimentum et in quam pulvinar. Donec purus nisi tellus felis montes libero</div>
                    </div>

                </div>
                <div className="donarcontainer">
                    <div className="Header5p2">Top Donar</div>
                    <div className="btncontainer2">
                        <btn className="Buttonp4">
                            <h1>2 Cr.</h1> <p style={{
                                paddingTop: "15px"
                            }}>Ritwik Ganguli</p>
                        </btn>
                        <btn className="Buttonp4">
                            <h1>2 Cr.</h1> <p style={{
                                paddingTop: "15px"
                            }}>Ritwik Ganguli</p>
                        </btn>
                        <btn className="Buttonp4">
                            <h1>2 Cr.</h1> <p style={{
                                paddingTop: "15px"
                            }}>Ritwik Ganguli</p>
                        </btn>
                    </div>
                    <div><p><a href="#" className="anchor4p2">See more</a></p></div>
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
                        <p className="Header5p2">How will we use your money</p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur. Nunc et tincidunt dui vitae facilisi sed sed etiam. Vestibulum vel urna id vel nulla ullamcorper interdum viverra dictum. Facilisi urna gravida 
                            eget pretium a mi. Consectetur non dignissim in nam. Pharetra lectus purus cras dui magnis egestas leo quam adipiscing. Volutpat n
                            ascetur faucibus pharetra at eget eu lorem. Blandit velit condimentum condim
                            entum et in quam pulvinar. Donec purus nisi tellus felis montes libero mauris. Morbi massa rhoncus malesuada quis ut. Purus leo 
                        </p>
                        <a href="#" className="anchor4p2">See more</a>
                    </div>
                    <div className="btncontainerx">
                        <btn className="Buttonp4">
                            <a href="#"><img src={img3} className="img3"/>   Details.pdf</a>
                        </btn>
                        <btn className="Buttonp4">
                            <a href="#"><img src={img3} className="img3"/>   Details.pdf</a>
                        </btn>
                        <btn className="Buttonp4">
                            <a href="#"><img src={img3} className="img3"/>   Details.pdf</a>
                        </btn> 
                    </div>
                </div> 
            </div>   
        </Router>
    );
}

export default Projectdetail;