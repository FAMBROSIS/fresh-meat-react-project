import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './components/RegistrationPage.jsx'
import RegistrationPage from './components/RegistrationPage.jsx'
import Todo from './components/Todo.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <Todo />
    {/* <RegistrationPage /> */}
  </React.StrictMode>
)
