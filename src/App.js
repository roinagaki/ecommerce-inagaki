
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './Container/ItemListContainer';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import ItemDetailContainer from './Container/ItemDetailContainer';










function App() {
  return (
    <BrowserRouter>
        <div className="App">
            <NavBar/>
            <Routes>
                <Route path="/" element = { <ItemListContainer saludar= {'Gracias por ingresar.'} /> } />
                <Route path="/category/:id" element = { <ItemListContainer saludar= {'Gracias por ingresar.'} /> } />
                <Route path="/detail/:detailId" element = { <ItemDetailContainer /> } />
            </Routes>        
        </div>
    </BrowserRouter>
  )
}

export default App;
