import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Player from './Player Component';
import players from './Players Data Array';

const PlayersList = () => {
  return (
    <Container>
      <Row style={{display: "flex"}}>
        {players.map((player, index) => (
          <Col key={index} md={4}>
            <Player {...player} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PlayersList;
