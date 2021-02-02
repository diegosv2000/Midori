import React from 'react';
import Welcome from './Welcome';
import Search from './Search';
import Lists from './Lists';
import Members from './Members';
import MemberData from './MemberData';
import NotFound from './NotFound';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';



const Home = () => {

  return (
    
    <Router>
      <Switch>

        <Route path='/' exact>
          <Welcome />
        </Route>

        <Route path='/Elecciones' exact>
          <Search />
        </Route>

        <Route path='/Listas' exact >
          <Lists />
        </Route>

        <Route path='/Miembros' exact>
          <Members />
        </Route>

        <Route path='/Miembro' exact>
          <MemberData />
        </Route>

        <Route path='*'>
          <NotFound />
        </Route>

      </Switch>
    </Router>
    
    
  );
}

export default Home;
