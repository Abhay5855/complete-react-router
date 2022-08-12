
import './App.css';
import Posts from './components/Posts';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PublicRoutes from './routes/PublicRoute';
import PrivateRoutes from './routes/PrivateRoute';
import Dashboard from "./components/Dashboard"
import Preferences from "./components/Preferences"
import Signup from "./components/Signup"
import NotFound from './components/NotFound';

// Axios Interceptor



function App() {
  return (
    <div className="App">
     
     <BrowserRouter>
        <Switch>
          <PublicRoutes restricted={false} component={Signup} path="/" exact />
          <PrivateRoutes
            restricted={true}
            component={Dashboard}
            path="/dashboard"
          />
          <PrivateRoutes
            restricted={true}
            component={Preferences}
            path="/preferences"
          />
          <PrivateRoutes
            restricted={true}
            component={Posts}
            path="/posts"
          />
          <Route path='*' component={NotFound}/>
        </Switch>

      </BrowserRouter>
   
      
    </div>
  );
}

export default App;
