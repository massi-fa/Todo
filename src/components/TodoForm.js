import React, {useState} from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';

import create from '../res/images/create.png';

const Container = styled.div`
  margin: 10px;
  text-align: center;
  border: 2px solid;
  border-radius: 10px;
  display: flex;
  justify-content: space-around;
`;

const Input = styled.input`
  width: 8rem;
  height: 4rem;
  font-size: 1.2rem;
  text-align: center;
  margin: auto;
  outline: none;
  border: none;
`;

const Button = styled.button`
  outline: none;
  border: none;
  background-color: white;
`;

const Icon = styled.img`
  width: 1.5rem;
  margin: 2px;
`;

const TodoForm = ({addTodo}) => {
  const [text, setText] = useState('');
  const funzione = () => (
    console.log(text),
    addTodo(text),
    setText('')
  )
  return (
    <Container>
      <Input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Aggiungi"
      />
      <Button onClick={funzione}>
        <Icon src={create} />
      </Button>
    </Container>
  )
}

TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default TodoForm;
