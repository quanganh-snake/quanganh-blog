import { Route, Routes } from 'react-router-dom'
import { PublicRoutes } from './PublicRoutes.jsx'
import { lazy } from 'react'

const PageError404 = lazy(() => import('../pages/errors/404/404.jsx'))

export const RootRouter = (
  <Routes>
    {PublicRoutes}
    <Route path="*" element={<PageError404 />} />
  </Routes>
)
