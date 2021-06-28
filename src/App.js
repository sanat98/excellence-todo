
import {BrowserRouter,Switch ,Route,HashRouter } from 'react-router-dom';
import Main from "./pages/Main";
import Todo from "./pages/Todo";
import UsersList from './pages/UsersList';


function App() {
  return (
    
    <>
      <HashRouter>
    <div className="App">
    <Switch>
      <Route path="/" exact component={Main}></Route>
      <Route path="/todo" exact component={Todo}></Route>
      <Route path="/userlist" exact component={UsersList}></Route>

      </Switch>
      </div>
      </HashRouter>
      </>
      )
}

export default App;
