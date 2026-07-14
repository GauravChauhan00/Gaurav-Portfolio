import { useState } from 'react';
import { Send } from 'lucide-react';
import { API_BASE_URL } from '../../config/apiConfig';
import { validateContactForm } from '../../utils/validators';

const initialValues = {
  name: '',
  email: '',
  subject: '',
  message: ''
};

export default function ContactForm() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: '' }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validationErrors = validateContactForm(values);
    setErrors(validationErrors);
    setStatus({ type: '', message: '' });

    if (Object.keys(validationErrors).length > 0) return;

    try {
      setIsSubmitting(true);
      const response = await fetch(`${API_BASE_URL}/api/inquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values)
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong while submitting the form.');
      }

      setStatus({ type: 'success', message: data.message || 'Message sent successfully. I will get back to you soon.' });
      setValues(initialValues);
    } catch (error) {
      setStatus({
        type: 'error',
        message:
          error.message ||
          'Could not submit the form. Please try again or email directly at gaurav949855@gmail.com.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="form-grid">
        <label>
          <span>Name</span>
          <input name="name" value={values.name} onChange={handleChange} placeholder="Your full name" />
          {errors.name && <small>{errors.name}</small>}
        </label>
        <label>
          <span>Email</span>
          <input name="email" type="email" value={values.email} onChange={handleChange} placeholder="your@email.com" />
          {errors.email && <small>{errors.email}</small>}
        </label>
      </div>
      <label>
        <span>Subject</span>
        <input name="subject" value={values.subject} onChange={handleChange} placeholder="Freelance work, job opportunity, internship, collaboration..." />
        {errors.subject && <small>{errors.subject}</small>}
      </label>
      <label>
        <span>Message</span>
        <textarea name="message" value={values.message} onChange={handleChange} rows="6" placeholder="Tell me about your project, role, collaboration, or opportunity." />
        {errors.message && <small>{errors.message}</small>}
      </label>
      {status.message && <div className={`form-status form-status--${status.type}`}>{status.message}</div>}
      <button className="btn btn--primary" type="submit" disabled={isSubmitting}>
        <Send size={18} /> {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}
