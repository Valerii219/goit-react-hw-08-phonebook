import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import { store} from './store/store'
import { Provider } from 'react-redux';
import { BrowserRouter} from 'react-router-dom';
import { App } from 'components/App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Provider store={store}>
  <BrowserRouter 
  basename="goit-react-hw-08-phonebook"
  >
    <App />
    </BrowserRouter>
 </Provider>
 </React.StrictMode>
 
);