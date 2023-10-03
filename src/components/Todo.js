import React from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';


const Container = styled.div`
  padding-top: 100px;
  padding-bottom: 100px;
  margin: 10px;
  text-align: center;
  border: 2px solid;
  border-radius: 10px;
`;

const H1 = styled.h1`
  color: black;
`;

const Todo = ({ value }) => (
  <Container>
    <H1>{value}</H1>
  </Container>
);

Todo.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Todo;





