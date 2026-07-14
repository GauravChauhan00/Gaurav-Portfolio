import { Link } from 'react-router-dom';
import AnimatedButton from '../components/common/AnimatedButton';

export default function NotFound() {
  return (
    <main className="section-shell section-pad not-found">
      <h1>404</h1>
      <p>This page does not exist. Go back to the portfolio home page.</p>
      <AnimatedButton to="/">Back Home</AnimatedButton>
    </main>
  );
}
