import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import { DatePicker } from 'antd';
import Header from './components/Header';
import Leader from './components/Leader';
import Dormitory from './components/Dormitory';
import Activity from './components/Activity';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WaterFall from './components/WaterFall';
import Express from './components/Express';


// import {Router,IndexRoute,Link,Route,hashHistory,Redirect} from 'react-router'
// class App extends Component {
//     render() {
//         return (
//             <div>
//                 <Header />
//                 <Leader />
//                 <Dormitory />
//                 <Activity />
//                 {/*<WaterFall />*/}
//              </div>
//         );
//     }

// };
export default class Root extends Component {
    render() {
        return (
            <div>
                <Header />
                <Leader />
                <Dormitory />
                <Activity />
                <Express />
                <Contact />
                <Footer />
                {/*<WaterFall />*/}
            </div>
            // <WaterFall />             
            // <Router history={hashHistory}>
            //     <Route path="/" component={App}></Route>
            //     <Route path="/list" component={WaterFall} ><Redirect from="messages/:id" to="/messages/:id" /></Route>

            // </Router>
        );
    }

};
