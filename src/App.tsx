import 'primereact/resources/themes/lara-light-indigo/theme.css' //theme
import 'primereact/resources/primereact.min.css' //core css
import 'primeicons/primeicons.css'
import './App.scss'

import { Route, Routes } from 'react-router'

import { ROUTES } from '@/data/constants/routes'
import BottomsPage from '@/pages/BottomsPage'
import FavoritesPage from '@/pages/FavoritesPage'
import TopsPage from '@/pages/TopsPage'

import MainLayout from './layouts/MainLayout'

function App() {
    return (
        <Routes>
            <Route path={ROUTES.HOME} element={<MainLayout />}>
                <Route path={ROUTES.BOTTOMS} element={<BottomsPage />} />
                <Route path={ROUTES.FAVORITES} element={<FavoritesPage />} />
                <Route path={ROUTES.TOPS} element={<TopsPage />} />
                <Route path="*" element={<h1>404</h1>} />
            </Route>
        </Routes>
    )
}

export default App
