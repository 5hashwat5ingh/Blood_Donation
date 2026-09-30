import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import WhyDonate from './pages/WhyDonate'
import Blood from './pages/Blood'
import DonationGuide from './pages/DonationGuide'
import Myths from './pages/Myths'
import Resources from './pages/Resources'
import FindCentre from './pages/FindCentre'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="why-donate" element={<WhyDonate />} />
        <Route path="blood" element={<Blood />} />
        <Route path="donation-guide" element={<DonationGuide />} />
        <Route path="myths" element={<Myths />} />
        <Route path="resources" element={<Resources />} />
        <Route path="find-centre" element={<FindCentre />} />
      </Route>
    </Routes>
  )
}
