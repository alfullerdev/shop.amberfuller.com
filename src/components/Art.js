import React, { useState, useEffect } from "react";
import { Image, Container, Grid } from "semantic-ui-react";
import "../css/art.css";

import { FaAngleDown } from "react-icons/fa";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

export default function Art(props) {
  const [display, setdisplay] = useState(false);
  const [artrow, setartrow]   = useState(true);
  const [displayPrice, setdisplayPrice]  = useState(0);
  const [piece, setpiece]                = useState(0);
  const [price, setPrice]                = useState(0);
  const [size, setSize]                  = useState(0);
  const priceDropDown                    = piece.price_alt;
  const alternateSizes                   = piece.size_alt;

  useEffect(() => {
    let alternateSizes = piece.size_alt;
    let priceUpdate = '$'+piece.price;
    if(alternateSizes != undefined && piece != 0) {
      priceUpdate = '$'+ priceDropDown[0];
      setPrice(priceDropDown[0]);
      setSize(alternateSizes[0]);
    } else {
      setSize(piece.size);
      setPrice(piece.price);
    }

    setdisplayPrice(priceUpdate);    
  }, [piece]);



  function addToCart(piece) {
    if(piece.id === '23349') {
      alert('SOLD OUT');
    } else {

      let currentPiece = piece;
      currentPiece.price = price;
      currentPiece.size = size;
      props.update(currentPiece);
      closeDisplay();
    }

  }

  function closeDisplay() {
    setdisplay(false);
    setartrow(true);
  }

  function switchArt(piece) {
    window.scrollTo(0, 0);
    setdisplay(true);
    setartrow(false);
    setpiece(piece);
  }

  function change(event) {
    let currentSelection = event.target.value;
    setPrice(priceDropDown[currentSelection]);
    setSize(alternateSizes[currentSelection]);

    let displayPrices = '$'+priceDropDown[currentSelection];
    setdisplayPrice(displayPrices);
  }

  return (
    <>
      {display && (
        <Container className="artContainer">
          <Grid columns={1}>
            <Grid.Row>
              <Grid.Column>
                <div className="closeButtonDiv">
                  <button
                    className="closeButton noStyle"
                    onClick={closeDisplay}
                  >
                    <FontAwesomeIcon icon={faTimesCircle} />
                  </button>
                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Grid className="gridStackResp" stackable columns={2}>
            <Grid.Row className="artRowA">
              <Grid.Column className="artColArt">
                <Image src={piece.photo[0]} />
              </Grid.Column>
              <Grid.Column className="artInformation">
                <div>
                  <h4 className="masterSize">{piece.title}</h4>
                </div>
                
                <button className="cartButton" onClick={() => addToCart(piece)}>
                  ADD TO CART 
                </button>
                <div className="artInformation" >
                Select Size 
                </div>
                <div style={{ marginBottom: "20px",}} className="price">
                  
                   {priceDropDown
                      ? <select style={{float:'left', width:'80%'}} onChange={change.bind(this)} >{ piece.size_alt.map((price, index) => (<option key={index} value={index} > {price}</option>))} </select> : ''    
                    }
                    <div></div>
                    <div style={{float:'left'}}><FaAngleDown/></div>
                    <div style={{float:'clear'}}></div><br/>
                    
                </div>
                <div style={{ marginBottom: "20px"}} className="price">
                  {displayPrice}
                </div>
                <div style={{ marginTop: "10px" }} className="framing">
                  {piece.shipping}
                </div>
                <div className="artInformation">
                  <div
                    className="thinInformation"
                    style={{ marginBottom: "10px" }}
                  >
                    {piece.run && (
                      <span>
                        RUN OF: <b>{piece.run}</b>
                      </span>
                    )}
                    ,{piece.size}, {piece.description}, {piece.medium}
                  </div>
                  <div
                    className="masterSize"
                    style={{ marginBottom: "10px", fontSize: "13px" }}
                  >
                    {piece.note}
                  </div>

                  <div className="framing"> {piece.framing} </div>
                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      )}

      {artrow && (
        <Container className="artContainer">
          <Grid stackable>
            <Grid.Row columns={3}>
              {props.artList.map((piece) => {
                return (
                  <Grid.Column key={piece.id}>
                    <Image
                      onClick={() => switchArt(piece)}
                      src={piece.photo[0]}
                    />
                  </Grid.Column>
                );
              })}
            </Grid.Row>
          </Grid>
        </Container>
      )}
    </>
  );
}
