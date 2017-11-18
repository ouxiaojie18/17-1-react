import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Contact.less'
export default class Contact extends Component {

    _scrollToTop() {
        window.scrollTo(0, 0);
    }
    render() {

        return (
            <div className="Contact-component" id="CONTACT">
                <h1>联系我们</h1>
                <h3>contact us</h3>
                <form>
                    <div className="form-group col-md-4  col-md-offset-2 pr">
                        <input type="text" className="form-control" name="username" placeholder="YOUR NAME*" />
                        <input type="text" className="form-control" name="email" placeholder="YOUR E-MAIL*" />
                        <input type="text" className="form-control" name="subject" placeholder="SUBJECT" />

                    </div>
                    <div className="form-group col-md-4 pl">
                        <textarea type="text" className="form-control" placeholder="YOUR MESSACE*" />
                    </div>
                    <div className="form-group col-md-12">
                        <button type="submit" name="submit" className="btn btn-primary">SEND MESSACE</button>
                    </div>
                </form>
                <p id="wrapper">
                    <img className="shake shake-vertical"  onClick={this._scrollToTop.bind(this)} src="static/images/置顶.png" alt="musica_byern" />
                </p>
                {/*<img src="static/images/置顶.png" alt="" onClick={this._scrollToTop.bind(this)} />*/}
            </div>
        );
    }
};