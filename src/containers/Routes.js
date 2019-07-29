import React from 'react';
import {Switch, Route} from 'react-router';
import Step1 from './Step1';
import Step2 from './Step2/index';
import SuccesfullyPayment from './SuccesfullyPayment';
import Help from './Help';
//import {CheckRoute} from './CheckRoute';

export default function Routes() {
    return (
        <Switch>
            <Route component={Step1} path="/" exact />
            <Route component={Step2} path="/step2" exact />
            <Route path="/success" component={SuccesfullyPayment} exact />
            <Route path="/help" component={Help} exact />
        </Switch>
    );
}
