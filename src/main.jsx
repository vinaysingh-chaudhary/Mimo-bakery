import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'

import AboutPage from './Pages/AboutPage/AboutPage.jsx'
import CartPage from './Pages/CartPage/CartPage.jsx'
import ErrorPage from './Pages/ErrorPage/ErrorPage.jsx'
import DetailPage from './Pages/DetailPage/DetailPage.jsx'
import ListingPage from './Pages/ListingPage/ListingPage.jsx'
import SearchResultPage from './Pages/SearchResultPage/SearchResultPage.jsx'
import WishListPage from './Pages/WishListPage/WishListPage.jsx'
import store from './Store_Redux/store.js'





const webAppRouting = createBrowserRouter([
     {
        path:"/",
        element: <App/>,
        errorElement : <ErrorPage/>,
        children: [
          {
            path: "/",
            element: <ListingPage/>
          },
          {
            path: "details/:id",
            element: <DetailPage/>
          },
          {
            path: "cart",
            element: <CartPage/>
          },
          {
            path: "wishlist",
            element: <WishListPage/>
          },
          {
            path: "search/:query",
            element: <SearchResultPage/>
          },
          {
            path: "about",
            element: <AboutPage/>
          },
        ]
    }
])


ReactDOM.createRoot(document.getElementById('root')).render(

  <Provider store={store}>
  <RouterProvider router={webAppRouting} />
  </Provider>

)
