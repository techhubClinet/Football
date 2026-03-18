import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import Fab from './Fab';
import ActionRapideModal from './ActionRapideModal';
import './Layout.css';

export default function Layout() {
  const [actionRapideOpen, setActionRapideOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (sidebarOpen) {
      document.body.classList.add('sidebar-open');
    } else {
      document.body.classList.remove('sidebar-open');
    }
    return () => document.body.classList.remove('sidebar-open');
  }, [sidebarOpen]);

  return (
    <div className="app-layout">
      <div
        className="sidebar-overlay"
        aria-hidden={!sidebarOpen}
        onClick={() => setSidebarOpen(false)}
      />
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="app-main">
        <Header onMenuClick={() => setSidebarOpen(true)} />
        <main className="app-content">
          <Outlet />
        </main>
        <Fab onClick={() => setActionRapideOpen(true)} />
      </div>
      <ActionRapideModal isOpen={actionRapideOpen} onClose={() => setActionRapideOpen(false)} />
    </div>
  );
}
