// import logo from './logo.svg';
import './App.css';
// import HelloWorld from './components/HelloWorld';
// import Frase from './components/Frase';
// import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import List from './components/List'
import Evento from './components/Evento';
import Form from './components/Form';
import Condicional from './components/Condicional';
import Listas from './components/Listas';

function App() {

  const meusItens = ['React' , 'Vue' , 'Angular']
  
  const nome = 'Vinicius'
  
  return (

    <div className="App">
      <Pessoa 
      nome={nome} tempo="10seg" foto="./logo192.png" comentario="A comida estava maravilhosa, nunca comi uma refeiçao tao boa na minha vida"/>
      <List/>

      <h1>Testando Eventos</h1>

      <Evento numero={1}/>
      
      <Form/>

      <h1>Renderização Condicional</h1>

      <Condicional/>

      <h1>Renderização de Listas</h1>

      <Listas itens={meusItens}/>
    </div>
  );
}

export default App;
