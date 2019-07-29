import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {setZipCode} from 'redux/auth/action';
import {Button, Input} from 'reactstrap';

class Zip extends Component {
    state = {
        zipCode: ''
    };
    componentDidMount() {
        window.onbeforeunload = this.handleOnBeforeUnload;
    }
    handleOnBeforeUnload = e => {
        const message = 'Are you sure';
        e.returnValue = message;
        return message;
    };
    handleZipCode = zipCode => {
        this.setState({
            zipCode
        });
    };
    onSumbit = () => {
        const {zipCode} = this.state;
        const {setZipCode, history} = this.props;
        setZipCode(zipCode);
        history.push('/success');
    };
    render() {
        const {zipCode} = this.state;
        return (
            <div>
                <header>
                    <Link to="/help">Help?</Link>
                </header>
                <main>
                    <h1>Step 2</h1>
                    <h3>Zip</h3>
                    <Input
                        value={zipCode}
                        onChange={e => this.handleZipCode(e.target.value)}
                    />
                    <div style={{marginTop: 20}}>
                        <Button disabled={!zipCode} onClick={this.onSumbit}>
                            Next Step
                        </Button>
                    </div>
                </main>
            </div>
        );
    }
}

export default connect(
    null,
    {setZipCode}
)(withRouter(Zip));
