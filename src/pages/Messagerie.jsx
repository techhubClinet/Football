import { MessageCircle } from '../components/Icons';
import './Messagerie.css';

export default function Messagerie() {
  return (
    <div className="messagerie-page">
      <div className="messagerie-empty">
        <div className="messagerie-empty-icon"><MessageCircle size={64} strokeWidth={1.5} aria-hidden /></div>
        <h2 className="messagerie-empty-title">Aucun message pour le moment</h2>
        <p className="messagerie-empty-desc">Commencez à networker pour débloquer des opportunités</p>
      </div>
    </div>
  );
}
