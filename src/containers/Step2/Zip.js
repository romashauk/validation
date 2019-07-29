import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {setZipCode} from 'redux/auth/action';

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
                    <input
                        value={zipCode}
                        onChange={e => this.handleZipCode(e.target.value)}
                    />
                    <div>
                        <button disabled={!zipCode} onClick={this.onSumbit}>
                            Next Step
                        </button>
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
