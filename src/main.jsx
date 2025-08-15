import { StrictMode } from 'react';
import './index.css';
import App from './App.jsx';
import ReactDOM from 'react-dom/client';
import AuthProvider from './providers/AuthProvider.jsx';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <AuthProvider>
        <StrictMode>
          <App />
        </StrictMode>
      </AuthProvider>
    </BrowserRouter>
  </Provider>,
);
