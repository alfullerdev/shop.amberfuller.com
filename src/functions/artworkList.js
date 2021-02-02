import React, {useState} from 'react'
import useLocalStorage from '../components/useLocalStorage'
//import Logger from '../components/Logger'

import '../css/art.css'

import MLK from "../assets/artwork/mlk.png"
import Nefertiti from "../assets/artwork/nefertiti.png"
import Kamala from "../assets/artwork/kamala.png"
import Traplin from "../assets/artwork/traplin.png"
import Traplin_ from "../assets/artwork/traplin.png"
import Nas from "../assets/artwork/cautionkings.png"
import StacyAdams from "../assets/artwork/stacyabrams.png"
import Pinkboxes from "../assets/artwork/pinkboxes.png"
import Hat from "../assets/artwork/hat.png"
import BlackPrint from "../assets/artwork/blackprint.png"

const artList = [
    {
        id: '23352',
        title: 'Dreamer',
        selector:"mlk.jpg",
        photo: [MLK],
        size: '18" x 24"',
        description: 'Fine Art Print',
        medium: 'Hahnemühle photo rag 100% Cotton, Fine, soft surface paper',
        framing: "Framing not included, available upon request",
        shipping: "Free Shipping, please allow 1-2 weeks of processing time before print is shipped out",
        price: '150',
        run: 100,
        note: 'Portraits of a [quarantined] mind, 2021',
    },{
        id: '23353',
        title: 'Queen is King',
        selector:"nefertiti.jpg",
        overlay: 'queen',
        photo: [Nefertiti],
        size: '18" x 24"',
        description: 'Fine Art Print',
        medium: 'Hahnemühle photo rag 100% Cotton, Fine, soft surface paper',
        framing: "Framing not included, available upon request",
        shipping: "Free Shipping, please allow 1-2 weeks of processing time before print is shipped out",
        price: '150',
        run: 100,
        note: 'Portraits of a [quarantined] mind, 2021',
    },{
        id: '23354',
        title: 'Charles Traplin',
        selector:"traplin.jpg",
        overlay: [Traplin_],
        photo: [Traplin],
        size: '18" x 24"',
        description: 'Fine Art Print',
        medium: 'Hahnemühle photo rag 100% Cotton, Fine, soft surface paper',
        framing: "Framing not included, available upon request",
        shipping: "Free Shipping",
        price: '150',
        run: 100,
        note: 'Portraits of a [quarantined] mind, 2021',
    },{
        id: '23355',
        title: 'Babes Supporting Babes',
        selector:"kamala.jpg",
        overlay: 'Traplin',
        photo: [Kamala],
        size: '18" x 24"',
        description: 'Fine Art Print',
        medium: 'Hahnemühle photo rag 100% Cotton, Fine, soft surface paper',
        framing: "Framing not included, available upon request",
        shipping: "Free Shipping",
        price: '150',
        run: 100,
        note: 'Portraits of a [quarantined] mind, 2021',
    },{
        id: '23356',
        title: 'Caution Kings',
        selector:"cautionkings.jpg",
        overlay: 'Traplin',
        photo: [Nas],
        size: '18" x 24"',
        description: 'Fine Art Print',
        medium: 'Hahnemühle photo rag 100% Cotton, Fine, soft surface paper',
        framing: "Framing not included, available upon request",
        shipping: "Free Shipping",
        price: '150',
        run: 100,
        note: 'Portraits of a [quarantined] mind, 2021',
    },{
        id: '23357',
        title: 'Onna-bugeisha',
        selector:"abrams.jpg",
        overlay: 'Traplin',
        photo: [StacyAdams],
        size: '18" x 24"',
        description: 'Fine Art Print',
        medium: 'Hahnemühle photo rag 100% Cotton, Fine, soft surface paper',
        framing: "Framing not included, available upon request",
        shipping: "Free Shipping",
        price: '150',
        run: 100,
        note: 'Portraits of a [quarantined] mind, 2021',
    },{
        id: '23358',
        title: 'Pink Boxes',
        selector:"pinkboxes.jpg",
        photo: [Pinkboxes],
        size: '14" x 19"',
        description: 'Six-Color, hand-pulled silk screen',
        medium: '100% Cotton paper 250gsm White',
        framing: "Framing not included, available upon request",
        shipping: "Free Shipping",
        price: '120',
        run:8,
        note: 'each print is uniquely hand pulled by Amber and colors and alignment may vary from images shown',
    }, {
        id: '2335',
        title: 'ALL BLACK EVERYTHING',
        selector:"blackprint.jpg",
        photo: [BlackPrint],
        size: '24" x 18"',
        description: 'Fine Art Print',
        medium: 'Hahnemühle photo rag 100% Cotton, Fine, soft surface paper',
        framing: "Framing not included, available upon request",
        shipping: "Free Shipping",
        price: '250',
        run: 16,
        note: '',
    },{
        id: '23360',
        selector:"hat.jpg",
        title: 'The Donut Hat',
        photo: [Hat],
        size: 'One Size (6 5/8" - 7 5/8")',
        description: 'Embroidered Classic Dad Hat, Black',
        medium: null,
        framing: null,
        shipping: "Free Shipping",
        price: '35',
        run: null,
        note: '100% Cotton',
    }
];

export default function artworkList() {
    return ( artList )
}