import { Router } from 'express';

const router = Router();

router.post('/api/users/signout', (req, res) => {
  res.send('Current User');
});

export { router as signoutRouter };
