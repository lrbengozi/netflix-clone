import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'

import Home from './Home'
import Watch from './Watch'

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Home} path="/" exact />
      <Route component={Watch} path="/watch/:id" />
    </BrowserRouter>
  )
}

export default Routes
