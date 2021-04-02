import React from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';
import Addpage from '../Pages/AddPage/AddPage';
import MainPage from '../Pages/MainPage/MainPage';
import SliderPage from '../Pages/SliderPage/SliderPage';

export function Routes() {
    return (
        <div>
            <Switch>
                <Route path="/add-book" component={Addpage}/>
                <Route path="/book-slider" component={SliderPage}/>
                <Route path="/" component={MainPage}/>
                {/* <Redirect path="/"/> */}
            </Switch>
        </div>
    );
}