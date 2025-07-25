import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { GoogleOAuthProvider } from '@react-oauth/google';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="372176195103-h3nsthgr0nbtpen0jqk61ciss94dlss7.apps.googleusercontent.com">
    <App />
      </GoogleOAuthProvider>;
  </React.StrictMode>
)
