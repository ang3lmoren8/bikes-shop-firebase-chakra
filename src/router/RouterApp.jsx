import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Store from '../views/Store'
import ShoppingCart from '../views/ShoppingCart'
import { shoppingCartPath, storePath } from './routes'
import MainLayout from '../layouts/MainLayout'

const RouterApp = () => {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route exact path={storePath} element={<Store />} />
          <Route path={shoppingCartPath} element={<ShoppingCart />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  )
}

export default RouterApp
