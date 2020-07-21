import React, { Component } from 'react'
import '../css/style.css'
import '../css/bootstrap.css'

import Logo from '../assets/amberLogotext.svg';


export class Header extends Component {
    render() {
        return (
            <div>
            <header className="header-wrap no-transparent">
				<div className="header-container">
					<div className="container clearfix">
						<div class="text-center">
							<img src={Logo} style={{width:"18%"}} alt="logo" ></img>
						</div>
						<div class="pull-right">

							<a className="fullscreen-menu-toggle" href="index.html">
								<span>Menu</span>
								<i className="menu-bars">
									<i></i>
									<i></i>
									<i></i>
								</i>
							</a>
						</div>
					</div>
				</div>
			</header>
            </div>
        )
    }
}

export default Header
