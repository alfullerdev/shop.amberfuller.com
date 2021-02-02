import React, {useState} from 'react'
import useLocalStorage from '../components/useLocalStorage'
//import Logger from '../components/Logger'

import '../css/art.css'



export default function AddToCart() {

    const [name,setName] = useLocalStorage('name', () => '')

    //Logger(name)
    return (

        <input type="text" value={name} onChange={e => setName(e.target.value)} />
        )


}