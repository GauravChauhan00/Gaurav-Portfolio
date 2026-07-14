export default function EducationCard({ item }) {
  return (
    <article className="education-card">
      <span>{item.duration}</span>
      <h3>{item.degree}</h3>
      <p>{item.institution}</p>
      <strong>{item.score}</strong>
      <ul>
        {item.highlights.map((highlight) => (
          <li key={highlight}>{highlight}</li>
        ))}
      </ul>
    </article>
  );
}
