import React from "react";
import "../../index.css";
import Home from "./Home";
import About from "./About";
import Mine from "./Mine";
import UserInfo from "./UserInfo";
import NotFound from "./NotFound";
import FunctionComp from "./FuntionComp";
import ShopCar from "./ShopCar"
import {BrowserRouter as Router, Route, NavLink,Switch,Redirect} from "react-router-dom"

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <h1>React-Router</h1>
                <div className='wrap'>
                    <Router>
                        <Redirect from='/' to='/home'></Redirect>
                        <div id="navWrap">
                            <NavLink to={
                                {
                                    pathname:"/home",
                                    search:"?name=changhao",
                                    state:{
                                        name:"chang—hao",
                                        age:22
                                    }
                                }
                            }>Home</NavLink>
                            <NavLink to="/about">About</NavLink>
                            <NavLink to="/mine">Mine</NavLink>
                            <NavLink to="/mine/user_info">UserInfo</NavLink>
                        </div>
                        <Switch>
                            {/*<Route path="/home" component={Home}></Route>*/}
                            <Route path="/home" render={()=><Home/>}></Route>
                            <Route path="/ShopCar" component={ShopCar}></Route>
                            <Route path="/about" component={About}></Route>
                            {/* UserInfo 和 Mine顺序不一样页面展示的效果也不一样，，   */}
                            <Route path="/mine" component={Mine}  exact strict></Route>
                            <Route path="/mine/user_info" component={UserInfo}></Route>
                            {/*<Route path="/demo/:id" render={()=><FunctionComp/>}></Route>*/}
                            <Route path="/demo/:id" component={FunctionComp}></Route>
                            <Route component={NotFound}></Route>

                        </Switch>
                    </Router>
                    {/*<Home></Home>*/}
                    {/*<About></About>*/}
                    {/*<Mine></Mine>*/}
                </div>
            </div>
        );
    }
}
