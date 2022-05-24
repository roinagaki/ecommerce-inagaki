import { Link } from 'react-router-dom'
 
const ButtonCard = () => {
  return (
    <div className="buyButtons">
    <Link to='/cart'>
        <button className="Buttons__goToCart">Ver pedido</button>
    </Link>
    <Link to='/'>
        <button className="Buttons__goToMenu">Volver al menú</button>
    </Link>
    </div>
  )
}

export default ButtonCard