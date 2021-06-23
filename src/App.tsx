import User from 'pages/User';
import Search from 'pages/Search';
import { Fragment } from 'react';
import bg from 'assets/img/bg.svg';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <Fragment>
        <Router>
            <Switch>
              <Route exact path="/"><Search /></Route>
              <Route exact path="/user"><User /></Route>
            </Switch>
        </Router>
    </Fragment>
      
  );
}

export default App;
