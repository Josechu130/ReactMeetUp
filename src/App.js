import { Routes, Route } from 'react-router-dom'

import AllMeetupsPage from './pages/AllMeetupsPage'
import FavoritesPage from './pages/Favorites'
import NewMeetupsPage from './pages/NewMeetup'
import NotFound from './pages/NotFound'

import MainNavigation from './components/layout/MainNavigation'
import Layout from './components/layout/Layout'

function App () {
  return (
    <div data-test="app">
      <MainNavigation />
      <Layout>
        <Routes>
          <Route path='/' element={<AllMeetupsPage />} />
          <Route path='/newmeetup' element={<NewMeetupsPage />} />
          <Route path='/favorites' element={<FavoritesPage />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Layout>
    </div>
  )
}

export default App
