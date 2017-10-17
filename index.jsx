import React from 'react'
import { render } from 'react-dom'
import Menu from './components/Menu.jsx'
import data from './data/recipes.js'

window.React = React

render(
    <Menu recipes={data} />,
    document.getElementById('react-container')
)

