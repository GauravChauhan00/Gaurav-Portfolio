import { Moon, Sun } from 'lucide-react';

export default function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === 'dark';
  return (
    <button className="theme-toggle" type="button" onClick={onToggle} aria-label="Toggle dark and light theme">
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
      <span>{isDark ? 'Light' : 'Dark'}</span>
    </button>
  );
}
