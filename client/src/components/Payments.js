import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { handleToken } from '../actions';
import { connect } from 'react-redux';

class Payments extends React.Component {
	render() {
		return (
			<StripeCheckout
				name="EmailApp"
				description="$5 for 5 credits"
				amount={500}
				token={(token) => {console.log("token", token);
								   this.props.handleToken(token)}}
				stripeKey={process.env.REACT_APP_STRIPE_KEY}
			>
				<a href="/#">
					<i className="left small material-icons">credit_card</i>
					Pay With Card
				</a>
			</StripeCheckout>
		);
	}
}

export default connect(null, { handleToken })(Payments);