import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import Landing from './pages/landing';
import StudantsForm from './pages/StudantsForm';
import StudantsList from './pages/StudantsList';


function Routes(){
    return (
        <BrowserRouter>
            <Route path="/" exact component={Landing} />
            <Route path="/study" component={StudantsList} />
            <Route path="/cadastro" component={StudantsForm} />
        </BrowserRouter>
    );
}

export default Routes;