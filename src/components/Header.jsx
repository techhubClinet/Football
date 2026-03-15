import { Search, Bell, ChevronDown } from './Icons';

export default function Header() {
  return (
    <header className="header">
      <div className="header-search">
        <span className="header-search-icon">
          <Search size={18} strokeWidth={2} aria-hidden />
        </span>
        <input
          type="search"
          className="header-search-input"
          placeholder="Rechercher un joueur, un agent, un club..."
        />
      </div>
      <div className="header-actions">
        <button type="button" className="header-icon-btn header-bell-wrap" aria-label="Notifications">
          <Bell size={20} strokeWidth={2} aria-hidden />
          <span className="header-bell-dot" aria-hidden />
        </button>
        <div className="header-user-dropdown">
          <span>Agent FIFA</span>
          <ChevronDown size={16} strokeWidth={2} className="header-dropdown-arrow" aria-hidden />
        </div>
      </div>
    </header>
  );
}
