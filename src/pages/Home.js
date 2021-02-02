import React from 'react';
import Welcome from './Welcome';
import Search from './Search';
import Lists from './Lists';
import Members from './Members';
import MemberData from './MemberData';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';


const Home = () => {

  return (
    
    <Router>
      <Switch>

        <Route path='/' exact>
          <Welcome />
        </Route>

        <Route path='/Elecciones' >
          <Search />
        </Route>

        <Route path='/Listas' >
          <Lists />
        </Route>

        <Route path='/Miembros' >
          <Members />
        </Route>

        <Route path='/Miembro' >
          <MemberData />
        </Route>

      </Switch>
    </Router>
    
    
  );
}

export default Home;
