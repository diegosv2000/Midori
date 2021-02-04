import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import routes from './../routes';
/* 

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
*/
const Home = () => {

  return (
    
    <Router>
      <Switch>
        {
          routes.map(({ path, component }) => (
            <Route key={path} exact path={path}>
              {component}
            </Route>
          ))
        }
      </Switch>
    </Router>
  );
}

export default Home;