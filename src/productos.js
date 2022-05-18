import imgVestido from './components/Img/TejidosIndumentaria/VestidoTejidoNena.jpg'
import imgConjBebe from './components/Img/TejidosIndumentaria/ConjuntoBebe.png'
import imgBody from './components/Img/TejidosIndumentaria/BodyTejido.jpg'
import imgPant from './components/Img/TejidosIndumentaria/PantalonBebe.png'

export const productos = [
    {id:"1", name:"Vestido", price:"1900", img: imgVestido},
    {id:"2", name:"Conjunto-bebe", price:"1600", img: imgConjBebe},
    {id:"3", name:"Body", price:"1750", img: imgBody},
    {id:"4", name:"Pantalon", price:"1900", img:imgPant},
]


export const task = (id) => {
  return new Promise ((resolve, reject) => (
    setTimeout (() => {
      const query = id ? productos.find(productos => productos.id === id) : productos
      resolve(query)

    } ,2000 )
  ) )   
}

//export const task = new Promise ((resolve, reject) => (
  //setTimeout (() => {
    //resolve(productos)

  //} ,2000 )
//) ) 