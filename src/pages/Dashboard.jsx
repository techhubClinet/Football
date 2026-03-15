import { Link } from 'react-router-dom';
import { DollarSign, Users, AlertTriangle, Calendar, Eye, TrendingUp } from '../components/Icons';
import './Dashboard.css';

const stats = [
  { label: 'Valeur Portefeuille', value: '4.2M€', change: '+12%', icon: DollarSign, iconColor: 'green' },
  { label: 'Joueurs Actifs', value: '18', change: '+3', icon: Users, iconColor: 'purple' },
  { label: 'Alertes Mandats', value: '3', change: 'M-6', icon: AlertTriangle, iconColor: 'red' },
];

const portfolioPlayers = [
  { name: 'Karim Benzema Jr.', position: 'Attaquant', club: 'OL Réserve', value: '1.2M€', contract: '30/06/2026', avatar: 'https://randomuser.me/api/portraits/men/22.jpg' },
  { name: 'Lucas Fernandez', position: 'Milieu', club: 'FC Nantes', value: '850K€', contract: '30/06/2027', avatar: 'https://randomuser.me/api/portraits/men/45.jpg' },
  { name: 'Mohamed Salah', position: 'Ailier', club: 'Libre', value: '450K€', contract: 'N/A', avatar: 'https://randomuser.me/api/portraits/men/67.jpg' },
];

const agendaItems = [
  { date: 'Lun 3 Mar', time: '14:00', label: 'Rendez-vous avec le FC Lyon', barColor: 'purple' },
  { date: 'Mer 5 Mar', time: '10:30', label: 'Match à observer: OL U21', barColor: 'blue' },
  { date: 'Ven 7 Mar', time: '16:00', label: 'Signature contrat - K. Benzema Jr.', barColor: 'orange' },
];

const profileViewers = [
  { avatar: 'https://randomuser.me/api/portraits/women/32.jpg' },
  { avatar: 'https://randomuser.me/api/portraits/men/11.jpg' },
  { avatar: 'https://randomuser.me/api/portraits/women/68.jpg' },
];

export default function Dashboard() {
  return (
    <div className="dashboard">
      <div className="stats-row">
        {stats.map((s) => {
          const Icon = s.icon;
          return (
            <div key={s.label} className="stat-card">
              <div className="stat-card-top">
                <span className={`stat-card-icon stat-card-icon-${s.iconColor}`}>
                  <Icon size={20} strokeWidth={2} aria-hidden />
                </span>
                <span className="stat-change">{s.change}</span>
              </div>
              <span className="stat-value">{s.value}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          );
        })}
      </div>

      <div className="alert-banner">
        <span className="alert-banner-icon">
          <AlertTriangle size={20} strokeWidth={2} aria-hidden />
        </span>
        <div className="alert-banner-content">
          <strong className="alert-banner-title">3 mandats arrivent à expiration</strong>
          <p className="alert-banner-text">Karim Benzema Jr., Lucas Fernandez et Mohamed Salah ont leur mandat qui expire dans moins de 6 mois.</p>
          <Link to="/portefeuille-joueurs" className="alert-banner-link">Voir les détails →</Link>
        </div>
      </div>

      <section className="portfolio-card">
        <div className="portfolio-header">
          <h2 className="portfolio-title">Portefeuille Joueurs</h2>
          <Link to="/portefeuille-joueurs" className="portfolio-link">Voir tout →</Link>
        </div>
        <ul className="portfolio-list">
          {portfolioPlayers.map((p) => (
            <li key={p.name} className="portfolio-row">
              <img src={p.avatar} alt="" className="portfolio-avatar" />
              <div className="portfolio-info">
                <span className="portfolio-name">{p.name}</span>
                <span className="portfolio-meta">{p.position} • {p.club}</span>
              </div>
              <div className="portfolio-right">
                <span className="portfolio-value">{p.value}</span>
                <span className="portfolio-contract">Contrat: {p.contract}</span>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="agenda-card">
        <div className="agenda-header">
          <h2 className="agenda-title">Agenda de la semaine</h2>
          <span className="agenda-header-icon">
            <Calendar size={18} strokeWidth={2} aria-hidden />
          </span>
        </div>
        <ul className="agenda-list">
          {agendaItems.map((item, i) => (
            <li key={i} className={`agenda-item agenda-item-${item.barColor}`}>
              <span className="agenda-datetime">
                {item.date} <span className="agenda-time">{item.time}</span>
              </span>
              <span className="agenda-label">{item.label}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="profile-views-card">
        <div className="profile-views-header">
          <div className="profile-views-title-wrap">
            <Eye size={18} strokeWidth={2} className="profile-views-title-icon" aria-hidden />
            <h2 className="profile-views-title">Vues du Profil</h2>
            <span className="profile-views-badge">+2</span>
          </div>
          <Link to="/vues-profil" className="profile-views-link">Voir tout →</Link>
        </div>
        <div className="profile-views-stats">
          <div className="profile-views-stat-box">
            <Eye size={14} strokeWidth={2} aria-hidden />
            <span>Cette semaine</span>
            <div className="profile-views-dots profile-views-dots-blur" aria-hidden />
          </div>
          <div className="profile-views-stat-box">
            <TrendingUp size={14} strokeWidth={2} className="profile-views-evolution-icon" aria-hidden />
            <span>Évolution</span>
            <div className="profile-views-dots profile-views-dots-green">
              <span className="profile-views-dot" /><span className="profile-views-dot" /><span className="profile-views-dot" />
            </div>
          </div>
        </div>
        <div className="profile-views-list">
          {profileViewers.map((v, i) => (
            <div key={i} className="profile-views-viewer">
              <img src={v.avatar} alt="" className="profile-views-viewer-avatar profile-views-blur" />
              <div className="profile-views-viewer-placeholder profile-views-blur" />
            </div>
          ))}
        </div>
        <div className="profile-views-cta">
          <p className="profile-views-cta-text">Découvrez qui visite votre profil</p>
          <Link to="/vues-profil" className="profile-views-premium-btn">Passer à Premium</Link>
        </div>
      </section>
    </div>
  );
}
