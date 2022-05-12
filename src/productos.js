


export const productos = [
    {id:"1", name:"Vestido", price:"1900", img:""},
    {id:"2", name:"Conjunto-bebe", price:"1600"},
    {id:"3", name:"Body", price:"1750"},
    {id:"4", name:"Pantalon", price:"1900"},
]


export const task = new Promise ((resolve, reject) => (
    setTimeout (() => {
      resolve(productos)

    } ,2000 )
  ) )   