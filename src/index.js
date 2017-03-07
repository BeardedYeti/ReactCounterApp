import React from 'react'
import { render } from 'react-dom'
import './stylesheets/ui.scss'
import './stylesheets/index.scss'
import routes from './routes'
import constants from './constants'
import storeFactory from './store/store.js'
import { suggestGameNames } from './actions/days'

const store = storeFactory()

window.React = React

render(
	routes,
	document.getElementById('react-container')
)
