import imgVestido from './components/Img/TejidosIndumentaria/VestidoTejidoNena.jpg'
import imgConjBebe from './components/Img/TejidosIndumentaria/ConjuntoBebe.png'
import imgBody from './components/Img/TejidosIndumentaria/BodyTejido.jpg'
import imgPant from './components/Img/TejidosIndumentaria/PantalonBebe.png'
import imgPoncho from './components/Img/TejidosIndumentaria/poncho.jpg'
import imgSacoBebe from './components/Img/TejidosIndumentaria/SacoBebe.jpg'
import imgCiervo from './components/Img/Amigurumis/ciervo.jpg'
import imgGallo from './components/Img/Amigurumis/gallo.jpg'
import imgHipo from './components/Img/Amigurumis/Hipo.jpg'
import imgMuneca from './components/Img/Amigurumis/muneca.jpg'
import imgObeja from './components/Img/Amigurumis/obeja.jpg'
import imgZorro from './components/Img/Amigurumis/zorro.jpg'



export const productos = [
    {id:"1", category: "Indumentaria", name:"Vestido", price:"1900", img: imgVestido},
    {id:"2", category: "Indumentaria", name:"Conjunto-bebe", price:"1600", img: imgConjBebe},
    {id:"3", category: "Indumentaria", name:"Body", price:"1750", img: imgBody},
    {id:"4", category: "Indumentaria", name:"Pantalon", price:"1900", img:imgPant},
    {id:"5", category: "Indumentaria", name:"Poncho", price:"2250", img: imgPoncho},
    {id:"6", category: "Indumentaria", name:"SacoBebe", price:"1900", img:imgSacoBebe},
    {id:"7", category: "Amigurumis", name:"ciervo", price:"1500", img: imgCiervo},
    {id:"8", category: "Amigurumis", name:"gallo", price:"1600", img: imgGallo},
    {id:"9", category: "Amigurumis", name:"Hipopotamo", price:"1750", img: imgHipo},
    {id:"10", category: "Amigurumis", name:"muneca", price:"2000", img:imgMuneca},
    {id:"11", category: "Amigurumis", name:"oveja", price:"1600", img: imgObeja},
    {id:"12", category: "Amigurumis", name:"zorro", price:"1700", img:imgZorro},

]


export const task = (id) => {
  return new Promise ((resolve, reject) => (
    setTimeout (() => {
      const query = id ? productos.find(producto => producto.id === id) : productos
      resolve(query)

    } ,2000 )
  ) )   
}

//export const task = new Promise ((resolve, reject) => (
  //setTimeout (() => {
    //resolve(productos)

  //} ,2000 )
//) ) 