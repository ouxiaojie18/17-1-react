import React, { Component } from 'react';
import './Dormitory.less'
export default class Dormitory extends Component {
    render() {
        return (
            <div className="dormitory-smelt" id="DORMITORY">
                <h1>寝室熔炼</h1>
                <h3>dormitory smelt</h3>
                <div className="wrap">
                    <div>
                        <div className="mask">
                            <img src="static/images/dor1.jpg" alt="" />
                        </div>
                        <h4>创意照</h4>
                        <h5>Take photos with aerial cameras</h5>
                    </div>
                    <div className="dor-middle">
                        <div className="mask">
                            <img src="static/images/dor2.jpg" alt="" />
                        </div>
                        <h4>四人五足</h4>
                        <h5>Four feet and five feet</h5>
                    </div>
                    <div>
                        <div className="mask">
                            <img src="static/images/dor3.jpg" alt="" />
                        </div>
                        <h4>真假口令</h4>
                        <h5>True or false password</h5>
                    </div>
                </div>
                <div className="wrap mb">
                    <div>
                        <div className="mask">
                            <img src="static/images/dor4.jpg" alt="" />
                        </div>
                        <h4>你话我猜</h4>
                        <h5>You say, I guess</h5>
                    </div>
                    <div className="dor-middle">
                        <div className="mask">
                            <img src="static/images/dor5.jpg" alt="" />
                        </div>
                        <h4>寝室公约</h4>
                        <h5>Bedroom Convention</h5>
                    </div>
                    <div>
                        <div className="mask">
                            <img src="static/images/dor6.jpg" alt="" />
                        </div>
                        <h4>班级聚餐</h4>
                        <h5>Class dinner</h5>
                    </div>
                </div>
            </div>
        );
    }
};