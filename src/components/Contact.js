import React from 'react'
import '../css/art.css'
import { Container} from 'semantic-ui-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

export default function Contact() {
  return (<>
          <Container className="contactContainer">
            <h4>Contact</h4>
            <p><a href={"mailto:support@amberfullerdesigner.com"}>support@shop.amberfullerdesigner.com</a></p>
            <p style={{marginTop:"20px"}}><FontAwesomeIcon size="lg"  icon={faInstagram} /> Instagram: @donuts_and_milf</p>
          </Container>
        </>)
}