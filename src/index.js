import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import Home from './pages/Home/App';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './pages/Login/Login';
import Agenda from './pages/agenda/agenda';

//import Login from './components/Login/Login';
import CadastroVideo from './pages/cadastro/Video'; //'./pages/cadastro/Video';

const Pagina404 = () => <div>Página 404</div>;

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/Login" component={Login} exact />
      <Route path="/cadastro/video" component={CadastroVideo} exact />
      <Route path="/agenda" components={Agenda} />
      <Route component={Pagina404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
