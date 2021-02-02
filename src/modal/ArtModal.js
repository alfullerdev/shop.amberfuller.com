import React, { useState } from "react";
import {
  Container,
  Image,
  Grid,
} from "semantic-ui-react";
import "../css/art.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'


export default function ArtModal(props) {
  const [open, setOpen] = React.useState(false);
  const piece = props.art;

  function addArtToCart(piece) {
    setOpen(false);
    props.addToOrder(piece);
  }

  return (
    <div>
        <Container className="superArtContainer">
          <Grid columns={1}>
            <Grid.Row>
              <Grid.Column>
                <div className="closeButtonDiv">
                  <button
                    onClick={() => setOpen(false)}
                    className="closeButton noStyle"
                  >
                    <FontAwesomeIcon  icon={faTimesCircle} />
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
              <Grid.Column>
                <div>
                <h4 className="masterSize">{piece.title}</h4>
                </div>
                <button
                  className="cartButton"
                  onClick={() => addArtToCart(piece)}
                >
                  ADD TO CART
                </button>
                <div style={{ marginBottom: "20px" }} className="price">
                    ${piece.price}
                </div>
                <div style={{ marginTop: "10px" }} className="framing">
                    {piece.shipping}
                </div>
                <div className="artInformation">
                  {piece.run && (
                    <div style={{ marginBottom: "10px" }} className="run">
                      RUN OF: <b>{piece.run}</b>
                    </div>
                  )}

                  <div
                    className="thinInformation"
                    style={{ marginBottom: "10px" }}
                  >
                    {piece.size}, {piece.description}, {piece.medium}
                  </div>
                  <div
                    className="masterSize"
                    style={{ marginBottom: "10px", fontSize: "13px" }}
                  >
                    {piece.note}
                  </div>


                  <div className="framing">  {piece.framing} </div>
                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
    </div>
  );
}
