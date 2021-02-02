import React from 'react'
import {Container} from 'semantic-ui-react'
export default function ReturnPolicy(){

    
    return (
        <Container className="privacyPolicy">
        <h4>Return Policy</h4>
        <p>Please choose your artwork carefully, check sizing and consider extra spacing for 
        framing options as we do not accept returns. All items are final sale.</p>
        <h4>Damaged Artwork</h4>
        <p>If you notice any serious damage to the outside of the package upon delivery or notice 
        damage upon unpacking your artwork please email <a href={"mailto:support@amberfullerdesigner.com"}> support@amberfullerdesigner.com </a> within 
        48 hours of receiving the artwork with digital images of the damage. 
        If we find that the edition was damaged in transit we will endeavor to replace the 
        edition at no cost to you.
        </p>
        </Container>
        )
    }