import { render } from 'preact';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { NoMatch, Hello } from '__/Indexes/views';
import '__/style.css';

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/"></Route>
          <Route path="/hello">
            <Hello />
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
