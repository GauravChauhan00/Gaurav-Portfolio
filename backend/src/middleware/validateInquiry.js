const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateInquiry(req, res, next) {
  const { name = '', email = '', subject = '', message = '' } = req.body || {};
  const errors = {};

  if (!name.trim()) errors.name = 'Name is required.';
  if (!email.trim()) errors.email = 'Email is required.';
  else if (!emailRegex.test(email.trim())) errors.email = 'Please enter a valid email address.';
  if (!subject.trim()) errors.subject = 'Subject is required.';
  if (!message.trim()) errors.message = 'Message is required.';
  else if (message.trim().length < 10) errors.message = 'Message must be at least 10 characters.';

  if (Object.keys(errors).length > 0) {
    return res.status(400).json({
      success: false,
      message: 'Please fix the highlighted fields.',
      errors
    });
  }

  return next();
}
