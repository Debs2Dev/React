import React from 'react';
import './App.css';
import logo from './logo.png';
import { useState } from 'react';

function App()
{
  
  // Hook - função que permite adicionar um estado a um componente funcional
  const [tarefa, setTarefa] = useState('');
  const [tarefas, setTarefas] = useState([]);

  const adicionarTarefa = () =>  {
    if(!tarefa.trim())
    {
      alert('Por favor, digite uma tarefa.');
      return;
    }
    
    if (tarefas.includes(tarefa.trim()))
      { 
      alert('Tarefa já existe na lista');
      return;
    }
    // Adicionando nova tarefa na lista''
    setTarefas([...tarefas, tarefa])
    // Limpando o campo de texto
    setTarefa('');

  }

  return (
    <div className='App'>
      <div className='container'>
      <h1>Meu projeto</h1>
      <img src={logo} alt="Logo da empresa" />
      <hr/>
      <h2>Adicionar tarefas</h2>
      <input
        type="text"
        placeholder="Digite o nome da tarefa"
        value={tarefa}
        onChange={(e) => setTarefa(e.target.value)}
      />

      <button onClick={adicionarTarefa}>Adicionar</button>
      <hr/>
      <h2>Lista de tarefas</h2>
      <ol>
        {tarefas.map((tarefa, index) => (<li key={index}>{tarefa}</li>))}
      </ol>
      </div>
    </div>
  );
}

export default App;