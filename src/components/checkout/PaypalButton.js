import React from "react";
import ReactDOM from "react-dom";
import scriptLoader from "react-async-script-loader";

let PayPalButton = null;

class PaypalButton extends React.Component {
  constructor(props) {
    super();

    console.log('from button',props.totalPrice)

    this.state = {
      showButtons: false,
      loading: true,
      paid: false
    };

    window.React = React;
    window.ReactDOM = ReactDOM;
  }

  componentDidMount() {

    const { isScriptLoaded, isScriptLoadSucceed } = this.props;

    if (isScriptLoaded && isScriptLoadSucceed) {
      
      PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });
      
      this.setState({ 
        loading: false, 
        showButtons: true 
      });
    
    }
  }

  componentWillReceiveProps(nextProps) {
    const { isScriptLoaded, isScriptLoadSucceed } = nextProps;

    const scriptJustLoaded =
      !this.state.showButtons && !this.props.isScriptLoaded && isScriptLoaded;

    if (scriptJustLoaded) {
      if (isScriptLoadSucceed) {
        PayPalButton = window.paypal.Buttons.driver("react", {
          React,
          ReactDOM
        });
        this.setState({ loading: false, showButtons: true });
      }
    }
  }
  createOrder = (data, actions) => {

    const allArt = this.props.superCart.map(art => {
      return {
        name: art.title,
        unit_amount: {value: art.price, currency_code: 'USD'},
        quantity: art.quantity,
        sku: art.id
      }
    })
    
    return actions.order.create({

      purchase_units: [{
        amount: {
            value: this.props.totalPrice,
            currency_code: 'USD',
            breakdown: {
                item_total: {value: this.props.totalPrice, currency_code: 'USD'}
            }
        },
        items: allArt
    }]
  })
  };

  onApprove = (data, actions) => {

    actions.order.capture().then(details => {
      const paymentData = {
        payerID: data.payerID,
        orderID: data.orderID,
        data:details
      };
    
    this.props.success(paymentData);
    
    });
  };

  render() {

    const { showButtons, loading} = this.state;
    return (
      <div className="main">
        {loading}
        {showButtons && (
          <div>
            <PayPalButton
              createOrder={(data, actions) => this.createOrder(data, actions)}
              onApprove={(data, actions) => this.onApprove(data, actions)}
            />
          </div>
        )}
      </div>
    );
  }
}

export default scriptLoader(`https://www.paypal.com/sdk/js?client-id=Ac_Y8n84l8fX_7bIuCLiJe3pqq6ELQjt965NjSuI0JH0kM0oAnQgH7e-HaNh7F3azxTBCsa_jo6uqQb9&currency=USD`)(PaypalButton);

//ASbd5-wzO6DmNSbeBZoY-D_InPlAM-x7GkIZgT_AoxKqSUqIJixqPncq9HnjgAvp3raJI48fT23n2ENO
//Ac_Y8n84l8fX_7bIuCLiJe3pqq6ELQjt965NjSuI0JH0kM0oAnQgH7e-HaNh7F3azxTBCsa_jo6uqQb9