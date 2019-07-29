import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {Modal, ModalBody, Button} from 'reactstrap';

class index extends Component {
    toggleModal = () => {
        this.props.history.push(this.props.requestLocation);
        this.props.confirm();
    };
    render() {
        return (
            <Modal
                isOpen={this.props.visible}
                style={{display: this.props.visible ? 'block' : 'none'}}
            >
                <ModalBody>
                    <h1>Are you sure that you want to leave </h1>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between'
                        }}
                    >
                        <Button onClick={this.toggleModal}>YES</Button>
                        <Button onClick={this.props.closeModal}>Cancel</Button>
                    </div>
                </ModalBody>
            </Modal>
        );
    }
}
export default withRouter(index);
