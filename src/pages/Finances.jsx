import { useState } from 'react';
import { Send, Calculator, CheckCircle } from 'lucide-react';
import { RefreshCw } from 'lucide-react';
import { Trophy, Users, Check, X, Clock, Mail, AlertTriangle, DollarSign, TrendingUp, FileText, Calendar, Building2 } from '../components/Icons';
import './Finances.css';

const periodOptions = ['Mois', 'Trimestre', 'Année'];

const commissionCards = [
  { label: 'Total Commissions', value: '490K€', icon: DollarSign, type: 'total' },
  { label: 'Perçu', value: '120K€', icon: TrendingUp, type: 'green' },
  { label: 'En attente', value: '120K€', icon: Clock, type: 'orange' },
  { label: 'En retard', value: '250K€', icon: AlertTriangle, type: 'red' },
];

const pipelineStages = [
  { id: 'facturee', label: 'Facturée', icon: FileText, count: 0, value: null },
  { id: 'envoyee', label: 'Envoyée', icon: Send, count: 1, value: '35K€', valueColor: 'blue' },
  { id: 'attente', label: 'En attente', icon: Clock, count: 1, value: '85K€', valueColor: 'orange' },
  { id: 'retard', label: 'En retard', icon: AlertTriangle, count: 1, value: '250K€', valueColor: 'red' },
  { id: 'percue', label: 'Perçue', icon: CheckCircle, count: 1, value: '120K€', valueColor: 'green' },
];

const summaryCards = [
  { label: 'Perçu ce mois', value: '120K€', type: 'green' },
  { label: 'À recevoir', value: '120K€', type: 'orange' },
  { label: 'En retard', value: '250K€', type: 'red' },
];

const cashflowMonths = [
  { month: 'MARS 26', value: '85K€', barValue: '85K', percent: 100 },
  { month: 'AVR. 26', value: '35K€', barValue: '35K', percent: 41 },
  { month: 'MAI 26', value: '0K€', barValue: null, percent: 0 },
  { month: 'JUIN 26', value: '0K€', barValue: null, percent: 0 },
  { month: 'JUIL. 26', value: '60K€', barValue: '60K', percent: 71 },
  { month: 'AOÛT 26', value: '0K€', barValue: null, percent: 0 },
];

const rankingPlayers = [
  { rank: 1, name: 'Thomas Müller', deals: 1, roi: '95%', total: '250K€', percu: '125K€', aVenir: '125K€', roiPercent: 95, avatar: 'https://randomuser.me/api/portraits/men/32.jpg' },
  { rank: 2, name: 'Karim Benzema Jr.', deals: 1, roi: '88%', total: '120K€', percu: '60K€', aVenir: '60K€', roiPercent: 88, avatar: 'https://randomuser.me/api/portraits/men/22.jpg' },
  { rank: 3, name: 'Lucas Fernandez', deals: 1, roi: '72%', total: '85K€', percu: '0K€', aVenir: '85K€', roiPercent: 72, avatar: 'https://randomuser.me/api/portraits/men/45.jpg' },
  { rank: 4, name: 'João Silva', deals: 1, roi: '65%', total: '35K€', percu: '0K€', aVenir: '35K€', roiPercent: 65, avatar: 'https://randomuser.me/api/portraits/men/55.jpg' },
];

const factures = [
  { name: 'Karim Benzema Jr.', club: 'FC Nantes', type: 'Transfert', typeColor: 'purple', facturee: '15/01/2026', echeance: '15/02/2026', total: '120K€', net: '84K€', status: 'Perçue', statusType: 'green', receivedDate: 'Reçu le 10/02/2026', installments: [{ date: '15/02/2026', amount: '60K€', paid: true }, { date: '15/07/2026', amount: '60K€', paid: true }] },
  { name: 'Lucas Fernandez', club: 'KAA Gent', type: 'Contrat', typeColor: 'orange', facturee: '20/02/2026', echeance: '20/03/2026', total: '85K€', net: '60K€', status: 'En attente', statusType: 'orange' },
  { name: 'Thomas Müller', club: 'Bayern Munich', type: 'Transfert', typeColor: 'purple', facturee: '10/01/2026', echeance: '10/02/2026', total: '250K€', net: '175K€', status: 'En retard', statusType: 'red', delay: 'En retard de 33 jour(s)', installments: [{ date: '10/02/2026', amount: '125K€', paid: false }, { date: '10/02/2027', amount: '125K€', paid: false }] },
  { name: 'João Silva', club: 'Sporting CP', type: 'Prêt', typeColor: 'orange', facturee: '01/03/2026', echeance: '01/04/2026', total: '35K€', net: '25K€', status: 'Envoyée', statusType: 'blue' },
];

