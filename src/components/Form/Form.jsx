
import { useState } from "react";
import { useCartContext } from "../../Context/CartContext";
import { Button } from "react-bootstrap";
import './Form.css'



export const Form = () => {
  const [buyer, setBuyer] = useState({});
  const [nameError, setNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [repeatEmailError, setRepeatEmailError] = useState(false);
    
    const { createOrder } = useCartContext();
    
    
  
    function handleInputChange(e) {
      setBuyer({
        ...buyer,
        [e.target.name]: e.target.value,
      });
    }

    const dataManage = () => {
      setNameError(!buyer.name);
      setLastNameError(!buyer.lastName);
      setEmailError(!buyer.email);
      setRepeatEmailError(!(buyer.repeatEmail === buyer.email));
      if (buyer.name && buyer.lastName && buyer.email && (buyer.repeatEmail === buyer.email)) {
          createOrder(buyer);
          
      }
  }

    
  
    return (
      
      <div className="cart-form mt-5 cartInfo">
        <h2>Por favor complete sus datos:</h2>
        <form action=""  >
          <div className="form_cart">
          <input
            type="email"
            placeholder="Ingrese su mail"
            name="email"
            onChange={(e)=> handleInputChange(e)}
            size="100"
          />
        {emailError && <span className="text-danger text-small d-block mb-2">Campo obligatorio</span>}
        
          </div>
          <div className="form_cart">
          <input 
            type="email"
            placeholder="Repita su mail"
            name="repeatEmail"
            onChange={handleInputChange}
            size="100"
          />
          {repeatEmailError && <span className="text-danger text-small d-block mb-2">El correo no coincide</span>}
          </div>
          <div className="form_cart">
          <input 
            type="text"
            placeholder="Nombre"
            name="name"
            onChange={handleInputChange}
            size="100"
          />
          {nameError && <span className="text-danger text-small d-block mb-2">Debe ingresar un nombre</span>}
          </div>
          <div className="form_cart">
          <input 
            type="text"
            placeholder="Apellido"
            name="lastName"
            onChange={handleInputChange}
            size="100"
          />
          {lastNameError && <span className="text-danger text-small d-block mb-2">Campo obligatorio</span>}
          </div>
        <br />
        <Button variant="success" onClick={dataManage} > Comprar </Button>
        </form>
        <br />
      </div>
      
    );
  };

export default Form