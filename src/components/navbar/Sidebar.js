import React, {Component} from 'react';

class Sidebar extends Component {
    render() {
        return (
            <div id="sidebar-nav" className="sidebar">
                <div className="sidebar-scroll">
                    <nav>
                        <ul className="nav">
                            <li><a href="/" className="active"><i className="lnr lnr-home"></i>
                                <span>Dashboard</span></a></li>
                            <li><a href="elements.html" className=""><i className="lnr lnr-code"></i>
                                <span>Elements</span></a></li>
                            <li><a href="charts.html" className=""><i className="lnr lnr-chart-bars"></i>
                                <span>Charts</span></a></li>
                            <li><a href="panels.html" className=""><i className="lnr lnr-cog"></i>
                                <span>Panels</span></a></li>
                            <li><a href="notifications.html" className=""><i className="lnr lnr-alarm"></i>
                                <span>Notifications</span></a></li>
                            <li>
                                <a href="#subPages" data-toggle="collapse" className="collapsed"><i
                                    className="lnr lnr-file-empty"></i> <span>Pages</span> <i
                                    className="icon-submenu lnr lnr-chevron-left"></i></a>
                                <div id="subPages" className="collapse ">
                                    <ul className="nav">
                                        <li><a href="page-profile.html" className="">Profile</a></li>
                                        <li><a href="page-login.html" className="">Login</a></li>
                                        <li><a href="page-lockscreen.html" className="">Lockscreen</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li><a href="tables.html" className=""><i className="lnr lnr-dice"></i> <span>Tables</span></a>
                            </li>
                            <li><a href="typography.html" className=""><i className="lnr lnr-text-format"></i>
                                <span>Typography</span></a></li>
                            <li><a href="icons.html" className=""><i className="lnr lnr-linearicons"></i>
                                <span>Icons</span></a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        );
    }
}

export default Sidebar;

