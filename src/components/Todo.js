import React from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';

import icon from '../res/images/x.png'

const Container = styled.div`
  margin: 10px;
  text-align: center;
  border: 2px solid;
  border-radius: 10px;
  display: flex;
  justify-content: space-around;

`;

const H1 = styled.h1`
  color: black;
  margin: auto;
  font-size: 1.2rem;
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

const Todo = ({ id, value, removeTodo }) => {
  
  return (
    <Container>
      <H1>{value}</H1>
      <Button onClick={() => removeTodo(id)}>
        <Icon src={icon} alt="Delete" />
      </Button>
    </Container>
  )
};

Todo.propTypes = {
  id: PropTypes.number.isRequired,
  value: PropTypes.string.isRequired,
  removeTodo: PropTypes.func.isRequired,
};

export default Todo;





