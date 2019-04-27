import React from 'react'
import ReactDOM from 'react-dom'

import IndecisionApp from './components/App'

import 'normalize.css/normalize.css'
import './styles/main.scss'

const appRoot = document.getElementById('app')
ReactDOM.render(<IndecisionApp />, appRoot)
