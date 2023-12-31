import React, {useState} from 'react';
import styled, { createGlobalStyle } from 'styled-components/macro';

import Todo from './components/Todo';
import TodoForm from './components/TodoForm';

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Ubuntu', sans-serif;
    transition: all 0.25s;
  }
  body {
    overflow: auto;
    height: 100%;
  } 
`;

const Container = styled.div`
  padding-top: 100px;
  padding-bottom: 100px;
  margin: 10px;
  text-align: center;
  border: 2px solid;
  border-radius: 10px;
  overflow: auto;
`;

const ContainerList = styled.div`
  padding-top: 100px;
  padding-bottom: 100px;
  margin: 10px;
  text-align: center;
  border: 2px solid;
  border-radius: 10px;
  overflow: auto;
`;

const H1 = styled.h1`
  color: black;
`;

const H2 = styled.h1`
  color: black;
`;

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todoText) => {
    setTodos([...todos, { text: todoText, id: Date.now() }]);
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <Container>
      <GlobalStyle />
      <H1>Ciao Corso!!</H1>
      <H2>Siete pronti a imparare le basi della programmazione web ?!?</H2> 
      <TodoForm addTodo={addTodo}/>
      <ContainerList>
      {todos.map((todo) => (
        <Todo key={todo.id} id={todo.id} value={todo.text} removeTodo={removeTodo} />
      ))}
      </ContainerList>
    </Container> 
  )
};

export default App;