import { Router } from 'express';
import { listInquiries, submitInquiry } from '../controllers/inquiryController.js';
import { validateInquiry } from '../middleware/validateInquiry.js';

const router = Router();

router.post('/', validateInquiry, submitInquiry);
router.get('/', listInquiries);

export default router;
