import React from 'react'
import {browserHistory, Router, Route, Redirect, IndexRoute} from 'react-router'
import Container from './Container'

export const makeMainRoutes = () => {
   //const main = makeMainRoutes();

   return (
		<Route path="/" component={ Container } >
			<IndexRoute component={Container}/>
		</Route>

	)
}

export default makeMainRoutes