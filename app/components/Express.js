import React, { Component } from 'react';
import './Express.less'
import '../../static/css/effects.css'
// import '../../static/css/htmleaf-demo.css'
export default class Express extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state={
    //         refresh:true
    //     };
    // }
    // _randomsort() {
    //     this.setState({refresh:false});
    // }
    // render() {
    //     var imgDatas = [];
    //     var points = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    //     points.sort(function (a, b) {    //function(a, b） 是一个排序指针方法

    //         return 0.5 - Math.random()   //  a -b 从小到大， b - a 从大到小 ，Math.random()  产生一个随机数，大于0.5 数组从小到大，小于0.5，数组从大到小排。

    //     });
    //     for (var i = 0; i < points.length; i++) {
    //         var src = "static/images/" + points[i] + ".png";
    //         imgDatas.push(<img key={i} src={src} alt=""/>);
    //     }
    //     var ImgLeft = (document.body.clientWidth - 540) / 2;
    //     var BtnLeft = (document.body.clientWidth - 75) / 2;
    //     return (
    //         <div className="Expression-content" id="EXPRESS">
    //             <h1>表情包专区</h1>
    //             <h3>Expression pack</h3>
    //             <div className="squre" style={{ marginLeft: ImgLeft }}>
    //                 {imgDatas}
    //             </div>
    //             <img className="refresh" src="static/images/refresh.png" alt="" onClick={this._randomsort.bind(this)}/>
    //         </div>
    //     );
    // }

    render() {
        return (
            <div className="Expression-content" id="EXPRESS">
                <h1>表情包专区</h1>
                <h3>Expression pack</h3>
                <div className="gezi">
                    <div className="mask is01">
                        <div className="hovereffect">
                            <img className="img-responsive" src="static/images/exp1.jpg" alt="" />
                            <div className="overlay">
                                <h2>看我理你么</h2>
                                {/*<a className="info" href="#">link here</a>*/}
                            </div>
                        </div>
                    </div>
                    <div className="mask is02">
                        <div className="hovereffect">
                            <img className="img-responsive" src="static/images/exp2.jpg" alt="" />
                            <div className="overlay">
                                {/*<h2>Hover effect 6</h2>*/}
                                <div className="rotate">
                                    <p className="group1">
                                        <a href="#">
                                            <i className="fa fa-twitter"></i>
                                        </a>
                                        <a href="#">
                                            <i className="fa fa-facebook"></i>
                                        </a>
                                    </p>
                                    <hr />
                                    <hr />
                                    <p className="group2">
                                        <a href="#">
                                            <i className="fa fa-instagram"></i>
                                        </a>
                                        <a href="#">
                                            <i className="fa fa-dribbble"></i>
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mask is03">
                        <div className="hovereffect">
                            <img className="img-responsive" src="static/images/exp3.jpg" alt="" />
                            <div className="overlay">
                                <h2>掩面式偷笑</h2>
                                <a className="info" href="#">link here</a>
                            </div>
                        </div>
                    </div>
                    <div className="mask is04">
                        <div className="hovereffect">
                            <img className="img-responsive" src="static/images/exp7.jpg" alt="" />
                            <div className="overlay">
                                <h2>你看我美不</h2>
                                <p>
                                    <a href="#">link here</a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="mask is05">
                        <div className="hovereffect">
                            <img className="img-responsive" src="static/images/exp4.jpg" alt="" />
                            <div className="overlay">
                                <h2>听说有人比我们牛逼</h2>
                                <p>
                                    <a href="#">给我一把平底锅</a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="mask is06">
                        <div className="hovereffect">
                            <img className="img-responsive" src="static/images/exp9.jpg" alt="" />
                            <div className="overlay">
                                {/*<h2>Hover effect 7</h2>*/}
                                <p>
                                    <a href="#">
                                        <i className="fa fa-twitter"></i>
                                    </a>
                                    <a href="#">
                                        <i className="fa fa-facebook"></i>
                                    </a>
                                    <a href="#">
                                        <i className="fa fa-instagram"></i>
                                    </a>
                                    <a href="#">
                                        <i className="fa fa-dribbble"></i>
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="mask is07">
                        <div className="hovereffect">
                            <img className="img-responsive" src="static/images/exp5.jpg" alt="" />
                            <div className="overlay">
                                <h2>啊？谁是大佬？</h2>
                                <p>
                                    <a href="#">没听清</a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="mask is08">
                        <div className="hovereffect">
                            <img className="img-responsive" src="static/images/exp8.jpg" alt="" />
                            <div className="overlay">
                                <h2></h2>
                                <p className="set1">
                                    <a href="#">
                                        <i className="fa fa-twitter"></i>
                                    </a>
                                    <a href="#">
                                        <i className="fa fa-facebook"></i>
                                    </a>
                                </p>
                                <hr />
                                <hr />
                                <p className="set2">
                                    <a href="#">
                                        <i className="fa fa-instagram"></i>
                                    </a>
                                    <a href="#">
                                        <i className="fa fa-dribbble"></i>
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="mask is09">
                        <div className="hovereffect">
                            <img className="img-responsive" src="static/images/exp6.jpg" alt="" />
                            <div className="overlay">
                                <h2>我瞪你一眼</h2>
                                <p>
                                    <a href="#">你可能会死</a>
                                </p>
                            </div>
                        </div>
                    </div>


                    <div className="mask is10">
                        <div className="hovereffect">
                            <img className="img-responsive" src="static/images/exp10.jpg" alt="" />
                            <div className="overlay">
                                <h2>你瞅啥呢</h2>
                                <a className="info" href="#">link here</a>
                            </div>
                        </div>
                    </div>
                    <div className="mask is11">
                        <div className="hovereffect">
                            <img className="img-responsive" src="static/images/exp11.jpg" alt="" />
                            <div className="overlay">
                                <h2>感觉自己萌萌哒</h2>
                                <a className="info" href="#">link here</a>
                            </div>
                        </div>
                    </div>
                    <div className="mask is12">
                        <div className="hovereffect">
                            <img className="img-responsive" src="static/images/exp12.jpg" alt="" />
                            <div className="overlay">
                                <h2>格格吉祥</h2>
                                {/*<p className="icon-links">
                                    <a href="#">
                                        <span className="fa fa-twitter"></span>
                                    </a>
                                    <a href="#">
                                        <span className="fa fa-facebook"></span>
                                    </a>
                                    <a href="#">
                                        <span className="fa fa-instagram"></span>
                                    </a>
                                </p>*/}
                            </div>
                        </div>
                    </div>
                    <div className="mask is13">
                        <div className="hovereffect">
                            <img className="img-responsive" src="static/images/exp13.jpg" alt="" />
                            <div className="overlay">
                                <h2>感觉身体被掏空</h2>
                                <a className="info" href="#">link here</a>
                            </div>
                        </div>
                    </div>
                    <div className="mask is14">
                        <div className="hovereffect">
                            <img className="img-responsive" src="static/images/exp14.jpg" alt="" />
                            <div className="overlay">
                                <h2>来呀~快活呀</h2>
                                {/*<a className="info" href="#">link here</a>*/}
                            </div>
                        </div>
                    </div>
                    <div className="mask is15">
                        <div className="hovereffect">
                            <img className="img-responsive" src="static/images/exp15.jpg" alt="" />
                            <div className="overlay">
                                <h2>就这么有feel</h2>
                                <a className="info" href="#">link here</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
};