import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
// import {Provider} from 'react-redux';
// import {fetchProductsAction} from './store/api-actions';
// import {ThunkAppDispatch} from './types/action';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { store } from './store/store';

// (store.dispatch as ThunkAppDispatch)(fetchProductsAction());

ReactDOM.render(
  <React.StrictMode>
    {/* <Provider store = {store}> */}
    {/* <Provider > */}
    <ToastContainer />
    <App />
    {/* </Provider> */}
  </React.StrictMode>,
  document.getElementById('root'));
