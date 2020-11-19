import React from 'react';
import Moment from 'react-moment';
import moment from 'moment';
import 'moment-timezone';

class ShippingAndReturns extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shippingDate: ''
    };

  }
  componentDidMount() {
    this.shippingDate();
  }

  shippingDate() {
    var targetDate = new Date();
    var shipDate = moment(targetDate).add(4, 'd').format('ddd, MMM DD');

    this.setState({
      shippingDate: shipDate
    });
  }
  render() {
    return (
      <div id="shipping-returns" className="display-none">
        <div className="container-white">
          <div>
            <div className="margin-left">
              <h4 className="shipping-options">Shipping options</h4>
              <div><span className="shipping-green">Get it by {this.state.shippingDate}</span>{' with free Standard Shipping'}</div>
              <h4 className="shipping-details">Shipping details</h4>
              <div>Estimated ship dimensions: {this.props.specs['Length']} length x {this.props.specs['Width']} width x {this.props.specs['Height']} height</div>
              <div>Estimated ship weight: {this.props.specs['Weight']}</div>
              <div className="shipping-warning"><a>Warning Symbol</a> Because this item ships in its original packaging, there's no way to hide what it is. <a>Details</a></div>
              <h4 className="return-details">Return details</h4>
              <div>This item can be returned to any Target store or Target.com.</div>
              <div>This item must be returned within 90 days of the in-store purchase, ship date or online order pickup. See return policy for details.</div>
              <div>See the <a>return policy</a> for complete information.</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ShippingAndReturns;