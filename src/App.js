// @flow
// flow-disable-next-line
import React, { Component } from 'react';
// flow-disable-next-line
import './App.css';
// flow-disable-next-line
import { Navbar, Jumbotron, Button,Grid } from 'react-bootstrap';

type Props = {
};

class App extends Component<Props> {
  constructor() {
    super();
    document.title = 'test';
  }
  render() {
    return (
      <div>
        <Navbar inverse fixedTop>
          <Grid>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="/">React App</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
          </Grid>
        </Navbar>
        <Jumbotron>
          <Grid>
            <h1>Welcome to React</h1>
            <p>
              <Button
                bsStyle="success"
                bsSize="large"
                href="http://react-bootstrap.github.io/components.html"
                target="_blank">
                View React Bootstrap Docs
              </Button>
            </p>
          </Grid>
        </Jumbotron>
      </div>
    );
  }
}

export default App;
