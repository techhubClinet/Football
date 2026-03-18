import { ChartColumnIncreasing } from '../components/Icons';
import './Reporting.css';

export default function Reporting() {
  return (
    <div className="reporting-page">
      <div className="reporting-construction">
        <div className="reporting-construction-icon"><ChartColumnIncreasing size={56} strokeWidth={1.5} aria-hidden /></div>
        <h2 className="reporting-construction-title">Cette section est en construction</h2>
        <p className="reporting-construction-desc">Revenez bientôt pour découvrir de nouvelles fonctionnalités</p>
      </div>
    </div>
  );
}
