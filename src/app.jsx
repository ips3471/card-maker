import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styles from './app.module.css';
import Login from './components/login/login';
import Maker from './components/maker/maker';

function App({authService, ImageInput, cardRepository}) {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/card-maker'>
            <Login authService = {authService}/>
          </Route>
          <Route path='/maker'>
            <Maker 
            authService={authService} 
            ImageInput={ImageInput} 
            cardRepository={cardRepository} 
            />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  ) 
}

export default App;
