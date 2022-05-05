// import {Container} from "react-bootstrap";
// import {Routes, Route, Navigate, useLocation, Link} from "react-router-dom";
// import { useEffect, useState } from "react";
// // import { useIdleTimer } from 'react-idle-timer'
// import { ToastContainer, toast } from "react-toastify";
// import AudioBooks from "../components/Dashboard/AudioBooks";
// import Bookstore from "../components/Dashboard/Bookstore";
// import Favorite from "../components/Dashboard/Favorite";
// import Message from "../components/Dashboard/Message";
// import Note from "../components/Dashboard/Note";
// import Schedule from "../components/Dashboard/Schedule";
// import Settings from "../components/Dashboard/Settings";
// import Support from "../components/Dashboard/Support";





// function Dashboard () {
//     const location = useLocation().pathname;
//     const [path, setPath] = useState("");
    
//   
 
//     useEffect(()=>{
//         setPath(location);
       
//     }, [location])
    
//     const openNav = () => {
//         document.getElementById("sidebar").style.left = "0px";
//     }
    
//     const closeNav = () => {
//         document.getElementById("sidebar").style.left = "-300px";
//     }

//     const changePathAndClose = (path) => {
//         if(window.innerWidth<=992){
//             closeNav()
//         }
//         setPath(path);
        
//     }

//     // const collapseBoard = () => {
//     //     let board = document.getElementById('mainBoard');
//     //     let drp = document.getElementById('drp');
//     //     let insightText = document.getElementById('dashboard_sidebar-text1');
//     //     var content = board.nextElementSibling;
//     //     let iconDisplay = document.getElementById('iconDisplay');
//     //     if (content.style.maxHeight){
//     //       content.style.maxHeight = null;
//     //       drp.style.transform = "rotate(0deg)";
//     //       insightText.style.textTransform=""
//     //       setShowIcon(true)
//     //       iconDisplay.style.display="block"
//     //     } else {
//     //       content.style.maxHeight = content.scrollHeight + "px";
//     //       drp.style.transform = "rotate(180deg)";
//     //       insightText.style.textTransform="uppercase"
//     //       setShowIcon(false)
//     //       iconDisplay.style.display="none"
//     //     }
//     // }



    




//     const [doAutoLogout, setDoAutoLogout] = useState(false);
//     // const [userActive, setUserActive] = useState(false);

//     // const handleOnIdle = event => {
//     //     console.log('user is idle', event)
//     //     setShowModal(true)
//     //     setTimeout( function (){
//     //         setDoAutoLogout(true)
//     //     }, 1000*30);
//     //     console.log('last active', getLastActiveTime())
//     //   }
    
//     //   const handleOnActive = event => {
//     //     console.log('user is active', event)
//     //     setDoAutoLogout(false)
//     //     // setUserActive(true)
//     //     console.log('time remaining', getRemainingTime())
//     //   }
    
//     //   const handleOnAction = event => {
//     //     console.log('user did something', event)
//     //   }
    
//     //   const { getRemainingTime, getLastActiveTime } = useIdleTimer({
//     //     timeout: 1000*60*10,
//     //     onIdle: handleOnIdle,
//     //     onActive: handleOnActive,
//     //     onAction: handleOnAction,
//     //     debounce: 500
//     //   })

//     //   useEffect(()=>{
//     //     if(doAutoLogout){
//     //         window.location="/auth/login"
//     //     } else {
//     //         console.log("user active")
//     //     }
//     // })


//     return(
//         <div className="dashboard">
//             <ToastContainer />
//             <div className="dashboard_sidebar hide-scrollBar" id="sidebar">
//                 <img src={cancel} alt="cancel" className="dashboard_sidebar-cancel" onClick={closeNav} />
//                 <Link to="/"><img src={logo} alt="logo" className="dashboard_sidebar-logo" /></Link>

//                 <Link className="link-decor" to="/home">
//                     <div 
//                         className={path.includes("home") || path==="home"
//                             ?"dashboard_sidebar-items active"
//                             :"dashboard_sidebar-items"}
//                         onClick={()=>changePathAndClose("home") }
//                     >
//                         <img src={home} alt="icon" />
//                         <p>Home</p>
//                     </div>
//                 </Link>
//                 <hr />
//                 <div id="mainBoard" className={ "mainboard"} //onClick={collapseBoard}
//                 >
//                     <div className="icon_align">
//                          <img src={dash} alt="icon" id="iconDisplay" />
//                          <p className="dashboard_sidebar-text1" id="dashboard_sidebar-text1">Insight</p>
//                     </div> 
//                     <img src={drp} alt="dropdown" id="drp" />
//                 </div>
               
