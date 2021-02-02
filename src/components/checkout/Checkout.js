

import React, { Component } from 'react'
import PaypalButton from './PaypalButton'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { faMinusCircle } from "@fortawesome/free-solid-svg-icons";
import { Container, Grid} from 'semantic-ui-react'
import '../../css/style.css'
import '../../css/art.css'


export class Checkout extends Component {

    constructor(props) {
        super(props);
        

        console.log(props)

        this.state = {
            showPaypal: true,
        };
        
        this.getSelectedItems = this.getSelectedItems.bind(this);
        this.successPurchase  = this.successPurchase.bind(this);
        this.getSelectedItems(props);
    }

    successPurchase(data) {
        this.props.completedPurchase(data)
    }

    showPaypalButtons = () => {
        this.setState({ 
            showPaypal: true        
        });
    };
    
    getSelectedItems(props) {

        const selectedArt = this.props.cart//JSON.parse(localStorage.getItem('cart'));

        let shoppingCart  = <p className="nocart">NOTHING IN CART</p>

        if(selectedArt) {
            console.log('artwork',selectedArt);
            shoppingCart = selectedArt.map((piece, index) =>
                <div className="col-md-12 borderBottom" key={piece.id}>
                    <div className="col-md-5">
                        <img src={piece.photo} alt="artwork" ></img>
                    </div>
                    <div className="col-md-7">
                        <ul className="checkoutArt">
                            <li><h6>{piece.title}</h6></li>
                            <li className="thinCombined">
                                <p>{piece.size}</p>
                                <p>{piece.medium}</p>
                                <p>{piece.shipping}</p>
                            </li>
                            <li className="artFooter quantityLine"> <span className="quantitySmall">QUANTITY:</span> <button onClick={(e) => {props.updateItem('remove', piece)}} className="removeButton" ><FontAwesomeIcon icon={faMinusCircle} /></button>{piece.quantity} <button onClick={(e) => {props.updateItem('add', piece)}} className="removeButton"><FontAwesomeIcon icon={faPlusCircle} /></button></li>
                            <li className="artFooter totalText"><span>TOTAL</span> ${piece.quantity * piece.price}</li>
                            <li></li>
                        </ul>
                    </div>           
                </div>
            );
        }

        return shoppingCart
    
    }    
    render() {
        return (     
            <>
                <Container className="checkoutContainer">


                <Grid stackable columns={2}>
                    <Grid.Row>
                      <Grid.Column>
                      <div><h2>CHECKOUT</h2>  <button className="continue-shopping-btn" onClick={this.props.showArt}>CONTINUE SHOPPING</button><button className="continue-shopping-btn" onClick={this.props.clearCartAll}>CLEAR CART</button></div>
                      <div>{this.getSelectedItems(this.props)}</div>
                      <div><p className="checkoutSubPrint">Framing not included, available upon request. Email support@amberfullerdesigner.com</p>  </div>
                      </Grid.Column>
                      <Grid.Column>
                        <div>
                        <h4 className="masterTotal">Total ${this.props.totalPrice} </h4> 
                        </div>

                        <p className="masterOptions">Payment Options</p>
                        <PaypalButton success={this.successPurchase} {...this.state} totalPrice={this.props.totalPrice} superCart={this.props.cart} /> 
                      </Grid.Column>
                    </Grid.Row>
                </Grid>
                </Container>
            </>
        )
    }
}

export default Checkout