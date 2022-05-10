
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItenListContainer';









function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer saludar= {'Gracias por ingresar.'} />
     </div>
  );
}

export default App;
