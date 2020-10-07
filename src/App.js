import React from 'react';

import HomePage from './pages/homepage/homepage.component';
import {Route, Switch} from 'react-router-dom';

import './App.css';

const Hats = () => {
    return (
        <div>
            <h1>HAts</h1>
        </div>
    )
};

class App extends React.Component {
    render() {
        return (
            <div className='App'>
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route exact path='/hats' component={Hats}/>
                </Switch>
            </div>
        );
    }
}

export default App;
