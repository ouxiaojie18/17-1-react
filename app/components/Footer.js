import React, { Component } from 'react';
import './Footer.less'
export default class Footer extends Component {

    render() {

        return (
            <div className="Footer-component">
                <span className="col-md-3 col-md-offset-2">© Copyright 2017 ouxiaojie.com</span>
                <ul className="col-md-4">
                    <li>
                        <a href="#"><img src="static/images/qq.png" alt="" /></a>
                    </li>
                    <li>
                        <a href="#"><img src="static/images/微信.png" alt="" /></a>
                    </li>
                    <li>
                        <a href="#"><img src="static/images/微博.png" alt="" /></a>
                    </li>
                    <li>
                        <a href="#"><img src="static/images/github.png" alt="" /></a>
                    </li>
                </ul>
            </div>
        );
    }
};