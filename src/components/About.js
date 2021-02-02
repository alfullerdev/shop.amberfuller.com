import React from 'react'
import Selfie from "../assets/photo.jpeg"
import { Image, Container} from 'semantic-ui-react'
import '../css/art.css'

export default function About() {
  return (
          <>
            <Container className="aboutContainer">
            
                        <h4>About Me xx</h4>
                        <p className="aboutText">
                        <p><Image className="aboutImage" src={Selfie} /></p>I grew up in Los Angeles, California being influenced by
                          the culture and eclectic environment around me. My work is
                          my best way to interpret the ideas I have about myself and
                          the world I live in. I’m not a talker but I am a visual
                          communicator by trade. My work is an extension of me, my
                          likes, my dislikes, my past and my future. I do not limit
                          myself to one medium, style or concept. I go with whatever
                          feels right in the moment although digital art and screen
                          printing have become my favorite ways to express myself.
                          Donuts quickly became the focus of my work early on
                          because it is something fascinating about them. Not only
                          the taste but aesthetically they make me happy. I have
                          explored other concepts as an artist but I still keep them
                          hanging around in my work because it still feels true to
                          me. If a viewer stops for just a second to reflect upon
                          something I created, I feel I have succeeded in my
                          intentions.
                        </p>
          </Container>
          </>
          )
}