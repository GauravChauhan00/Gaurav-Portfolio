export default function EmptyState({ title = 'Nothing to show yet', description }) {
  return (
    <div className="empty-state">
      <div className="empty-state__icon">&lt;/&gt;</div>
      <h3>{title}</h3>
      {description && <p>{description}</p>}
    </div>
  );
}
