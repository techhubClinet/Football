import { useState } from 'react';
import { Search, Check, Building2, Phone, Mail, Clock, MapPin } from '../components/Icons';
import './ContactsCRM.css';

const roleCounts = [
  { label: 'Directeur Sportif', count: 1 },
  { label: 'Recruteur', count: 1 },
  { label: 'Entraîneur', count: 1 },
  { label: 'Avocat', count: 1 },
  { label: 'Intermédiaire', count: 1 },
];

const contactsByRole = [
  {
    role: 'Directeur Sportif',
    count: 1,
    tag: 'DS',
    contacts: [
      { name: 'Jean-Pierre Dubois', role: 'DS', activity: 'Il y a 3 jours', club: 'Olympique Lyonnais', country: 'FR', league: 'Ligue 1', phone: '+33 6 12 34 56 05', email: 'jp.dubois@ol.fr', avatar: 'https://randomuser.me/api/portraits/men/32.jpg' },
    ],
  },
  {
    role: 'Recruteur',
    count: 1,
    tag: 'Recruteur',
    contacts: [
      { name: 'Maria Garcia', role: 'Recruteur', activity: 'Il y a 1 semaine', club: 'Real Madrid CF', country: 'ES', league: 'La Liga', phone: '+34 612 345 678', email: 'm.garcia@realmadrid.es', avatar: 'https://randomuser.me/api/portraits/women/44.jpg' },
    ],
  },
  {
    role: 'Entraîneur',
    count: 1,
    tag: 'Coach',
    contacts: [
      { name: 'Michael Schmidt', role: 'Coach', activity: 'Il y a 2 jours', club: 'Bayern Munich', country: 'DE', league: 'Bundesliga', phone: '+49 151 234 567 89', email: 'm.schmidt@fcbayern.de', avatar: 'https://randomuser.me/api/portraits/men/55.jpg' },
    ],
  },
  {
    role: 'Avocat',
    count: 1,
    tag: 'Avocat',
    contacts: [
      { name: 'Avocat Contact', role: 'Avocat', activity: 'Il y a 5 jours', club: 'Cabinet XYZ', country: 'FR', league: '-', phone: '+33 1 23 45', email: 'contact@cabinetxyz.com', avatar: 'https://randomuser.me/api/portraits/men/67.jpg' },
    ],
  },
  {
    role: 'Intermédiaire',
    count: 1,
    tag: 'Intermédiaire',
    contacts: [
      { name: 'Sophie Martin', role: 'Intermédiaire', activity: 'Il y a 1 jour', club: 'Agent FIFA', country: 'FR', league: '-', phone: '+33 7 98 76 54 32', email: 's.martin@agent.com', avatar: 'https://randomuser.me/api/portraits/women/68.jpg' },
    ],
  },
];

const sectionTagClass = { DS: 'section-tag-ds', Recruteur: 'section-tag-recruteur', Coach: 'section-tag-coach', Avocat: 'section-tag-avocat', Intermédiaire: 'section-tag-inter' };
const countryFlags = { FR: '🇫🇷', ES: '🇪🇸', DE: '🇩🇪' };
const countryNames = { FR: 'France', ES: 'Espagne', DE: 'Allemagne' };
const roleToFilter = { Tous: 'all', DS: 'ds', Recruteur: 'recruteur', Coach: 'coach', Avocat: 'avocat', Intermédiaire: 'intermédiaire' };
const filterToRole = { all: null, ds: 'DS', recruteur: 'Recruteur', coach: 'Coach', avocat: 'Avocat', intermédiaire: 'Intermédiaire' };

