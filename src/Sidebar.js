import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaughWink, faTachometer, faTachometerAlt, faPlus,faVideo,faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

function Sidebar() {
    const [isVisible, setVisible] = useState(false)
    return (
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

            {/* <!-- Sidebar - Brand --> */}
            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <div className="sidebar-brand-icon rotate-n-15">
                    
                    <FontAwesomeIcon icon={faPenToSquare} />
                </div>
                <div className="sidebar-brand-text mx-3">Video Editor</div>
            </a>

            {/* <!-- Divider --> */}
            <hr className="sidebar-divider my-0" />

            {/* <!-- Nav Item - Dashboard --> */}
            <li className="nav-item active">
                <Link className="nav-link" to={"/portal/dashboard"}>
                    <FontAwesomeIcon icon={faTachometer} />
                    <span>&nbsp;Dashboard</span></Link>
            </li>

            <li className="nav-item">
                <Link className="nav-link" to={"/"}>
                    <FontAwesomeIcon icon={faTachometerAlt} />
                    <span>&nbsp;Login</span></Link>
            </li>

            <li className="nav-item">
                <Link className="nav-link" to={"/portal/template"}>
                <FontAwesomeIcon icon={faLaughWink} />
                    <span>&nbsp;Templates</span></Link>
            </li>

            <li className="nav-item">
                <Link className="nav-link" to={"/portal/videos"}>
                <FontAwesomeIcon icon={faVideo} />
                    <span>&nbsp;All Videos</span></Link>
            </li>

            {/* <!-- Divider --> */}
            <hr className="sidebar-divider" />

            {/* <!-- Heading --> */}
            <div className="sidebar-heading">
                Interface
            </div>

            {/* <!-- Nav Item - Pages Collapse Menu --> */}
            <li className="nav-item">

                <button
                    onClick={() => setVisible(!isVisible)}
                    className={isVisible ? "nav-link " : "nav-link collapsed"}
                    data-toggle="collapse"
                    data-target="#collapseTwo"
                    aria-controls="collapseTwo"
                    aria-expanded={isVisible}
                    style={{ border: "none", background: "none" }}><span>New Video</span></button>

                <div id="collapseTwo" className={isVisible ? "collapse show" : "collapse"} aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">Custom Edit</h6>
                        <Link className="collapse-item" to="/portal/button">
                        <FontAwesomeIcon icon={faPlus} />
                        <span>&nbsp;Create Project </span>
                        </Link>                      
                    </div>
                </div>
            </li>
        </ul>
    )
}

export default Sidebar

