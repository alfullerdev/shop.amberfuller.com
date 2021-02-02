import React, { useState, useEffect } from "react";
import { Image, Container, Grid } from "semantic-ui-react";
import "../css/art.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

export default function Art(props) {
  const [display, setdisplay] = useState(false);
  const [artrow, setartrow] = useState(true);
  const [piece, setpiece] = useState(0);

  useEffect(() => {}, [piece]);

  function addToCart(piece) {
    props.update(piece);
    closeDisplay();
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
                <div style={{ marginBottom: "20px" }} className="price">
                  ${piece.price}
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
