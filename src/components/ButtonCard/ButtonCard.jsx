import { Link } from 'react-router-dom'
import './ButtonCard.css'

export default function ButtonCard () {

  return (
    <div className="buyButtons">
        <Link to='/Cart'>
            <button className="Buttons__goToCart">Ver pedido</button>
        </Link>
        <Link to='/'>
            <button className="Buttons__goToMenu">Volver al menú</button>
        </Link>
    </div>
  );
}

