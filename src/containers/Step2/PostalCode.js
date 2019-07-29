import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {setPostalCode} from 'redux/auth/action';

class PostalCode extends Component {
    state = {
        postalCode: ''
    };
    componentDidMount() {
        window.onbeforeunload = this.handleOnBeforeUnload;
    }
    handleOnBeforeUnload = e => {
        const message = 'Are you sure';
        e.returnValue = message;
        return message;
    };
    handlePostCode = postalCode => {
        this.setState({
            postalCode
        });
    };
    onSumbit = () => {
        const {postalCode} = this.state;
        const {setPostalCode, history} = this.props;
        setPostalCode(postalCode);
        history.push('/success');
    };
    render() {
        const {postalCode} = this.state;
        return (
            <div>
                <header>
                    <Link to="/help">Help?</Link>
                </header>
                <main>
                    <h1>Step 2</h1>
                    <h3>PostalCode</h3>
                    <input
                        value={postalCode}
                        onChange={e => this.handlePostCode(e.target.value)}
                    />
                    <div>
                        <button disabled={!postalCode} onClick={this.onSumbit}>
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
    {setPostalCode}
)(withRouter(PostalCode));
