import { NavLink } from 'react-router-dom';
import { Gem, NavIcon, X } from './Icons';

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

export default function Sidebar({ isOpen, onClose }) {
  return (
    <aside className={`sidebar ${isOpen ? 'sidebar-open' : ''}`}>
      <button
        type="button"
        className="sidebar-close-btn"
        onClick={onClose}
        aria-label="Fermer le menu"
      >
        <X size={22} strokeWidth={2} aria-hidden />
      </button>
      <div className="sidebar-brand">
        <div className="sidebar-brand-row">
          <span className="sidebar-logo">
            <Gem size={36} strokeWidth={2} aria-hidden />
          </span>
          <span className="sidebar-title">Pépite</span>
        </div>
        <span className="sidebar-subtitle">Football Ecosystem</span>
      </div>
      <div className="sidebar-divider" aria-hidden />
      <nav className="sidebar-nav" onClick={onClose}>
        {navItems.map(({ path, label, icon, badge }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}
          >
            <span className="sidebar-link-icon">
              <NavIcon name={icon} size={20} />
            </span>
            <span className="sidebar-link-label">{label}</span>
            {badge != null && (
              <span className="sidebar-badge">{badge}</span>
            )}
          </NavLink>
        ))}
      </nav>
      <div className="sidebar-divider sidebar-divider-above-user" aria-hidden />
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
