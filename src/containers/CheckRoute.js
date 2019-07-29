import React, {Component} from 'react';
import {connect} from 'react-redux';

export default function(RenderComponent) {
    class CheckRoute extends Component {
        componentDidMount() {
            console.log(this.props);
        }
        render() {
            return <RenderComponent />;
        }
    }
    return CheckRoute;

    // const mapStateToProps = ({country}) => {
    //     return {
    //         country
    //     };
    // };

    // return connect(
    //     mapStateToProps,
    //     null
    // )(CheckRoute);
}
