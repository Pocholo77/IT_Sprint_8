import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../../pages/home'
import Ships from '../../pages/naves'
// import Home from '../pages/menu';    Home
// import Presupuesto from '../pages/presupuesto';   --- NAves

export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Home} />              
                <Route path="/naves/" component={Ships} />        {/*naves*/}
                <Route path="*" component={() => <div>404</div> } />
            </Switch>
        </BrowserRouter>
    );
}  