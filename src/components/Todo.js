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
`;

const Icon = styled.img`

`;

const Todo = ({ value }) => {
  
  const funzione = () => (
    console.log('Dovrei fare qualcosa...' + value + ' ....')
  ) 

  return (
    <Container>
      <H1>{value}</H1>
      <Button onClick={funzione}>
        <Icon src={icon} />
      </Button>
    </Container>
  )
};

Todo.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Todo;





