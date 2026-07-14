import { createInquiry, getLatestInquiries } from '../models/inquiryModel.js';
import { sendContactEmail } from '../utils/emailService.js';
import { env } from '../config/env.js';

export async function submitInquiry(req, res, next) {
  try {
    const inquiry = await createInquiry(req.body);

    // Send email notification in the background
    sendContactEmail(req.body).catch((err) => {
      console.error('Failed to send contact email notification:', err);
    });

    return res.status(201).json({
      success: true,
      message: 'Thank you. Your message has been saved and notification sent.',
      inquiryId: inquiry.id
    });
  } catch (error) {
    return next(error);
  }
}

export async function listInquiries(req, res, next) {
  try {
    if (!env.adminToken || req.headers['x-admin-token'] !== env.adminToken) {
      return res.status(403).json({
        success: false,
        message: 'Admin token missing or invalid. Use DB Browser for SQLite or set ADMIN_TOKEN in .env.'
      });
    }

    const inquiries = await getLatestInquiries(Number(req.query.limit) || 100);
    return res.json({ success: true, count: inquiries.length, inquiries });
  } catch (error) {
    return next(error);
  }
}
