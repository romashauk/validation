import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {Prompt, withRouter} from 'react-router-dom';
import Zip from './Zip';
import PostalCode from './PostalCode';
import Modal from '../Modal/index';

class Step2 extends Component {
    state = {
        showModal: false,
        requestLocation: null
    };
    handleLoad = location => {
        if (
            (!this.state.requestLocation && location.pathname === '/help') ||
            location.pathname === '/'
        ) {
            this.setState({
                showModal: true,
                requestLocation: location.pathname
            });
            return false;
        }
        return true;
    };
    toggleModal = () => {
        this.setState({
            showModal: false
        });
    };
    closeModal = () => {
        this.setState({
            showModal: false
        });
    };
    render() {
        const {country} = this.props;
        const {showModal, requestLocation} = this.state;
        return (
            <Fragment>
                <Modal
                    requestLocation={requestLocation}
                    closeModal={this.closeModal}
                    confirm={this.toggleModal}
                    visible={showModal}
                />
                <Prompt
                    when={true}
                    message={location => this.handleLoad(location)}
                />
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
)(withRouter(Step2));
