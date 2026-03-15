import { NavLink } from 'react-router-dom';
import { Gem, NavIcon } from './Icons';

const navItems = [
  { path: '/', label: 'Dashboard', icon: 'dashboard' },
  { path: '/portefeuille-joueurs', label: 'Portefeuille Joueurs', icon: 'players' },
  { path: '/contacts', label: 'Contacts / CRM', icon: 'contacts' },
  { path: '/scouting', label: 'Scouting', icon: 'scouting' },
  { path: '/bourse-besoins', label: 'Bourse aux Besoins', icon: 'needs' },
  { path: '/carte-mercato', label: 'Carte Mercato', icon: 'mercato' },
  { path: '/reseau', label: 'Réseau', icon: 'network' },
  { path: '/finances', label: 'Finances', icon: 'finances' },
  { path: '/feuille-temps', label: 'Feuille de Temps', icon: 'timesheet' },
  { path: '/vues-profil', label: 'Vues du Profil', icon: 'profileViews' },
  { path: '/parametres', label: 'Paramètres', icon: 'settings' },
  { path: '/messagerie', label: 'Messagerie', icon: 'messagerie', badge: 5 },
  { path: '/reporting', label: 'Reporting', icon: 'reporting' },
  { path: '/marketplace', label: 'Marketplace', icon: 'marketplace' },
];

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <span className="sidebar-logo">
          <Gem size={22} strokeWidth={2} aria-hidden />
        </span>
        <div>
          <span className="sidebar-title">Pépite</span>
          <span className="sidebar-subtitle">Football Ecosystem</span>
        </div>
      </div>
      <nav className="sidebar-nav">
        {navItems.map(({ path, label, icon, badge }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}
          >
            <span className="sidebar-link-icon">
              <NavIcon name={icon} />
            </span>
            <span className="sidebar-link-label">{label}</span>
            {badge != null && (
              <span className="sidebar-badge">{badge}</span>
            )}
          </NavLink>
        ))}
      </nav>
      <div className="sidebar-user">
        <div className="sidebar-avatar">JD</div>
        <div className="sidebar-user-info">
          <span className="sidebar-user-name">Jean Dupont</span>
          <span className="sidebar-user-role">Agent FIFA</span>
        </div>
      </div>
    </aside>
  );
}
