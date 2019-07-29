import React, {Component} from 'react';
import {Switch, Route, withRouter} from 'react-router';
import Step1 from './Step1';
import Step2 from './Step2/index';
import SuccesfullyPayment from './SuccesfullyPayment';
import Help from './Help';
import CheckRoute from './CheckRoute';

class Routes extends Component {
    componentDidMount() {
        this.props.history.push('/');
    }
    render() {
        return (
            <Switch>
                <Route
                    onLeave={e => console.log('asdasd')}
                    component={Step1}
                    path="/"
                    exact
                />
                <Route component={CheckRoute(Step2)} path="/step2" exact />
                <Route path="/success" component={SuccesfullyPayment} exact />
                <Route path="/help" component={Help} exact />
            </Switch>
        );
    }
}

export default withRouter(Routes);
