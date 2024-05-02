import { Route } from 'react-router-dom'

import { lazy } from 'react'
import ClientLayout from '../layouts/ClientLayout'
const Home = lazy(() => import('../pages/client/Home'))
export const PublicRoutes = (
  <Route path="/" element={<ClientLayout />}>
    <Route index element={<Home />} />
  </Route>
)
