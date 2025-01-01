import express from 'express';
import morgan from 'morgan';
import { User } from './modules/db';

const app = express();
app.use(morgan('dev')); // logger

app.get('/', async (req, res) => {
  res.send('Welcome to The ts server!');
});

app.get('/user', async (req, res) => {
    try {
        const users = await User.findMany();
        res.json({
          success: true,
          data: users,
        });
    } catch (e) {
        throw new Error((e as Error).message);
    }
});

const port = Number(process.env.PORT ?? 8080);
app.listen(port, '0.0.0.0', () => {
  console.log(`Server running at http://localhost:${port}`);
});
