import React from 'react';
import {Switch, Route} from 'react-router';
import Step1 from './Step1';
import Step2 from './Step2';
import SuccesfullyPayment from './SuccesfullyPayment';
export default function Routes() {
    return (
        <Switch>
            <Route component={Step1} path="/" exact />
            <Route component={Step2} path="/step2" exact />
            <Route component={SuccesfullyPayment} exact />
        </Switch>
    );
}
