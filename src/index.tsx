import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { store } from './app/store';
import { Provider } from 'react-redux';
import IntegrationNotistack from './components/Snackbar/Snackbar';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <IntegrationNotistack>
                <ToastContainer />
                url
                <App />
            </IntegrationNotistack>
        </Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// https://github.com/dasniko/keycloak-reactjs-demo

// -------
// https://www.youtube.com/watch?v=5z6gy4WGnUs&t=2s

// github repo:
// https://github.com/karthik947/keycloa...
// https://www.keycloak.org/getting-star...
// https://www.keycloak.org/server/conta...
// https://www.npmjs.com/package/keycloa...
// https://vitejs.dev/guide/env-and-mode...



// https://www.youtube.com/watch?v=BoajOK5f7Oo&t=1144s
