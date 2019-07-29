import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {setCardNumber, setCountry} from 'redux/auth/action';

class Step1 extends Component {
    state = {
        cardNumber: '',
        country: 'Ukraine'
    };
    handleCountry = country => {
        this.setState({
            country
        });
    };
    handleCardNumber = cardNumber => {
        this.setState({
            cardNumber
        });
    };
    onSumbit = () => {
        const {cardNumber, country} = this.state;
        const {setCardNumber, setCountry, history} = this.props;
        setCardNumber(cardNumber);
        setCountry(country);
        history.push('/step2');
    };
    render() {
        const {cardNumber, country} = this.state;
        return (
            <div>
                <header>
                    <Link to="/help">Help?</Link>
                </header>
                <main>
                    <h1>Step 1</h1>
                    <h3>Card Number</h3>
                    <input
                        value={cardNumber}
                        onChange={e => this.handleCardNumber(e.target.value)}
                    />
                    <h3>Select country</h3>
                    <select
                        value={country}
                        onChange={e => this.handleCountry(e.target.value)}
                    >
                        <option value="Ukraine">Ukraine</option>
                        <option value="United States">United States</option>
                    </select>
                    <div>
                        <button disabled={!cardNumber} onClick={this.onSumbit}>
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
    {setCountry, setCardNumber}
)(withRouter(Step1));
