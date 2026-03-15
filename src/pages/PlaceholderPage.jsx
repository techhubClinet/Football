export default function PlaceholderPage({ title }) {
  return (
    <div className="placeholder-page">
      <h1>{title || 'Page'}</h1>
      <p>Contenu à venir.</p>
    </div>
  );
}
