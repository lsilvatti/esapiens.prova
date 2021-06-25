import Profile from 'pages/Profile';
import NotFound from 'pages/NotFound';
import Home from 'pages/Home';
import Search from 'pages/Search'
import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {

  return (
    <Fragment>
        <Router>
            <Switch>
              <Route exact path="/"><Home /></Route>
              <Route path={`/user/:userId`}><Profile /></Route>
              <Route exact path="/search"><Search /></Route>
              <Route><NotFound /></Route>
            </Switch>
        </Router>
    </Fragment>
      
  );
}

export default App;
