import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Todo from './components/Todo.jsx'
import Timer from './components/Timer.jsx'
import Recipe from './components/Recipe.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <Recipe />
    {/* <Todo /> */}
    {/* <Timer /> */}
    {/* <RegistrationPage /> */}
  </React.StrictMode>
)
