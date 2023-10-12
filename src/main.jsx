import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Todo from './components/Todo.jsx'
import Timer from './components/Timer.jsx'
import Recipe from './components/Recipe.jsx'
import Video from './components/Video.jsx'
import Music from './components/Music.jsx'
import Converter from './components/Converter.jsx'
import TimerWrapper from './components/TimerWrapper.jsx'
import { BrowserRouter } from 'react-router-dom'
import VeganRecipe from './components/VeganRecipe.jsx'
import Theme from './components/Theme.jsx'
import HomePage from './components/HomePage.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    {/* <VeganRecipe /> */}
    <App />
    {/* <Theme /> */}
    </BrowserRouter>
)
