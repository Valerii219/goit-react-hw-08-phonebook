import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import { store} from './store/store'
import { Provider } from 'react-redux';
import { BrowserRouter} from 'react-router-dom';
import { App } from 'components/App';

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <Provider store={store}>
    
  <React.StrictMode>
  <BrowserRouter basename="goit-react-hw-08-movies">
    <App />
    </BrowserRouter>
  </React.StrictMode>
 </Provider>
 
);
