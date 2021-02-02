import React from 'react';
import { Menu, Grid } from 'semantic-ui-react'

import Logo from "../assets/shop_logo.png"
import '../css/navigation.css'
import '../css/art.css'

export default function Navigation(props) {

    function showCart(){
        props.showCheck();
    }

    function showArt(){
        props.showArt()
    }

    return (
        <>
        <Menu borderless fluid widths={3} className="fixed fixNav" >
            <Menu.Item></Menu.Item>
            <Menu.Item  className="logoPlacement"><button onClick={showArt} className="ui button noStyle"><img src={Logo} alt="logo" /></button></Menu.Item>
            <Menu.Item>
            <Grid stackable>
            <Grid.Row columns={3}>
                <Grid.Column style={{padding:"0", height:"10px", width:"5px"}} className="noButtonSpace">
                
                <button onClick={props.showAboutFn} className="ui button noStyle">about</button>

                </Grid.Column>
                <Grid.Column style={{padding:"0", height:"10px", width:"10px"}} className="noButtonSpace">
                <button onClick={props.showContactFn} className="ui button noStyle">contact</button>
                </Grid.Column>
                <Grid.Column style={{padding:"0", paddingLeft:"7px", height:"10px", width:"10px"}}><button onClick={props.showCheck} className="ui button noStyle">cart({props.count})</button></Grid.Column>
            </Grid.Row>
            </Grid>
            </Menu.Item>
        </Menu>
        
        </>
        
    )
}