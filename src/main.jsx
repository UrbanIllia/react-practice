import { StrictMode } from 'react';
import './index.css';
import App from './App.jsx';
import ReactDOM from 'react-dom/client';
import AuthProvider from './providers/AuthProvider.jsx';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store.js';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <AuthProvider>
          <StrictMode>
            <App />
          </StrictMode>
        </AuthProvider>
      </BrowserRouter>
    </PersistGate>
  </Provider>,
);
