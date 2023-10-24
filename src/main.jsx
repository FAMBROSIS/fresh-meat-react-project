import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import HomePage from './components/HomePage.jsx'
import TheNavbar from './components/TheNavbar.jsx'
import { BrowserRouter } from 'react-router-dom'
import Video from './components/Video.jsx'
import Content from './components/Content.jsx'
import Tools from './components/Tools.jsx'
import Converter from './components/Converter.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
