import { Route } from 'react-router-dom'

import { lazy } from 'react'
import ClientLayout from '../layouts/ClientLayout'
import { BlogCategories, BlogDetail } from '../pages/client/Blog'
import { routeConfig } from '../configs/route.config'

const Home = lazy(() => import('../pages/client/Home'))

export const PublicRoutes = (
  <Route path="/" element={<ClientLayout />}>
    <Route index element={<Home />} />
    <Route path={`${routeConfig.blogDetail.path}/:id`} element={<BlogDetail />} />
    <Route path={`${routeConfig.categories.path}/:category`} element={<BlogCategories />} />
  </Route>
)
