import React, {useState, useEffect} from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Art from './components/Art';
import PrivacyPolicy from './components/PrivacyPolicy'
import ReturnPolicy from './components/ReturnPolicy';
import About from './components/About'
import Contact from './components/Contact'

import Checkout from './components/checkout/Checkout'
import Conformation from './components/Conformation';

import './css/style.css'
import 'semantic-ui-css/semantic.min.css'

import emailjs from 'emailjs-com';
import{ init } from 'emailjs-com';

//Images
import MLK from "./assets/artwork/mlk.png"
import Nefertiti from "./assets/artwork/nefertiti.png"
import Kamala from "./assets/artwork/kamala.png"
import Traplin from "./assets/artwork/traplin.png"
import Nas from "./assets/artwork/cautionkings.png"
import StacyAdams from "./assets/artwork/stacyabrams.png"
import Pinkboxes from "./assets/artwork/pinkboxes.png"
import Hat from "./assets/artwork/hat.png"
import BlackPrint from "./assets/artwork/blackprint.png"

export const ArtList = React.createContext();

export default function App() {

  const [total, setTotal] = useState(0)
  const [count, setCount] = useState(0)
  const [cart,  setCart]  = useState('')

  const [showArt, setArt]                     = useState(true);
  const [showCheckout, setCheckout]           = useState(false);
  const [showConformation, setConformation]   = useState(false);
  const [showPrivacy, setPrivacy]             = useState(false);
  const [showReturn, setReturn]               = useState(false);
  const [showContact, setContact]             = useState(false);
  const [showAbout, setAbout]                 = useState(false);

  useEffect(() => {

    init("user_iUlwJ9fusu5N34Kup13LT")

    const storedTotal  = JSON.parse(localStorage.getItem('total'))
    const storedCount  = JSON.parse(localStorage.getItem('count'))
    const storedCart   = JSON.parse(localStorage.getItem('cart'))

    if(storedCount) {
        setCount(storedCount);
        setTotal(storedTotal);
        setCart(storedCart);
    } 

  }, [])

  useEffect(() => {

    localStorage.setItem('count',JSON.stringify(count))
    localStorage.setItem('total',JSON.stringify(total))
    localStorage.setItem('cart',JSON.stringify(cart))

  }, [total, cart, count])

  function clearCart(){
    setCart('')
    setCount(0)
    setTotal(0)
    localStorage.clear();
    showArtToggle()
  }

  function clearCartCheckout(){
    setCart('')
    setCount(0)
    setTotal(0)
    localStorage.clear();
  }

  function updateCart(type, piece){

    if(type === 'remove') {
        if(count > 1) {
            removePiece(piece)
        } else {
            clearCart()
        }
    }

    if(type === 'add') {
        updatePiece(piece)
    }

    function removePiece(piece) {
      let nextCart    = cart

      let inCart      = nextCart.find(item => item.id === piece.id);
      let cartIndex   = nextCart.indexOf(inCart);

      if ( nextCart[cartIndex].quantity === 1){
            nextCart.splice(cartIndex, 1);

      } else {
        nextCart[cartIndex].quantity = nextCart[cartIndex].quantity-1
      }

      setCart(nextCart);
      setCount(count-1);
      setTotal(total-Number(piece.price));
  }
}

function formatArtforEmail() {
  const artTable = '<table>'
  const artwork = JSON.parse(localStorage.getItem('cart'))
  const formattedArt = artwork.map( piece => {

      return '<tr><td><img src="cid:'+piece.selector+' "/><td></tr>'+
             '<tr><td>'+piece.title+'<td></tr>'+
             '<tr><td>'+piece.size+'<br/>'+piece.medium+'<br>'+piece.description+'<td></tr>'+
             '<tr><td>Quantity<br/>'+piece.quantity+' @ $'+piece.price+'<td></tr>'
  })
  const artFooter = '</table>'
  const work = artTable+formattedArt+artFooter;
  return work
}


function completedPurchase(data){
  
  setCheckout(false)
  setConformation(true)

  let emailData = {
      purchased_art:formatArtforEmail(),
      email:data.data.payer.email_address,
      name:data.data.payer.name.given_name +' '+ data.data.payer.name.surname,
      purchase:data.data.purchase_units,
      address:data.data.purchase_units[0].shipping.address.address_line_1,
      city:data.data.purchase_units[0].shipping.address.admin_area_2,
      state:data.data.purchase_units[0].shipping.admin_area_1,
      zip:data.data.purchase_units[0].shipping.address.postal_code,
      orderID:data.orderID,
      cart:formatArtforEmail()
  }

  sendSampleEmail(emailData);
}

function sendSampleEmail (order) {
      
      const today = new Date();
      var templateParams = {
          orderID: order.orderID,
          address: order.address,
          city: order.city,
          state: order.state,
          zip: order.zip,
          purchased_art: order.purchased_art,
          email_to: order.email,
          name: order.name,
          total:Number(JSON.parse(localStorage.getItem('total'))),
          date_ordered:today.toLocaleDateString()
          }
        
      emailjs.send("default_service","template_olvn1ol",templateParams).then((response) => {
        
        clearCartCheckout();
          console.log('SUCCESS!', response.status, response.text);
      }, (error) => {
          console.log('error',error.text);
      });
}

function updatePiece (piece) {
    let modifiedCart = cart;
    if(!count) {
      piece.quantity = 1;
      setCart([piece])
      setCount(1)
      setTotal(Number(piece.price))

  } else {
      if (modifiedCart.find(item => item.id === piece.id) === undefined ) {
          piece.quantity = 1;
          modifiedCart.push(piece)
          setCart(prevState => modifiedCart)
      } else {
          const item = cart.indexOf(cart.find(item => item.id === piece.id))
          modifiedCart[item].quantity = modifiedCart[item].quantity+1
          setCart(modifiedCart)
      }

      setTotal(total+Number(piece.price))
      setCount(count+1)
    }
  }

  function showFooterPage() {
    window.scrollTo(0, 0)
    setPrivacy(true);
    setArt(false);
    setReturn(false);
    setAbout(false)
    setContact(false)
    setConformation(false);
    setCheckout(false);
  }

  function showFooterRet() {
    window.scrollTo(0, 0)
    setReturn(true);
    setPrivacy(false);
    setArt(false);
    setAbout(false)
    setContact(false)
    setConformation(false);
    setCheckout(false);
  }

  function showContactFn() {
    window.scrollTo(0, 0)
    setReturn(false);
    setPrivacy(false);
    setArt(false);
    setAbout(false)
    setContact(true)
    setConformation(false);
    setCheckout(false);

  }

  function showAboutFn() {
    window.scrollTo(0, 0)
    setContact(false)
    setReturn(false);
    setPrivacy(false);
    setArt(false);
    setAbout(true);
    setConformation(false);
    setCheckout(false);
  }

  function checkOutShow (){
    window.scrollTo(0, 0)
    setCheckout(true);
    setArt(false);
    setReturn(false);
    setPrivacy(false);
    setAbout(false);
    setContact(false);
    setConformation(false);
  }

  function showArtToggle(){
    setCheckout(false);
    setArt(true);
    setReturn(false);
    setPrivacy(false);
    setAbout(false);
    setContact(false);
    setConformation(false)
  }

  return (
    <>
      <Navigation
        showContactFn={showContactFn}
        showAboutFn={showAboutFn}
        total={total} 
        count={count} 
        showArt={showArtToggle}
        showCheck={checkOutShow}
      />

      {showCheckout && (
        <Checkout 
          showArt={showArtToggle}  
          clearCartAll={clearCart}
          cart={cart}
          updateItem={updateCart}
          totalPrice={total}
          completedPurchase={completedPurchase}

        />
      )}

      {showArt && (
        <Art update={updatePiece} artList={ listOfArt } />
      )}

      {showAbout   && <About /> }
      {showContact && <Contact /> }
      {showPrivacy && <PrivacyPolicy /> }
      {showReturn  && <ReturnPolicy /> }

      {showConformation && <Conformation />}
      <Footer 
        showFooterLink={showFooterPage} 
        showFooterReturn={showFooterRet} 
      />
    </>
  )
}
const listOfArt = [
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
      price: '40',
      run: null,
      note: '100% Cotton',
  }]