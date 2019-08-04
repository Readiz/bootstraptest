import './App.css'

import * as React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'

class App extends React.Component<{}, {}> {
  render() {
    return <div className="App">
      <Container>
        <Row>
          <Col md={2}>
            <Button>Test Btn!</Button>
          </Col>
          <Col md={6}>
            <Button>Test Btn!</Button>
          </Col>
          <Col md={4}>
            <Button>Test Btn!</Button>
          </Col>
        </Row>
      </Container>
    </div>
  }
}

export default App
