import React, {Component} from 'react';
import {connect} from 'react-redux';

export default function(RenderComponent) {
    class CheckRoute extends Component {
        render() {
            return <RenderComponent />;
        }
    }

    const mapStateToProps = ({country}) => {
        return {
            country
        };
    };

    return connect(
        mapStateToProps,
        null
    )(CheckRoute);
}
