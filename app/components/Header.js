import React, { Component } from 'react';
// import { Button } from 'antd';
import { Anchor } from 'antd';
const { Link } = Anchor;
import './Header.less'
// import {Router,IndexRoute,Link,Route,browserHistory} from 'react-router'
// import WaterFall from './WaterFall';
export default class Header extends Component {
    scrollToAnchor (anchorName)  {
        if (anchorName) {
            let anchorElement = document.getElementById(anchorName);
            if (anchorElement) { anchorElement.scrollIntoView(); }
        }
    }
    render() {
        return (
            <div className="header-component">
                <div className="header-bg">
                </div>
                <div className="header-fade">
                    <div className="nav">
                        <img className="logo" src="static/images/logo.png" alt="" />
                        {/*<Anchor className="nav-word">
                            <Link href="#HOME" title="HOME" />
                            <Link href="#SERVICES" title="SERVICES" />
                            <Link href="#PORTFOLIO" title="PORTFOLIO"/>
                        </Anchor>*/}
                        <ul className="nav-word">
                            <li><a onClick={()=>this.scrollToAnchor('CONTACT')}>CONTACT</a></li>
                            <li><a onClick={()=>this.scrollToAnchor('EXPRESS')}>EXPRESS</a></li>
                            <li><a onClick={()=>this.scrollToAnchor('ACTIVITY')}>ACTIVITY</a></li>
                            <li><a onClick={()=>this.scrollToAnchor('DORMITORY')}>DORMITORY</a></li>
                            <li><a onClick={()=>this.scrollToAnchor('LEADER')}>LEADER</a></li>
                        </ul>
                    </div>
                    <div className="header-con">
                        <h3>Welcome To <span>17网络工程 1班！</span></h3>
                        <h1>IT'S NICE TO MEET YOU</h1>
                        <button>
                            {/*<Link to="/list">TELL ME MORE</Link>*/}
                            <a href="../../canvas.html">TELL ME MORE</a>
                        </button >
                    </div>
                </div>



            </div>
        );
    }
};