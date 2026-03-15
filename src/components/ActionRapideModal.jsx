import { useState, useEffect } from 'react';
import { X, FileText, UserPlus, DollarSign, Megaphone, ChevronLeft, Calendar } from './Icons';
import './ActionRapideModal.css';

const actions = [
  { id: 'note-mercato', icon: FileText, iconColor: 'blue', title: 'Note Mercato', subtitle: 'Besoin club, rumeur, contact' },
  { id: 'nouveau-joueur', icon: UserPlus, iconColor: 'purple', title: 'Nouveau Joueur', subtitle: 'Ajout rapide au portefeuille' },
  { id: 'commission', icon: DollarSign, iconColor: 'green', title: 'Commission', subtitle: 'Facture ou échéance' },
  { id: 'post-reseau', icon: Megaphone, iconColor: 'orange', title: 'Post Réseau', subtitle: 'Publier sur le feed' },
];

export default function ActionRapideModal({ isOpen, onClose }) {
  const [view, setView] = useState('cards');
  const [noteForm, setNoteForm] = useState({
    titre: '',
    club: '',
    positionRecherchee: '',
    budgetEstime: '',
    urgence: 'Moyenne',
    notesSupplementaires: '',
  });
  const [playerForm, setPlayerForm] = useState({
    nomComplet: '',
    position: '',
    age: '',
    valeur: '',
    clubActuel: '',
    contact: '',
  });
  const [commissionForm, setCommissionForm] = useState({
    joueurConcerne: '',
    clubPayeur: '',
    montant: '',
    echeance: '',
    typeOperation: 'Transfert',
  });
  const [postReseauForm, setPostReseauForm] = useState({
    message: '',
    visibilite: 'Public (Tout le réseau)',
  });

  useEffect(() => {
    if (!isOpen) setView('cards');
  }, [isOpen]);

  if (!isOpen) return null;

  const handleBack = () => setView('cards');

  const handleNoteMercatoClick = () => setView('note-mercato');
  const handleNouveauJoueurClick = () => setView('nouveau-joueur');
  const handleCommissionClick = () => setView('commission');
  const handlePostReseauClick = () => setView('post-reseau');

  const handleNoteChange = (e) => {
    const { name, value } = e.target;
    setNoteForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmitNote = (e) => {
    e.preventDefault();
    setView('cards');
    setNoteForm({ titre: '', club: '', positionRecherchee: '', budgetEstime: '', urgence: 'Moyenne', notesSupplementaires: '' });
    onClose();
  };

  const handlePlayerChange = (e) => {
    const { name, value } = e.target;
    setPlayerForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmitPlayer = (e) => {
    e.preventDefault();
    setView('cards');
    setPlayerForm({ nomComplet: '', position: '', age: '', valeur: '', clubActuel: '', contact: '' });
    onClose();
  };

  const handleCommissionChange = (e) => {
    const { name, value } = e.target;
    setCommissionForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmitCommission = (e) => {
    e.preventDefault();
    setView('cards');
    setCommissionForm({ joueurConcerne: '', clubPayeur: '', montant: '', echeance: '', typeOperation: 'Transfert' });
    onClose();
  };

  const handlePostReseauChange = (e) => {
    const { name, value } = e.target;
    setPostReseauForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmitPostReseau = (e) => {
    e.preventDefault();
    setView('cards');
    setPostReseauForm({ message: '', visibilite: 'Public (Tout le réseau)' });
    onClose();
  };

  return (
    <div className="action-rapide-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="action-rapide-title">
      <div className="action-rapide-modal action-rapide-modal-form" onClick={(e) => e.stopPropagation()}>
        <div className="action-rapide-header">
          <div>
            <h2 id="action-rapide-title" className="action-rapide-title">Action Rapide</h2>
            <p className="action-rapide-subtitle">Ajoutez rapidement une information</p>
          </div>
          <button type="button" className="action-rapide-close" onClick={onClose} aria-label="Fermer">
            <X size={20} strokeWidth={2} aria-hidden />
          </button>
        </div>

        {view === 'cards' ? (
          <div className="action-rapide-grid">
            {actions.map((a) => {
              const Icon = a.icon;
              return (
                <button
                  key={a.id}
                  type="button"
                  className={`action-rapide-card action-rapide-card-${a.iconColor}`}
                  onClick={
                  a.id === 'note-mercato'
                    ? handleNoteMercatoClick
                    : a.id === 'nouveau-joueur'
                    ? handleNouveauJoueurClick
                    : a.id === 'commission'
                    ? handleCommissionClick
                    : a.id === 'post-reseau'
                    ? handlePostReseauClick
                    : () => onClose()
                }
                >
                  <span className={`action-rapide-card-icon action-rapide-card-icon-${a.iconColor}`}>
                    <Icon size={24} strokeWidth={2} aria-hidden />
                  </span>
                  <span className="action-rapide-card-title">{a.title}</span>
                  <span className="action-rapide-card-subtitle">{a.subtitle}</span>
                </button>
              );
            })}
          </div>
        ) : view === 'note-mercato' ? (
          <div className="action-rapide-form-wrap">
            <button type="button" className="action-rapide-back" onClick={handleBack}>
              <ChevronLeft size={18} strokeWidth={2} aria-hidden />
              Retour
            </button>

            <form className="action-rapide-form" onSubmit={handleSubmitNote}>
              <div className="action-rapide-field">
                <label htmlFor="note-titre">Titre *</label>
                <input
                  id="note-titre"
                  type="text"
                  name="titre"
                  value={noteForm.titre}
                  onChange={handleNoteChange}
                  placeholder="Ex: Le DS de Rennes cherche un latéral droit"
                  required
                />
              </div>

              <div className="action-rapide-row">
                <div className="action-rapide-field">
                  <label htmlFor="note-club">Club</label>
                  <input
                    id="note-club"
                    type="text"
                    name="club"
                    value={noteForm.club}
                    onChange={handleNoteChange}
                    placeholder="Ex: Stade Rennais"
                  />
                </div>
                <div className="action-rapide-field">
                  <label htmlFor="note-position">Position recherchée</label>
                  <input
                    id="note-position"
                    type="text"
                    name="positionRecherchee"
                    value={noteForm.positionRecherchee}
                    onChange={handleNoteChange}
                    placeholder="Ex: Latéral droit"
                  />
                </div>
              </div>

              <div className="action-rapide-row">
                <div className="action-rapide-field">
                  <label htmlFor="note-budget">Budget estimé</label>
                  <input
                    id="note-budget"
                    type="text"
                    name="budgetEstime"
                    value={noteForm.budgetEstime}
                    onChange={handleNoteChange}
                    placeholder="Ex: 1M - 2M€"
                  />
                </div>
                <div className="action-rapide-field">
                  <label htmlFor="note-urgence">Urgence</label>
                  <select
                    id="note-urgence"
                    name="urgence"
                    value={noteForm.urgence}
                    onChange={handleNoteChange}
                  >
                    <option value="Basse">Basse</option>
                    <option value="Moyenne">Moyenne</option>
                    <option value="Haute">Haute</option>
                  </select>
                </div>
              </div>

              <div className="action-rapide-field">
                <label htmlFor="note-notes">Notes supplémentaires</label>
                <textarea
                  id="note-notes"
                  name="notesSupplementaires"
                  value={noteForm.notesSupplementaires}
                  onChange={handleNoteChange}
                  placeholder="Ajoutez des détails..."
                  rows={4}
                />
              </div>

              <button type="submit" className="action-rapide-submit">
                Enregistrer la note
              </button>
            </form>
          </div>
        ) : view === 'nouveau-joueur' ? (
          <div className="action-rapide-form-wrap">
            <button type="button" className="action-rapide-back" onClick={handleBack}>
              <ChevronLeft size={18} strokeWidth={2} aria-hidden />
              Retour
            </button>

            <form className="action-rapide-form" onSubmit={handleSubmitPlayer}>
              <div className="action-rapide-field">
                <label htmlFor="player-nom">Nom complet *</label>
                <input
                  id="player-nom"
                  type="text"
                  name="nomComplet"
                  value={playerForm.nomComplet}
                  onChange={handlePlayerChange}
                  placeholder="Ex: Kylian Mbappé"
                  required
                />
              </div>

              <div className="action-rapide-row action-rapide-row-3">
                <div className="action-rapide-field">
                  <label htmlFor="player-position">Position *</label>
                  <input
                    id="player-position"
                    type="text"
                    name="position"
                    value={playerForm.position}
                    onChange={handlePlayerChange}
                    placeholder="Ex: BU"
                    required
                  />
                </div>
                <div className="action-rapide-field">
                  <label htmlFor="player-age">Âge</label>
                  <input
                    id="player-age"
                    type="text"
                    name="age"
                    value={playerForm.age}
                    onChange={handlePlayerChange}
                    placeholder="Ex: 24"
                  />
                </div>
                <div className="action-rapide-field">
                  <label htmlFor="player-valeur">Valeur</label>
                  <input
                    id="player-valeur"
                    type="text"
                    name="valeur"
                    value={playerForm.valeur}
                    onChange={handlePlayerChange}
                    placeholder="Ex: 2M€"
                  />
                </div>
              </div>

              <div className="action-rapide-field">
                <label htmlFor="player-club">Club actuel</label>
                <input
                  id="player-club"
                  type="text"
                  name="clubActuel"
                  value={playerForm.clubActuel}
                  onChange={handlePlayerChange}
                  placeholder="Ex: PSG"
                />
              </div>

              <div className="action-rapide-field">
                <label htmlFor="player-contact">Contact (Email ou Téléphone)</label>
                <input
                  id="player-contact"
                  type="text"
                  name="contact"
                  value={playerForm.contact}
                  onChange={handlePlayerChange}
                  placeholder="Ex: player@email.com"
                />
              </div>

              <button type="submit" className="action-rapide-submit action-rapide-submit-purple">
                Ajouter au portefeuille
              </button>
            </form>
          </div>
        ) : view === 'commission' ? (
          <div className="action-rapide-form-wrap">
            <button type="button" className="action-rapide-back" onClick={handleBack}>
              <ChevronLeft size={18} strokeWidth={2} aria-hidden />
              Retour
            </button>

            <form className="action-rapide-form" onSubmit={handleSubmitCommission}>
              <div className="action-rapide-field">
                <label htmlFor="comm-joueur">Joueur concerné *</label>
                <input
                  id="comm-joueur"
                  type="text"
                  name="joueurConcerne"
                  value={commissionForm.joueurConcerne}
                  onChange={handleCommissionChange}
                  placeholder="Ex: Karim Benzema Jr."
                  required
                />
              </div>

              <div className="action-rapide-field">
                <label htmlFor="comm-club">Club payeur *</label>
                <input
                  id="comm-club"
                  type="text"
                  name="clubPayeur"
                  value={commissionForm.clubPayeur}
                  onChange={handleCommissionChange}
                  placeholder="Ex: FC Nantes."
                  required
                />
              </div>

              <div className="action-rapide-field">
                <label htmlFor="comm-montant">Montant (€) *</label>
                <input
                  id="comm-montant"
                  type="text"
                  name="montant"
                  value={commissionForm.montant}
                  onChange={handleCommissionChange}
                  placeholder="Ex: 120000."
                  required
                />
              </div>

              <div className="action-rapide-field action-rapide-field-with-icon">
                <label htmlFor="comm-echeance">Échéance *</label>
                <span className="action-rapide-input-wrap">
                  <input
                    id="comm-echeance"
                    type="text"
                    name="echeance"
                    value={commissionForm.echeance}
                    onChange={handleCommissionChange}
                    placeholder="dd/mm/yyyy"
                    required
                  />
                  <span className="action-rapide-input-icon">
                    <Calendar size={18} strokeWidth={2} aria-hidden />
                  </span>
                </span>
              </div>

              <div className="action-rapide-field">
                <label htmlFor="comm-type">Type d'opération</label>
                <select
                  id="comm-type"
                  name="typeOperation"
                  value={commissionForm.typeOperation}
                  onChange={handleCommissionChange}
                >
                  <option value="Transfert">Transfert</option>
                  <option value="Prêt">Prêt</option>
                  <option value="Signature">Signature</option>
                </select>
              </div>

              <button type="submit" className="action-rapide-submit action-rapide-submit-green">
                Créer la commission
              </button>
            </form>
          </div>
        ) : (
          <div className="action-rapide-form-wrap">
            <button type="button" className="action-rapide-back" onClick={handleBack}>
              <ChevronLeft size={18} strokeWidth={2} aria-hidden />
              Retour
            </button>

            <form className="action-rapide-form" onSubmit={handleSubmitPostReseau}>
              <div className="action-rapide-field">
                <label htmlFor="post-message">Votre message *</label>
                <textarea
                  id="post-message"
                  name="message"
                  value={postReseauForm.message}
                  onChange={handlePostReseauChange}
                  placeholder="Partagez une actualité, un besoin, une opportunité..."
                  rows={5}
                  required
                />
              </div>

              <div className="action-rapide-field">
                <label htmlFor="post-visibilite">Visibilité</label>
                <select
                  id="post-visibilite"
                  name="visibilite"
                  value={postReseauForm.visibilite}
                  onChange={handlePostReseauChange}
                >
                  <option value="Public (Tout le réseau)">Public (Tout le réseau)</option>
                  <option value="Contacts uniquement">Contacts uniquement</option>
                  <option value="Privé">Privé</option>
                </select>
              </div>

              <button type="submit" className="action-rapide-submit action-rapide-submit-orange">
                Publier sur le réseau
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
