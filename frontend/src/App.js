import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Home } from './pages/Home';
import { Details } from './pages/Details';

export function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route 
          path='/'
          exact
          component={ Home }
        />

        <Route 
          path='/details/:id'
          component={ Details }
        />
      </Switch>
    </BrowserRouter>
  );
}