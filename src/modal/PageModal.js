import React, {useState} from 'react'
import { Container, Grid, Col, Row, Button, Modal } from 'semantic-ui-react'
import '../css/art.css'
import 'semantic-ui-css/semantic.min.css'

export default function PageModal(props) {
    const [open, setOpen] = React.useState(false)

    function addArtToCart(piece) {
        setOpen(false)
    }
    return (
            <Modal
            open={open}
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            basic
            dimmer={'inverted'}
            closeOnEscape={true}
            closeOnDimmerClick={true}
            trigger={<Button className="noStyle">{props.pageLabel}</Button>}
            >
            <Container className="superArtContainer" >
            <Grid columns={1}>
                    <Grid.Row>
                    <Grid.Column>
                    <div className="closeButtonDiv">
                        <button onClick={() => setOpen(false)} className="closeButton noStyle">close</button>
                    </div>                    
                    </Grid.Column>
                    </Grid.Row>
                </Grid>

                <Grid stackable columns={1}>
                    <Grid.Row>
                    <Grid.Column>
                    <props.page /> 
                    </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>                 
            </Modal>
    )
}