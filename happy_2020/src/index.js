import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import Appcontiner from './containers/Appcontiner'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'

const store = createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )

ReactDOM.render(<Provider store={store}>
    <Appcontiner />
  </Provider>, document.getElementById('root'));

serviceWorker.unregister();
