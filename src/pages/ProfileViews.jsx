import { Eye, TrendingUp, Users, Calendar, Crown, Lock } from '../components/Icons';
import './ProfileViews.css';

const stats = [
  { label: 'Total Vues', value: '8', icon: Eye, iconBg: 'blue' },
  { label: 'Cette Semaine', value: '0', icon: TrendingUp, iconBg: 'green' },
  { label: 'Nouveaux', value: '2', icon: Users, iconBg: 'purple' },
  { label: 'Taux de Visite', value: '+24%', icon: Calendar, iconBg: 'orange' },
];

const visitorCount = 8;

export default function ProfileViews() {
  return (
    <div className="profile-views-page profile-views-v2">
      <header className="profile-views-header">
        <div>
          <h1 className="profile-views-main-title">
            <Eye size={24} strokeWidth={2} aria-hidden className="profile-views-title-eye" />
            Qui a vu mon profil ?
          </h1>
          <p className="profile-views-premium-prompt">
            Passez à Premium pour voir qui visite votre profil
          </p>
        </div>
        <button type="button" className="profile-views-premium-btn">
          <Crown size={18} strokeWidth={2} aria-hidden className="profile-views-premium-crown" /> Passer à Premium
        </button>
      </header>

      <div className="profile-views-stats">
        {stats.map((s) => {
          const Icon = s.icon;
          return (
            <div key={s.label} className={`profile-view-stat-card profile-view-stat-${s.iconBg}`}>
              <div className="profile-view-stat-content">
                <span className="profile-view-stat-label">{s.label}</span>
                <span className={`profile-view-stat-value ${s.iconBg === 'orange' ? 'profile-view-stat-value-accent' : ''}`}>{s.value}</span>
              </div>
              <span className="profile-view-stat-icon-wrap">
                <span className="profile-view-stat-icon">{Icon && <Icon size={20} strokeWidth={2} aria-hidden />}</span>
              </span>
            </div>
          );
        })}
      </div>

      <section className="profile-visitors-section">
        <h2 className="profile-visitors-title">
          <Users size={18} strokeWidth={2} aria-hidden className="profile-visitors-title-icon" />
          Visiteurs Récents
        </h2>
        <div className="profile-visitors-list">
          {Array.from({ length: visitorCount }).map((_, i) => (
            <div key={i} className="profile-visitor-card">
              <div className="profile-visitor-avatar profile-visitor-blur" />
              <div className="profile-visitor-info profile-visitor-blur" />
              <span className="profile-visitor-lock" aria-hidden><Lock size={18} strokeWidth={2} /></span>
            </div>
          ))}
        </div>
      </section>

      <section className="profile-views-premium-card">
        <Crown size={40} strokeWidth={2} aria-hidden className="profile-views-premium-card-crown" />
        <h3 className="profile-views-premium-card-title">Découvrez qui s'intéresse à vous</h3>
        <p className="profile-views-premium-card-desc">
          Passez à Pépite Premium pour voir les profils complets de vos visiteurs et développer votre réseau stratégiquement
        </p>
        <button type="button" className="profile-views-premium-card-btn">
          <Crown size={18} strokeWidth={2} aria-hidden className="profile-views-premium-card-btn-crown" /> Passer à Premium maintenant
        </button>
      </section>

      <a href="#premium" className="profile-views-fab" aria-label="Nouvelle action">+</a>
    </div>
  );
}
