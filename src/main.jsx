import React, {lazy, Suspense} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './Store_Redux/store.js'

import ErrorPage from './Pages/ErrorPage/ErrorPage.jsx'
import ListingPage from './Pages/ListingPage/ListingPage.jsx'
import { Toaster } from 'react-hot-toast'

const CartPage = lazy(() => import('./Pages/CartPage/CartPage.jsx'));
const SearchResultPage = lazy(() => import('./Pages/SearchResultPage/SearchResultPage.jsx'));
const AboutPage = lazy(() => import('./Pages/AboutPage/AboutPage.jsx'));



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
            path: "cart",
            element: (<Suspense><CartPage/></Suspense>)
          },
          {
            path: "search",
            element: (<Suspense><SearchResultPage/></Suspense>)
          },
          {
            path: "about",
            element: (<Suspense><AboutPage/></Suspense>)
          },
        ]
    }
])


ReactDOM.createRoot(document.getElementById('root')).render(

  <Provider store={store}>
  <RouterProvider router={webAppRouting} />
  <Toaster/>
  </Provider>

)
