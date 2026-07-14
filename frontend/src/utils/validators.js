export const isEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

export function validateContactForm(values) {
  const errors = {};

  if (!values.name.trim()) errors.name = 'Name is required.';
  if (!values.email.trim()) errors.email = 'Email is required.';
  else if (!isEmail(values.email.trim())) errors.email = 'Please enter a valid email.';
  if (!values.subject.trim()) errors.subject = 'Subject is required.';
  if (!values.message.trim()) errors.message = 'Message is required.';
  else if (values.message.trim().length < 10) errors.message = 'Message should be at least 10 characters.';

  return errors;
}
