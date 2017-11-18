import React, { Component } from 'react';
import './Activity.less'
export default class Activity extends Component {
    // _initparticles() {
    // 	_bubbles();
    // }

    /*The measurements are ... whack (so to say), for more general text usage I would generate different sized particles for the size of text; consider this pen a POC*/





    render() {
        // var _bubbles = function(){
        //         $.each($(".particletext.bubbles"), function () {
        //         var bubblecount = ($(this).width() / 50) * 10;
        //         for (var i = 0; i <= bubblecount; i++) {
        //             var size = ($.rnd(40, 80) / 10);
        //             $(this).append('<span className="particle" style="top:' + $.rnd(20, 80) + '%; left:' + $.rnd(0, 95) + '%;width:' + size + 'px; height:' + size + 'px;animation-delay: ' + ($.rnd(0, 30) / 10) + 's;"></span>');
        //         }
        //     });
        // }
        // jQuery.rnd = function (m, n) {
        //     m = parseInt(m);
        //     n = parseInt(n);
        //     return Math.floor(Math.random() * (n - m + 1)) + m;
        // }

        // _bubbles();
        var ImgLeft = (document.body.clientWidth - 700) / 2 - 30;
        var ImgRight = (document.body.clientWidth - 700) / 2 + 30;
        var TextLeft = (document.body.clientWidth - 160) / 2 - 40 - document.body.clientWidth * 0.3;
        var TextRight = (document.body.clientWidth - 160) / 2 + 160 + 40;
        //  style={{ left: ImgLeft }}

        return (
            <div className="various-activities" id="ACTIVITY">
                {/*<div className="textcontainer">
                    <span className="particletext bubbles">Bubbles</span>
                </div>*/}
                <h1>各种活动</h1>
                <h3>various activities</h3>
                <div className="wrap">
                    <div className="network con-left" style={{ marginTop: 50, marginLeft: ImgLeft }}>
                        <div className="">
                            <span className="font-bg">军训</span>
                            <h4 >2017年9月28日</h4>
                            <h5>军训是学生生活中难忘的一页，它锻炼我们坚强的意志与永恒的信念，军训会给我们的一生留下闪光的记忆！那笔直的腰身，挺起的胸膛，昂扬的势气，矫健的步伐，响亮的口号都让我们记忆犹新。每当炙热的太阳烘烤着大地的时候，在烈日下站军姿的我们，不禁大汗淋漓、脚底发热，太阳下军训是一种磨难，是汗水和泪水汇合的时刻，但是严厉的规定，都让我们都纹丝不动，我们学习的就是军人那种坚持不懈、吃苦耐劳的精神。</h5>
                        </div>
                        <ul className="ul-left">
                            <li>
                                <a href="#"></a>
                            </li>
                            <li>
                                <a href="#"></a>
                            </li>
                            <li>
                                <a href="#"></a>
                            </li>
                            <li>
                                <a href="#"></a>
                            </li>
                            <li>
                                <a href="#"></a>
                            </li>
                        </ul>
                        <img className="pic pic-left" src="static/images/act01.jpg" alt="" />
                    </div>
                    <div className="network con-right" style={{ marginLeft: ImgRight }}>
                        <div className="">
                            <span className="font-bg">学习“十九大”报告</span>
                            <h4 >2017年10月10日</h4>
                            <h5>脚踏实地走好每一步人生路，自己的人生才不会有遗憾。想成为党员，我觉得就应该敢于实践，敢想敢干，也会能会干，最重要的一点就是善于学习，钻研拥有强烈的责任感，才会有这个能力去做好这个称谓，我们要把自己看成黄土地的一部分，融入中国这个大家庭，锻炼自己的钻研实践能力，努力做好自己的工作就好，积极投入工作和学习中，走出一条无愧于党、无愧于人民、无愧于内心的正道坦途，让四年后的自己为之骄傲自豪！</h5>
                        </div>
                        <ul className="ul-right">
                            <li>
                                <a href=""></a>
                            </li>
                            <li>
                                <a href=""></a>
                            </li>
                            <li>
                                <a href=""></a>
                            </li>
                            <li>
                                <a href=""></a>
                            </li>
                            <li>
                                <a href=""></a>
                            </li>
                        </ul>
                        <img className="pic pic-right" src="static/images/act02.png" alt="" />
                    </div>
                    <div className="network con-left" style={{ marginLeft: ImgLeft }}>
                        <div className="">
                            <span className="font-bg">团日活动</span>
                            <h4 >2017年10月12日</h4>
                            <h5>团日活动整个是以主持人的主持稿和PPT串起来的，由班长来担任主持人。期间，姜旭龙同学热情高涨，在读了《习近平的七年知青岁月》这本书之后，他深有感触，上台为大家分享他读这本书的理解。在“唱歌”环节，为了呼应习总书记提出的“节俭”，我班的这位可爱的王楚元同学不加修饰，没有任何伴奏，没有使用话筒，很认真地清唱了一首《龙的传人》。以他活波而简约的方式大胆诠释“节俭”，点燃了在场所有人。</h5>
                        </div>
                        <ul className="ul-left">
                            <li>
                                <a href=""></a>
                            </li>
                            <li>
                                <a href=""></a>
                            </li>
                            <li>
                                <a href=""></a>
                            </li>
                            <li>
                                <a href=""></a>
                            </li>
                            <li>
                                <a href=""></a>
                            </li>
                        </ul>
                        <img className="pic pic-left" src="static/images/act03.png" alt="" />
                    </div>
                    <div className="network con-right" style={{ marginLeft: ImgRight }}>
                        <div className="">
                            <span className="font-bg">辩论赛</span>
                            <h4 >2017年10月22日</h4>
                            <h5>我班八位同学参加了新媒体学院内部的辩论赛，辩题分别是“能力更重要”以及“用非正义的手段实现和平是正义的”。期间，八位同学能言善辩，以自己最佳的状态和对方辩友展开了一场激烈的“口舌之争”。虽然最后我们班输了，但是由于徐治伟同学高谈雄辩的魄力感染了评委，他获得了“最佳辩手”的奖状。所以，我们的失败不算失败，最重要的是过程，我们很努力、很享受，结果只是让我们发现了自身的不足，我们再去弥补这种不足，然后真正成长。网工1班，在路上！</h5>
                        </div>
                        <ul className="ul-right">
                            <li>
                                <a href=""></a>
                            </li>
                            <li>
                                <a href=""></a>
                            </li>
                            <li>
                                <a href=""></a>
                            </li>
                            <li>
                                <a href=""></a>
                            </li>
                            <li>
                                <a href=""></a>
                            </li>
                        </ul>
                        <img className="pic pic-right" src="static/images/act05.jpg" alt="" />
                    </div>
                    <div className="network con-left" style={{ marginLeft: ImgLeft }}>
                        <div className="">
                            <span className="font-bg">运动会</span>
                            <h4 >2017年10月26日</h4>
                            <h5>伴随着习习秋风，我们迎来了一年一度的浙江传媒学院秋季运动会。作为这个大家庭中的一员，每个人的心情自然是分外激动。从前期认真严密的筹备：包括队形口号的编排、运动员的训练、运动会服装道具的采购，到运动会开幕当天大家的兴奋紧张，我们从未停止感受本届运动会带给我们的激情活力。比赛正式开始，运动们霸气登场，在蓝天白云的映衬下，他们分外夺目。运动会不仅是一场竞赛盛宴，更是体育精神的传递与发扬。</h5>
                        </div>
                        <ul className="ul-left">
                            <li>
                                <a href=""></a>
                            </li>
                            <li>
                                <a href=""></a>
                            </li>
                            <li>
                                <a href=""></a>
                            </li>
                            <li>
                                <a href=""></a>
                            </li>
                            <li>
                                <a href=""></a>
                            </li>
                        </ul>
                        <img className="pic pic-left" src="static/images/act07.jpg" alt="" />
                    </div>
                    <div className="network con-right" style={{ marginLeft: ImgRight }}>
                        <div className="">
                            <span className="font-bg">青春誓言</span>
                            <h4 >2017年10月28日</h4>
                            <h5>十七岁的我将青春付给梦想、
                                梦想中的我又将青春永藏<br />
                                即便无所寄望、
                                它仍在疯狂生长<br />
                                即使是黑白两色、
                                她仍旧恣意绽放<br />
                                无惧 无悔 无谓 无解、
                                哪怕只是一瞬<br />
                                那也是我梦中不曾希冀的模样</h5>
                        </div>
                        <ul className="ul-right">
                            <li>
                                <a href=""></a>
                            </li>
                            <li>
                                <a href=""></a>
                            </li>
                            <li>
                                <a href=""></a>
                            </li>
                            <li>
                                <a href=""></a>
                            </li>
                            <li>
                                <a href=""></a>
                            </li>
                        </ul>
                        <img className="pic pic-right" src="static/images/act06.jpg" alt="" />
                    </div>
                    <div className="network con-left" style={{ marginLeft: ImgLeft }}>
                        <div className="">
                            <span className="font-bg">班级聚餐</span>
                            <h4 >2017年10月29日</h4>
                            <h5>作为一个新成立的班级，同学们之间不是很熟悉，通过聚餐这样一种方式，能加深互相的了解，促进同学间的友谊，对这个集体产生归属感，从而增强班级的凝聚力，以更好的、更方便的开展班级工作。此外，聚餐作为中国人联络感情，交流思想的舞台，在学生中也逐渐成为一种流行，一种时尚，成为大学生活中不可或缺的一部分。的确，缺乏交往的生活是一种缺陷，聚餐也实实在在为学生之间的沟通与交流铺下了一座稳固的桥梁。</h5>
                        </div>
                        <ul className="ul-left">
                            <li>
                                <a href=""></a>
                            </li>
                            <li>
                                <a href=""></a>
                            </li>
                            <li>
                                <a href=""></a>
                            </li>
                            <li>
                                <a href=""></a>
                            </li>
                            <li>
                                <a href=""></a>
                            </li>
                        </ul>
                        <img className="pic pic-left" src="static/images/act04.jpg" alt="" />
                    </div>
                    <img className="continue" src="static/images/continue.jpg" alt="" />
                </div>
            </div>
        );
    }
};