//                 <div className="dashboard_sidebar-main">
//                     <div style={{margin:"20px 0"}}></div>
//                     <Link className="link-decor" to="/note">
//                         <div 
//                             className={path.includes("note") || path==="note"
//                                 ?"dashboard_sidebar-items active"
//                                 :"dashboard_sidebar-items"}
//                             onClick={()=>changePathAndClose("note") }
//                         >
//                             <img src={identity} alt="icon" />
//                             <p>Your Note</p>
//                         </div>
//                     </Link>
//                     <Link to="/schedule" className="link-decor">
//                         <div 
//                             className={path.includes("accounts") || path==="schedule"
//                                 ?"dashboard_sidebar-items active"
//                                 :"dashboard_sidebar-items"}
//                             onClick={()=>changePathAndClose("schedule") }
//                         >
//                             <img src={account} alt="icon" />
//                             <p>Schedule</p>
//                         </div>
//                     </Link>
//                     <Link className="link-decor" to="/bookstore">
//                         <div 
//                             className={path.includes("bookstore") || path==="bookstore"
//                                 ?"dashboard_sidebar-items active"
//                                 :"dashboard_sidebar-items"}
//                             onClick={()=>changePathAndClose("bookstore") }
//                         >
//                             <img src={income} alt="icon" />
//                             <p>Bookstore</p>
//                         </div>
//                     </Link>
//                     <Link className="link-decor" to="/audio-books">
//                         <div 
//                             className={path.includes("audio-books") || path==="audio-books"
//                                 ?"dashboard_sidebar-items active"
//                                 :"dashboard_sidebar-items"}
//                             onClick={()=>changePathAndClose("audio-books") }
//                         >
//                             <img src={creditInsight} alt="icon" />
//                             <p>Audio Books</p>
//                         </div>
//                     </Link>
//                     <Link className="link-decor" to="/favorite">
//                         <div 
//                             className={path.includes("radar") || path==="favorite"
//                                 ?"dashboard_sidebar-items active"
//                                 :"dashboard_sidebar-items"}
//                             onClick={()=>changePathAndClose("favorite") }
//                         >
//                             <img src={radar} alt="icon" />
//                             <p>Favorite</p>
//                         </div>
//                     </Link>
                    
          
//                 <Link className="link-decor" to="/settings">
//                     <div 
//                         className={path.includes("settings") || path==="settings"
//                             ?"dashboard_sidebar-items active"
//                             :"dashboard_sidebar-items"}
//                         onClick={()=>changePathAndClose("settings") }
//                     >
//                         <img src={app} alt="icon" />
//                         <p>Settings</p>
//                     </div>
//                 </Link>
//                 <Link className="link-decor" to="/message">
//                     <div 
//                         className={path.includes("message") || path==="message"
//                             ?"dashboard_sidebar-items active"
//                             :"dashboard_sidebar-items"}
//                         onClick={()=>changePathAndClose("message") }
//                     >
//                         <img src={identity} alt="icon" />
//                         <p>Message</p>
//                     </div>
//                 </Link>
                
//                 <Link className="link-decor" to="/support">
//                     <div 
//                         className={path.includes("support") || path==="support"
//                             ?"dashboard_sidebar-items active"
//                             :"dashboard_sidebar-items"}
//                         onClick={()=>changePathAndClose("support") }
//                     >
//                         <img src={setting} alt="icon" />
//                         <p>Support</p>
//                     </div>
//                 </Link>
//                 <div className="dashboard_sidebar-items logout" //onClick={logOut}
//                 >
//                     <img src={logout} alt="icon" />
//                     <p>Logout</p>
//                 </div>
//             </div>
//             <div className="dashboard_main">
//                 <Container>
//                     <div className="dashboard_main-nav">
//                         <img src={menu} alt="menu"  className="dashboard_main-nav-menu" 
//                         onClick={()=>openNav()}/>
//                         <h4 
//                         //onClick={goToBoard} 
//                         style={{cursor:"pointer"}}>
//                             {
//                                 path.includes("note")?"Your Note"
//                                 :path.includes("schedule")?"Schedule"
//                                 :path.includes("bookstore")?"Bookstore"
//                                 :path.includes("audio-books")?"Audio Books"
//                                 :path.includes("favorite")?"Favorite "
//                                 :path.includes("settings")?"Settings"
//                                 :path.includes("message")?"Message"
//                                 :path.includes("apis")?"APIs"
//                                 :path.includes("settings")?"Settings"
//                                 :"Home"
//                             }
                           
//                         </h4>
                        
                         
//                     </div>
//                         {
//                             path.includes("credit") ? (

//                                 <div className="dashboard_main-navheader">
//                                 <p> Generate Customer Credit Insight</p>
//                                 <div className="dashboard_main-navheader-caption">
//                                     <img src={warning} alt="icon" />
//                                     <p> Please ensure you have onboarded your borrower via our easy to use <Link to="/identity"><span>Customized KYC form </span></Link> </p>
//                                 </div>
//                             </div>
//                            ) : null
//                         }
                    
                    
//                 </Container>
//                 <div>
//                     <Routes>
//                         <Route path="/note/*" element={<Note />} />
//                         <Route path="/schedule/*" element={<Schedule   />} />
//                         <Route path="/audio-books/*" element={<AudioBooks  />} />
//                         <Route path="/bookstore/*" element={<Bookstore />}  />
//                         <Route path="/favorite/*" element={<Favorite  />} />
//                         <Route path="/message/*" element={<Message  />} />
//                         <Route path="/settings/*" element={<Settings   />} />
//                         <Route path="/support/*" element={<Support   />} />
                      
//                     </Routes>
//                 </div>
//             </div>
//             </div>
//         </div>
//     )
// }

// export default Dashboard;