import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import history from './history'
import routes from './routes'

ReactDOM.render(<Router history={history} routes={routes}><App /></Router>, document.getElementById('root'));
registerServiceWorker();
