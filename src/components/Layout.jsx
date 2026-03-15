import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import Fab from './Fab';
import ActionRapideModal from './ActionRapideModal';
import './Layout.css';

export default function Layout() {
  const [actionRapideOpen, setActionRapideOpen] = useState(false);

  return (
    <div className="app-layout">
      <Sidebar />
      <div className="app-main">
        <Header />
        <main className="app-content">
          <Outlet />
        </main>
        <Fab onClick={() => setActionRapideOpen(true)} />
      </div>
      <ActionRapideModal isOpen={actionRapideOpen} onClose={() => setActionRapideOpen(false)} />
    </div>
  );
}
