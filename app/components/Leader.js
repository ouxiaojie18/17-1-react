import React, { Component } from 'react';
import './Leader.less'
export default class Leader extends Component {
    render() {
        return (

            <div id="LEADER" className="user-message">
                <div className="wrap">
                    <h1>班级 Leader</h1>
                    <div className="content">
                        <div data-ride="carousel" className="carousel slide" id="carousel-example-generic">
                            <ol className="carousel-indicators">
                                <li className="active" data-slide-to="0" data-target="#carousel-example-generic"></li>
                                <li data-slide-to="1" data-target="#carousel-example-generic" className=""></li>
                            </ol>
                            <div role="listbox" className="carousel-inner">
                                <div className="item active">
                                    <div className="con-wrap">
                                        <div className="ring  ring-top">
                                            <img src="static/images/head01.jpg" alt="" />
                                            <div className="message">
                                                <p><strong>姓名：</strong>田振蒙老师</p>
                                                <p><strong>入学年份：</strong>2015年</p>
                                                <p><strong>职位：</strong>班主任</p>
                                            </div>
                                        </div>
                                        <div className="ring  ring-top">
                                            <img src="static/images/head02.jpg" alt="" />
                                            <div className="message">
                                                <p><strong>姓名：</strong>林雯洁</p>
                                                <p><strong>入学年份：</strong>2015年</p>
                                                <p><strong>职位：</strong>助班、党代表</p>
                                            </div>
                                        </div>
                                        <div className="ring  ring-top">
                                            <img src="static/images/head03.jpg" alt="" />
                                            <div className="message">
                                                <p><strong>姓名：</strong>柴雨键</p>
                                                <p><strong>入学年份：</strong>2016年</p>
                                                <p><strong>职位：</strong>助班</p>
                                            </div>
                                        </div>
                                        <div className="ring">
                                            <img src="static/images/head04.jpg" alt="" />
                                            <div className="message">
                                                <p><strong>姓名：</strong>刘成洋</p>
                                                <p><strong>入学年份：</strong>2017年</p>
                                                <p><strong>职位：</strong>班长</p> 
                                            </div>
                                        </div>
                                        <div className="ring">
                                            <img src="static/images/head05.jpg" alt="" />
                                            <div className="message">
                                                <p><strong>姓名：</strong>雷俊瑞</p>
                                                <p><strong>入学年份：</strong>2017年</p>
                                                <p><strong>职位：</strong>副班长</p>
                                            </div>
                                        </div>
                                        <div className="ring">
                                            <img src="static/images/head06.jpg" alt="" />
                                            <div className="message">
                                                <p><strong>姓名：</strong>马若轩</p>
                                                <p><strong>入学年份：</strong>2017年</p>
                                                <p><strong>职位：</strong>团支书</p> 
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="item">
                                    <div className="con-wrap">
                                        <div className="ring  ring-top">
                                            <img src="static/images/head07.jpg" alt="" />
                                            <div className="message">
                                                <p><strong>姓名：</strong>马靖皓</p>
                                                <p><strong>入学年份：</strong>2017年</p>
                                                <p><strong>职位：</strong>学习委员</p>
                                            </div>
                                        </div>
                                        <div className="ring  ring-top">
                                            <img src="static/images/head08.jpg" alt="" />
                                            <div className="message">
                                                <p><strong>姓名：</strong>伍翊</p>
                                                <p><strong>入学年份：</strong>2017年</p>
                                                <p><strong>职位：</strong>学习委员</p>
                                            </div>
                                        </div>
                                        <div className="ring  ring-top">
                                            <img src="static/images/head09.jpg" alt="" />
                                            <div className="message">
                                                <p><strong>姓名：</strong>吴廉川</p>
                                                <p><strong>入学年份：</strong>2017年</p>
                                                <p><strong>职位：</strong>生活委员</p>
                                            </div>
                                        </div>
                                        <div className="ring">
                                            <img src="static/images/head10.jpg" alt="" />
                                            <div className="message">
                                                <p><strong>姓名：</strong>陈嘉成</p>
                                                <p><strong>入学年份：</strong>2017年</p>
                                                <p><strong>职位：</strong>科研委员</p>
                                            </div>
                                        </div>
                                        <div className="ring">
                                            <img src="static/images/head11.jpg" alt="" />
                                            <div className="message">
                                                <p><strong>姓名：</strong>姜旭龙</p>
                                                <p><strong>入学年份：</strong>2017年</p>
                                                <p><strong>职位：</strong>心理委员</p>
                                            </div>
                                        </div>
                                        <div className="ring">
                                            <img src="static/images/head12.jpg" alt="" />
                                            <div className="message">
                                                <p><strong>姓名：</strong>辛赜兮</p>
                                                <p><strong>入学年份：</strong>2017年</p>
                                                <p><strong>职位：</strong>体育委员</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
};