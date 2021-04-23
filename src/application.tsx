import { render } from 'preact';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { NoMatch, Welcome, Greetings } from '__/Indexes/views';
import '__/style.css';

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Welcome />
          </Route>
          <Route path="/hi/:name">
            <Greetings />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

render(<App />, document.getElementById('app')!);
