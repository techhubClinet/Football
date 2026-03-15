import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import PlayerPortfolio from './pages/PlayerPortfolio';
import ContactsCRM from './pages/ContactsCRM';
import ProfileViews from './pages/ProfileViews';
import Scouting from './pages/Scouting';
import NeedsExchange from './pages/NeedsExchange';
import MercatoMap from './pages/MercatoMap';
import Network from './pages/Network';
import Finances from './pages/Finances';
import Timesheet from './pages/Timesheet';
import Settings from './pages/Settings';
import Messagerie from './pages/Messagerie';
import Reporting from './pages/Reporting';
import Marketplace from './pages/Marketplace';
import PlayerProfile from './pages/PlayerProfile';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/portefeuille-joueurs" element={<PlayerPortfolio />} />
          <Route path="/joueur/:id" element={<PlayerProfile />} />
          <Route path="/contacts" element={<ContactsCRM />} />
          <Route path="/scouting" element={<Scouting />} />
          <Route path="/bourse-besoins" element={<NeedsExchange />} />
          <Route path="/carte-mercato" element={<MercatoMap />} />
          <Route path="/reseau" element={<Network />} />
          <Route path="/finances" element={<Finances />} />
          <Route path="/feuille-temps" element={<Timesheet />} />
          <Route path="/vues-profil" element={<ProfileViews />} />
          <Route path="/parametres" element={<Settings />} />
          <Route path="/messagerie" element={<Messagerie />} />
          <Route path="/reporting" element={<Reporting />} />
          <Route path="/marketplace" element={<Marketplace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