export default function Finances() {
  const [period, setPeriod] = useState('Mois');

  return (
    <div className="finances-page">
      <header className="finances-header">
        <div>
          <h1 className="finances-title">Finance & Facturation</h1>
          <p className="finances-subtitle">Gestion des commissions, factures et cash-flow</p>
        </div>
        <div className="finances-period">
          {periodOptions.map((p) => (
            <button key={p} type="button" className={`finances-period-btn ${period === p ? 'active' : ''}`} onClick={() => setPeriod(p)}>{p}</button>
          ))}
        </div>
      </header>

      <div className="finances-cards-row">
        {commissionCards.map((c) => {
          const Icon = c.icon;
          return (
            <div key={c.label} className={`finances-metric-card finances-metric-${c.type}`}>
              {c.type !== 'total' && <span className="finances-metric-icon"><Icon size={18} strokeWidth={2} aria-hidden /></span>}
              <span className="finances-metric-label">{c.type === 'total' ? '$ ' : ''}{c.label}</span>
              <span className="finances-metric-value">{c.value}</span>
            </div>
          );
        })}
      </div>

      <section className="finances-pipeline-section">
        <div className="finances-pipeline-header">
          <h2 className="finances-pipeline-title">Pipeline de Paiement</h2>
          <div className="finances-pipeline-total">Total en cours <span className="finances-pipeline-total-value">490K€</span></div>
        </div>
        <div className="finances-pipeline-stages">
          {pipelineStages.map((stage, i) => {
            const Icon = stage.icon;
            const iconColorClass = stage.valueColor ? `finances-stage-icon-${stage.valueColor}` : '';
            return (
              <div key={stage.id} className="finances-pipeline-stage-wrap">
                {i > 0 && <span className="finances-pipeline-connector" />}
                <div className="finances-pipeline-stage">
                  <span className={`finances-pipeline-stage-icon ${iconColorClass}`}><Icon size={20} strokeWidth={2} aria-hidden /></span>
                  <span className="finances-pipeline-stage-label">{stage.label}</span>
                  <span className="finances-pipeline-stage-count">{stage.count}</span>
                  {stage.value && <span className={`finances-pipeline-stage-value finances-value-${stage.valueColor}`}>{stage.value}</span>}
                </div>
              </div>
            );
          })}
        </div>
        <div className="finances-summary-row">
          {summaryCards.map((s) => (
            <div key={s.label} className={`finances-summary-card finances-summary-${s.type}`}>
              <span className="finances-summary-label">{s.label}</span>
              <span className="finances-summary-value">{s.value}</span>
            </div>
          ))}
        </div>
      </section>

      <div className="finances-bottom-grid">
        <section className="finances-cashflow-section">
          <h2 className="finances-cashflow-title">
            <span className="finances-cashflow-title-icon"><TrendingUp size={18} strokeWidth={2} aria-hidden /></span>
            Prévisions Cash-flow
          </h2>
          <div className="finances-cashflow-header">
            <span>6 prochains mois</span>
            <span className="finances-cashflow-total">180K€</span>
          </div>
          <div className="finances-cashflow-list">
            {cashflowMonths.map((m) => (
              <div key={m.month} className="finances-cashflow-row">
                <span className="finances-cashflow-month">{m.month}</span>
                <div className="finances-cashflow-bar-wrap">
                  <div className="finances-cashflow-bar" style={{ width: `${m.percent}%` }}>
                    {m.barValue && <span className="finances-cashflow-bar-label">{m.barValue}</span>}
                  </div>
                </div>
                <span className="finances-cashflow-amount">{m.value}</span>
              </div>
            ))}
          </div>
          <div className="finances-cashflow-footer">
            <Check size={14} strokeWidth={2.5} aria-hidden />
            Basé sur les dates d'échéances contractuelles
          </div>
        </section>
        <section className="finances-tax-section">
          <h2 className="finances-tax-title">
            <span className="finances-tax-title-icon"><Calculator size={18} strokeWidth={2} aria-hidden /></span>
            Calculateur de Taxe
          </h2>
          <div className="finances-tax-field">
            <label>Pays de taxation</label>
            <select className="finances-tax-select">
              <option>France (30%)</option>
            </select>
          </div>
          <div className="finances-tax-row">
            <span>Commission brute</span>
            <span className="finances-tax-value">120.0K EUR</span>
          </div>
          <div className="finances-tax-row finances-tax-row-deduction">
            <span>Taxes & frais</span>
            <span className="finances-tax-deduction">
              <span className="finances-tax-pct-tag">-30%</span>
              <span className="finances-tax-negative-value">-36.0K EUR</span>
            </span>
          </div>
          <div className="finances-tax-net-wrap">
            <div className="finances-tax-net-box">
              <span className="finances-tax-net-label">Commission nette</span>
              <span className="finances-tax-net-value">84.0K EUR</span>
            </div>
          </div>
          <div className="finances-tax-info">
            <span className="finances-tax-info-icon">i</span>
            <div>
              <div className="finances-tax-info-title">À propos du calcul</div>
              <p className="finances-tax-info-text">Les taux de taxation varient selon les pays et les structures juridiques. Ce calculateur fournit une estimation. Consultez votre comptable pour un calcul précis.</p>
            </div>
          </div>
        </section>
      </div>

      <div className="finances-notice">
        <span className="finances-notice-bar" />
        Basé sur les dates d'échéances contractuelles
      </div>

      <section className="finances-section finances-ranking">
        <div className="finances-ranking-header">
          <h2 className="finances-ranking-title">
            <span className="finances-ranking-title-icon"><Trophy size={20} strokeWidth={2} aria-hidden /></span>
            Ranking Performance Financière
          </h2>
          <div className="finances-ranking-total-wrap">
            <span className="finances-ranking-total-label">Total portefeuille</span>
            <span className="finances-ranking-total-value">490K€</span>
          </div>
        </div>
        <div className="finances-ranking-list">
          {rankingPlayers.map((p) => (
            <div key={p.name} className="finances-ranking-row">
              <span className={`finances-rank ${p.rank === 4 ? 'finances-rank-fourth' : ''}`}>#{p.rank}</span>
              {p.avatar ? <img src={p.avatar} alt="" className="finances-ranking-avatar" /> : <div className="finances-ranking-avatar" />}
              <div className="finances-ranking-main">
                <span className="finances-ranking-name">{p.name}</span>
                <span className="finances-ranking-meta">
                  {p.deals} deal(s) <span className="finances-ranking-meta-dot">•</span> <TrendingUp size={14} strokeWidth={2} aria-hidden className="finances-ranking-roi-icon" /> ROI: {p.roi}
                </span>
              </div>
              <div className="finances-ranking-amounts">
                <div className="finances-ranking-amount-item">
                  <span className="finances-ranking-amount-label">Total</span>
                  <span className="finances-ranking-amount-val">{p.total}</span>
                </div>
                <div className="finances-ranking-amount-item">
                  <span className="finances-ranking-amount-label"><span className="finances-dot finances-dot-green" /> Perçu</span>
                  <span className="finances-ranking-amount-val finances-amount-green">{p.percu}</span>
                </div>
                <div className="finances-ranking-amount-item">
                  <span className="finances-ranking-amount-label"><span className="finances-dot finances-dot-orange" /> À venir</span>
                  <span className="finances-ranking-amount-val finances-amount-orange">{p.aVenir}</span>
                </div>
              </div>
              <div className="finances-ranking-progress-wrap">
                <div className="finances-ranking-progress-bar">
                  <div className="finances-ranking-progress-fill" style={{ width: `${p.roiPercent}%` }} />
                </div>
                <span className="finances-ranking-percent">{p.roi}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="finances-section finances-split">
        <h2 className="finances-section-title">
          <span className="finances-section-icon"><Users size={20} strokeWidth={2} aria-hidden /></span>
          Partage de Commission (Co-brokage)
        </h2>
        <div className="finances-split-content">
          <div className="finances-donut-wrap">
            <div className="finances-donut">
              <div className="finances-donut-center">
                <RefreshCw size={24} strokeWidth={2} aria-hidden />
                <span className="finances-donut-center-text">Split</span>
              </div>
            </div>
          </div>
          <div className="finances-split-details">
            <div className="finances-split-card finances-split-card-mine">
              <span className="finances-split-card-label">Ma part</span>
              <span className="finances-split-card-pct">60%</span>
              <span className="finances-split-card-value">72.0K€</span>
            </div>
            <div className="finances-split-card finances-split-card-partner">
              <span className="finances-split-card-label">Part partenaire</span>
              <span className="finances-split-card-pct">40%</span>
              <span className="finances-split-card-value">48.0K€</span>
            </div>
            <div className="finances-partner-card">
              <div className="finances-partner-header">
                <Users size={16} strokeWidth={2} aria-hidden />
                <span className="finances-partner-label">PARTENAIRE</span>
              </div>
              <div className="finances-partner-name">Sophie Martin</div>
              <div className="finances-partner-email">
                <Mail size={14} strokeWidth={2} aria-hidden />
                sophie.martin@agent.fr
              </div>
              <div className="finances-partner-status-row">
                <span className="finances-partner-status-label">Statut paiement</span>
                <span className="finances-partner-status-value">
                  <Check size={14} strokeWidth={2.5} aria-hidden />
                  Payé le 12/02/2026
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="finances-section finances-invoices">
        <h2 className="finances-section-title finances-invoices-title">
          <span className="finances-invoices-euro">€</span> Factures & Commissions
        </h2>
        <div className="finances-invoice-list">
          {factures.map((f) => (
            <div key={f.name} className={`finances-invoice-card ${f.status === 'En retard' ? 'finances-invoice-card-retard' : ''} ${f.status === 'Perçue' ? 'finances-invoice-card-percue' : ''}`}>
              {f.delay && (
                <div className="finances-invoice-delay">
                  <AlertTriangle size={14} strokeWidth={2} aria-hidden /> {f.delay}
                </div>
              )}
              <div className="finances-invoice-top">
                <div className="finances-invoice-top-left">
                  <div className="finances-invoice-name">{f.name}</div>
                  <div className="finances-invoice-meta">
                    <Building2 size={14} strokeWidth={2} aria-hidden className="finances-invoice-meta-icon" />
                    <span className="finances-invoice-club">{f.club}</span>
                    <span className={`finances-invoice-type finances-type-${f.typeColor}`}>{f.type}</span>
                  </div>
                </div>
                <div className="finances-invoice-amounts">
                  <span className={`finances-invoice-total finances-invoice-total-${f.statusType}`}>{f.total}</span>
                  <span className="finances-invoice-net">Net: {f.net}</span>
                </div>
              </div>
              <div className="finances-invoice-dates">
                <span className="finances-invoice-date-item">
                  <Calendar size={14} strokeWidth={2} aria-hidden className="finances-invoice-date-icon" />
                  Facturée: {f.facturee}
                </span>
                <span className={`finances-invoice-echeance ${f.status === 'En retard' ? 'finances-invoice-echeance-red' : ''}`}>
                  <Clock size={14} strokeWidth={2} aria-hidden className="finances-invoice-date-icon" />
                  Échéance: {f.echeance}
                </span>
              </div>
              {f.installments && (
                <div className="finances-invoice-installments">
                  <div className="finances-invoice-installments-title">Paiement échelonné ({f.installments.length} traites)</div>
                  {f.installments.map((inst, i) => (
                    <div key={i} className="finances-installment-row">
                      {inst.paid ? <Check size={14} strokeWidth={2.5} aria-hidden className="finances-installment-ok" /> : <Clock size={14} strokeWidth={2} aria-hidden className="finances-installment-pending" />}
                      <span className="finances-installment-label">Traite {i + 1}</span>
                      <span className="finances-installment-date">{inst.date}</span>
                      <span className={`finances-installment-amount ${inst.paid ? 'finances-installment-amount-ok' : ''}`}>{inst.amount}</span>
                    </div>
                  ))}
                </div>
              )}
              <div className="finances-invoice-footer">
                <span className={`finances-invoice-status finances-status-${f.statusType}`}>{f.status}</span>
                {f.receivedDate && <span className="finances-invoice-received"><Check size={14} strokeWidth={2} aria-hidden /> {f.receivedDate}</span>}
                {f.status === 'En retard' && (
                  <button type="button" className="finances-btn-relance"><Mail size={14} strokeWidth={2} aria-hidden /> Relance Flash</button>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
