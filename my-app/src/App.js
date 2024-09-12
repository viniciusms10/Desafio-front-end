// import logo from './logo.svg';
import './App.css';
// import HelloWorld from './components/HelloWorld';
// import Frase from './components/Frase';
// import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import List from './components/List'
import Evento from './components/Evento';
import Form from './components/Form';

function App() {
  
  const nome = 'Vinicius'
  
  return (

    <div className="App">
      <Pessoa 
      nome={nome} tempo="10seg" foto="./logo192.png" comentario="A comida estava maravilhosa, nunca comi uma refeiçao tao boa na minha vida"/>
      <List/>

      <h1>Testando Eventos</h1>

      <Evento numero={1}/>
      <Evento numero={2}/>
      <Form/>
    </div>
  );
}

export default App;
