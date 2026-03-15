import { BarChart3 } from '../components/Icons';
import './Reporting.css';

export default function Reporting() {
  return (
    <div className="reporting-page">
      <div className="reporting-construction">
        <div className="reporting-construction-icon"><BarChart3 size={56} strokeWidth={1.5} aria-hidden /></div>
        <h2 className="reporting-construction-title">Cette section est en construction</h2>
        <p className="reporting-construction-desc">Revenez bientôt pour découvrir de nouvelles fonctionnalités</p>
      </div>
    </div>
  );
}
