import React from 'react';
import { Container } from 'react-bootstrap';
import { DataContainer } from './containers';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Switch>
          <Route exact path="/">
            <DataContainer type="list" />
          </Route>
          <Route exact path="/person/:id(\d+)">
            <DataContainer type="profile" />
          </Route>
          <Route>
            Erreur 404
          </Route>
        </Switch>
      </Container>
    </BrowserRouter>
  );
}

export default App;
