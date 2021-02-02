import React from 'react';
import { Menu, Grid } from 'semantic-ui-react'
import Logo from "../assets/shop_logo.png"

import '../css/navigation.css'
import '../css/art.css'

export default function Navigation(props) {

    function showArt(){
        props.showArt()
    }
    function checkoutButton(){

        let css = "ui button noStyle"
        if(props.count) {
            css = "ui button noStyle blackButton"
        }
        return (<button onClick={() => props.showCheck() } className={css} >checkout({props.count})</button>)
    }

    return (
        <>
        <Menu borderless fluid widths={3} className="fixed fixNav" >
            <Menu.Item></Menu.Item>
                <Menu.Item  className="logoPlacement">
                    <button onClick={() => showArt()} className="ui button noStyle"><img src={Logo} alt="logo" /></button>
                </Menu.Item>
            <Menu.Item>
            <Grid stackable>
                <Grid.Row  columns={3}>
                    <Grid.Column id="aboutSubav" className="subNav">
                        <button onClick={() => props.showAboutFn() } className="ui button noStyle">about</button>
                    </Grid.Column>
                    <Grid.Column id="ctcSubav" className="subNav">
                        <button onClick={() => props.showContactFn() } className="ui button noStyle">contact</button>
                    </Grid.Column>
                    <Grid.Column id="chkSubav" className="subNav">
                        {checkoutButton()}
                    </Grid.Column>
                    <Grid.Column>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            </Menu.Item>
        </Menu>
        
        </>
        
    )
}