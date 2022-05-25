
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './Container/ItemListContainer';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import ItemDetailContainer from './Container/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import CartContextProv  from '../src/Context/CartContext';









function App() {
  return (
    <BrowserRouter>
    <CartContextProv> 
        <div className="App">
            <NavBar/>
            <Routes>
                <Route path="/" element = { <ItemListContainer saludar= {'Gracias por ingresar.'} /> } />
                <Route path="/category/:id" element = { <ItemListContainer saludar= {'Gracias por ingresar.'} /> } />
                <Route path="/detail/:detailId" element = { <ItemDetailContainer /> } />
                <Route path="/Cart" element={<Cart/>} />
            </Routes>        
        </div>
        </CartContextProv>
    </BrowserRouter>
  )
}


export default App;
