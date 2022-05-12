import {Container} from "react-bootstrap";
import {Routes, Route, Navigate, useLocation, Link} from "react-router-dom";
import { useEffect, useState } from "react";
import AudioBooks from "../components/Dashboard/AudioBooks";
import Bookstore from "../components/Dashboard/Bookstore";
import Favorite from "../components/Dashboard/Favorite";
import Message from "../components/Dashboard/Message";
import Note from "../components/Dashboard/Note";
import Customers from "../components/Dashboard/Customers";
import Schedule from "../components/Dashboard/Schedule";
import Settings from "../components/Dashboard/Settings";
import Support from "../components/Dashboard/Support";
import profile from "../assets/svg/sidebar/profile.svg";
import logout from "../assets/svg/sidebar/logout.svg";
import menu from "../assets/svg/menu.svg";


function Dashboard () {
    const location = useLocation().pathname;
    const [path, setPath] = useState("");
    
    const openNav = () => {
        document.getElementById("sidebar").style.left = "0px";
    }
    
    const closeNav = () => {
        document.getElementById("sidebar").style.left = "-300px";
    }

    const changePathAndClose = (path) => {
        if(window.innerWidth<=992){
            closeNav()
        }
        setPath(path);
        
    }

    

    useEffect(()=>{
        setPath(location);
       
    }, [location])
   
    let userDetails = JSON.parse(sessionStorage.getItem("userDetails"))
    
    return(
        <div className="dashboard">
            <div className="dashboard_sidebar hide-scrollBar" id="sidebar">
                <img src={profile} alt="cancel" className="dashboard_sidebar-cancel" onClick={closeNav} />
                <h3> Welcome {userDetails.name} </h3>

                <div className="dashboard_sidebar-main"></div>
                
                <Link className="link-decor" to="/note">
                        <div 
                            className={path.includes("note") || path==="note"
                                ?"dashboard_sidebar-items active"
                                :"dashboard_sidebar-items"}
                            onClick={()=>changePathAndClose("note") }
                        >
                            <img src={profile} alt="icon" />
                            <p>Your Note</p>
                        </div>
                    </Link>
                <Link className="link-decor" to="/customers">
                        <div 
                            className={path.includes("customer") || path==="customers"
                                ?"dashboard_sidebar-items active"
                                :"dashboard_sidebar-items"}
                            onClick={()=>changePathAndClose("customers") }
                        >
                            <img src={profile} alt="icon" />
                            <p>Customers</p>
                        </div>
                    </Link>
                    <Link to="/schedule" className="link-decor">
                        <div 
                            className={path.includes("accounts") || path==="schedule"
                                ?"dashboard_sidebar-items active"
                                :"dashboard_sidebar-items"}
                            onClick={()=>changePathAndClose("schedule") }
                        >
                            <img src={profile} alt="icon" />
                            <p>Schedule</p>
                        </div>
                    </Link>
                    <Link className="link-decor" to="/bookstore">
                        <div 
                            className={path.includes("bookstore") || path==="bookstore"
                                ?"dashboard_sidebar-items active"
                                :"dashboard_sidebar-items"}
                            onClick={()=>changePathAndClose("bookstore") }
                        >
                            <img src={profile} alt="icon" />
                            <p>Bookstore</p>
                        </div>
                    </Link>
                    <Link className="link-decor" to="/audio-books">
                        <div 
                            className={path.includes("audio-books") || path==="audio-books"
                                ?"dashboard_sidebar-items active"
                                :"dashboard_sidebar-items"}
                            onClick={()=>changePathAndClose("audio-books") }
                        >
                            <img src={profile} alt="icon" />
                            <p>Audio Books</p>
                        </div>
                    </Link>
                    <Link className="link-decor" to="/favorite">
                        <div 
                            className={path.includes("radar") || path==="favorite"
                                ?"dashboard_sidebar-items active"
                                :"dashboard_sidebar-items"}
                            onClick={()=>changePathAndClose("favorite") }
                        >
                            <img src={profile} alt="icon" />
                            <p>Favorite</p>
                        </div>
                    </Link>
                    
          
                <Link className="link-decor" to="/settings">
                    <div 
                        className={path.includes("settings") || path==="settings"
                            ?"dashboard_sidebar-items active"
                            :"dashboard_sidebar-items"}
                        onClick={()=>changePathAndClose("settings") }
                    >
                        <img src={profile} alt="icon" />
                        <p>Settings</p>
                    </div>
                </Link>
                <Link className="link-decor" to="/message">
                    <div 
                        className={path.includes("message") || path==="message"
                            ?"dashboard_sidebar-items active"
                            :"dashboard_sidebar-items"}
                        onClick={()=>changePathAndClose("message") }
                    >
                        <img src={profile} alt="icon" />
                        <p>Message</p>
                    </div>
                </Link>
                
                <Link className="link-decor" to="/support">
                    <div 
                        className={path.includes("support") || path==="support"
                            ?"dashboard_sidebar-items active"
                            :"dashboard_sidebar-items"}
                        onClick={()=>changePathAndClose("support") }
                    >
                        <img src={profile} alt="icon" />
                        <p>Support</p>
                    </div>
                </Link>
                <hr />
               
               
                
                <div className="dashboard_sidebar-items logout" //onClick={logOut}
                >
                    <img src={logout} alt="icon" />
                    <p>Logout</p>
                </div>
                </div>
            <div className="dashboard_main">
                <Container>
                    <div className="dashboard_main-nav">
                        <img src={menu} alt="menu"  className="dashboard_main-nav-menu" 
                        onClick={()=>openNav()}/>
                        <h4 
                        //onClick={goToBoard} 
                        style={{cursor:"pointer"}}>
                            {
                                path.includes("note")?"Your Note"
                                :path.includes("customers")?"Customers"
                                :path.includes("schedule")?"Schedule"
                                :path.includes("bookstore")?"Bookstore"
                                :path.includes("audio-books")?"Audio Books"
                                :path.includes("favorite")?"Favorite "
                                :path.includes("settings")?"Settings"
                                :path.includes("message")?"Message"
                                :path.includes("apis")?"APIs"
                                :path.includes("settings")?"Settings"
                                :path.includes("support")?"Support"
                                :"Your Note"
                            }
                           
                        </h4>
                        
                         
                    </div>
                        
                    
                    
                </Container>
                <div>
                    <Routes>
                        <Route path="/" element={<Navigate to="/note" />}/>
                        <Route path="/note" element={<Note />} />
                        <Route path="/customers" element={<Customers />} />
                        <Route path="/schedule/*" element={<Schedule   />} />
                        <Route path="/audio-books/*" element={<AudioBooks  />} />
                        <Route path="/bookstore/*" element={<Bookstore />}  />
                        <Route path="/favorite/*" element={<Favorite  />} />
                        <Route path="/message/*" element={<Message  />} />
                        <Route path="/settings/*" element={<Settings   />} />
                        <Route path="/support/*" element={<Support   />} />
                      
                    </Routes>
                </div>
            </div>
            
        </div>
    )
}

export default Dashboard;