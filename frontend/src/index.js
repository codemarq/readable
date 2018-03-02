import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import registerServiceWorker from './registerServiceWorker'
import { loadPosts } from './actions/postActions'
import App from './components/App'
import './styles/index.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

const store = configureStore()
store.dispatch(loadPosts())

render(
	<Provider store={store}>
		<Router>
			<App />
		</Router>
	</Provider>,
	document.getElementById('root')
);

registerServiceWorker();
