import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {setCardNumber, setCountry} from 'redux/auth/action';
import Zip from './Zip';
import PostalCode from './PostalCode';

class Step2 extends Component {
    render() {
        const {country} = this.props;
        return (
            <Fragment>
                {country === 'United States' ? <Zip /> : <PostalCode />}
            </Fragment>
        );
    }
}

const mapStateToProps = ({auth}) => {
    return {
        country: auth.country
    };
};
export default connect(
    mapStateToProps,
    null
)(Step2);