function ContactCard({ contact }) {
  return (
    <div className="contact-card">
      <div className="contact-card-dp-name">
        {contact.avatar ? (
          <img src={contact.avatar} alt="" className="contact-card-avatar" />
        ) : (
          <div className="contact-card-avatar" />
        )}
        <div className="contact-card-info">
          <div className="contact-name-row">
            <span className="contact-name">{contact.name}</span>
            <span className="contact-verified"><Check size={14} strokeWidth={2.5} aria-hidden /></span>
          </div>
          <div className="contact-role">{contact.role}</div>
          <div className="contact-activity">
            <Clock size={12} strokeWidth={2} aria-hidden /> {contact.activity}
          </div>
        </div>
      </div>
      <div className="contact-card-org">
        <div className="contact-affiliation">
          <span className="contact-club-icon"><Building2 size={14} strokeWidth={2} aria-hidden /></span> {contact.club}
        </div>
        <div className="contact-location">
          <MapPin size={12} strokeWidth={2} aria-hidden /> {countryFlags[contact.country]} {countryNames[contact.country] || contact.country}
        </div>
        <div className="contact-league">{contact.league}</div>
      </div>
      <div className="contact-card-contact">
        <div className="contact-phone"><Phone size={14} strokeWidth={2} aria-hidden /> {contact.phone}</div>
        <div className="contact-email"><Mail size={14} strokeWidth={2} aria-hidden /> {contact.email}</div>
      </div>
      <div className="contact-card-right">
        <div className="contact-card-actions">
          <button type="button" className="btn-contact">Contacter</button>
          <button type="button" className="btn-view">Voir</button>
        </div>
      </div>
    </div>
  );
}

function contactMatchesSearch(contact, query) {
  if (!query.trim()) return true;
  const q = query.trim().toLowerCase();
  return (
    contact.name.toLowerCase().includes(q) ||
    (contact.club && contact.club.toLowerCase().includes(q)) ||
    (contact.email && contact.email.toLowerCase().includes(q)) ||
    (contact.league && contact.league.toLowerCase().includes(q))
  );
}

function contactMatchesCountry(contact, countryCode) {
  if (!countryCode || countryCode === 'all') return true;
  return contact.country === countryCode;
}

export default function ContactsCRM() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [countryFilter, setCountryFilter] = useState('all');

  const filters = ['Tous', 'DS', 'Recruteur', 'Coach', 'Avocat', 'Intermédiaire'];

  const roleFilter = filterToRole[activeFilter];
  const filteredGroups = contactsByRole
    .filter((group) => !roleFilter || group.tag === roleFilter)
    .map((group) => ({
      ...group,
      contacts: group.contacts.filter(
        (c) => contactMatchesSearch(c, searchQuery) && contactMatchesCountry(c, countryFilter)
      ),
    }))
    .filter((group) => group.contacts.length > 0);

  return (
    <div className="contacts-crm">
      <div className="role-stats">
        {roleCounts.map((r) => (
          <div key={r.label} className="role-stat-card">
            <span className="role-stat-label">{r.label}</span>
            <span className="role-stat-value">{r.count}</span>
          </div>
        ))}
      </div>

      <div className="toolbar">
        <div className="search-wrap">
          <span className="search-icon"><Search size={18} strokeWidth={2} aria-hidden /></span>
          <input
            type="search"
            placeholder="Rechercher un contact..."
            className="toolbar-search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="filter-buttons">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              className={`filter-btn ${activeFilter === (f === 'Tous' ? 'all' : roleToFilter[f]) ? 'active' : ''}`}
              onClick={() => setActiveFilter(f === 'Tous' ? 'all' : roleToFilter[f])}
            >
              {f}
            </button>
          ))}
        </div>
        <select
          className="filter-country"
          aria-label="Filtrer par pays"
          value={countryFilter}
          onChange={(e) => setCountryFilter(e.target.value)}
        >
          <option value="all">Tous les pays</option>
          <option value="FR">France</option>
          <option value="ES">Espagne</option>
          <option value="DE">Allemagne</option>
        </select>
      </div>

      {filteredGroups.length === 0 ? (
        <p className="contacts-crm-empty">Aucun contact trouvé.</p>
      ) : (
        filteredGroups.map((group) => (
          <section key={group.role} className="contact-group">
            <div className="contact-group-card">
              <header className="contact-group-header">
                <div className="group-title-wrap">
                  <span className="group-title">{group.role}</span>
                  <span className="group-count">{group.contacts.length} contact(s)</span>
                </div>
                <span className={`section-tag ${sectionTagClass[group.tag] || ''}`}>{group.tag}</span>
              </header>
              <div className="contact-list">
                {group.contacts.map((c) => (
                  <ContactCard key={c.name} contact={c} />
                ))}
              </div>
            </div>
          </section>
        ))
      )}
    </div>
  );
}
