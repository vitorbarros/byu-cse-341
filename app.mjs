import 'dotenv/config';
import express from 'express';
import contactFactory from './src/factory/contact.mjs';
import client from './src/infra/database/mongodb.mjs';

const app = express();

app.use(express.json());

const cFactory = contactFactory();

(async () => {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
  } catch (e) {
    console.error(e);
  }
})();

app.get('/', (req, res) => {
  res.send('Anna Barros');
});

app.post('/contact', cFactory.create);
app.put('/contact/:id', cFactory.update);
app.delete('/contact/:id', cFactory.delete);
app.get('/contact/:id', cFactory.findOne);
app.get('/contact', cFactory.findAll);

app.listen(process.env.port || 3000);
console.log(`Web Server is listening at port ${process.env.port || 3000}`);
