import React from 'react'
import { render } from 'react-dom'
import routes from './routes'
import constants from './constants'
import sampleData from './initialState'
//import storeFactory from './store/store.js'
//import { suggestGameNames } from './actions/days'

//const store = storeFactory()

const initialState = (localStorage["redux-store"]) ?
    JSON.parse(localStorage["redux-store"]) :
    sampleData

const saveState = () => 
    localStorage["redux-store"] = JSON.stringify(store.getState())

window.React = React

render(
	routes,
	document.getElementById('react-container')
)
