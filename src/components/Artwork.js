import React, { Component } from 'react'
import '../css/style.css'
import '../css/bootstrap.css'
import Pinkboxes from '../assets/artwork/pinkboxes.jpg'

export class Artwork extends Component {
    render() {
        return (
            <div>
                <main>
                    <section className="section">
                        <div className="container">
                            <div className="row">
                            <div className="blog-post masonry">
                                    <div className="col-md-4 col-sm-6 col-xs-12">
                                        <div className="blog-wrap blog-wrap-mas">
                                            <div className="blog-thumb">
                                                <img src={Pinkboxes} alt=""></img>
                                            </div>
                                            <div className="post-header clearfix">
                                            <h2 className="post-title clearfix"> </h2>
                                            </div>
                                            <div className="post-content clearfix">
                                            <p><b>$120 USD (free shipping)</b><br />14x19", Six-Color, hand-pulled silk screen, 100%
                                            Cotton paper 250gsm White (frame not included)<br />
                                            </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>		
            </div>
        )
    }
}

export default Artwork
/*/<a href="{Pinkboxes}" class="animsition-link">Pink Boxes</a> */
