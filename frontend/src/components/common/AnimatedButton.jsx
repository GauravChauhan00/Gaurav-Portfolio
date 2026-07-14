import { Link } from 'react-router-dom';

export default function AnimatedButton({
  children,
  href,
  to,
  variant = 'primary',
  className = '',
  disabled = false,
  ...props
}) {
  const classes = `btn btn--${variant} ${disabled ? 'btn--disabled' : ''} ${className}`;

  if (disabled) {
    return (
      <span className={classes} aria-disabled="true" {...props}>
        {children}
      </span>
    );
  }

  if (to) {
    return (
      <Link className={classes} to={to} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a className={classes} href={href} target={href.startsWith('#') || props.download ? undefined : '_blank'} rel="noreferrer" {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
