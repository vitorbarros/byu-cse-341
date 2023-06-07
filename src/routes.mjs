import express from 'express';
import contactFactory from './factory/contact.mjs';

const router = express.Router();

const cFactory = contactFactory();

router.get('/', (req, res) => {
  res.send('Anna Barros');
});

router.post('/contact', (req, res) =>
  /* #swagger.parameters['obj'] = {
      in: 'body',
      description: 'Create contact payload',
      schema: {
        firstName: '',
        lastName: '',
        email: '',
        favoriteColor: '',
        birthday: ''
      }
  } */
  cFactory.create(req, res),
);
router.put('/contact/:id', (req, res) =>
  // #swagger.parameters['id'] = { description: 'Contact id to be updated' }
  /* #swagger.parameters['obj'] = {
      in: 'body',
      description: 'Create contact payload',
      schema: {
        firstName: '',
        lastName: '',
        email: '',
        favoriteColor: '',
        birthday: ''
      }
  } */
  cFactory.update(req, res),
);
router.delete('/contact/:id', (req, res) =>
  // #swagger.parameters['id'] = { description: 'Contact id to be deleted' }
  cFactory.delete(req, res),
);
router.get('/contact/:id', (req, res) =>
  // #swagger.parameters['id'] = { description: 'Contact id to be retrieve data' }
  cFactory.findOne(req, res),
);
router.get('/contact', cFactory.findAll);

export default router;
