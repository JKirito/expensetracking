import express from 'express';
import logger from '@utils/logger/logger';
import requestLoggerMiddleware from './middleware';

const app = express();

app.use(express.json());
app.use(requestLoggerMiddleware);

app.get('/', (req, res) => {
  res.send('Hello, TypeScript!');
});
app.listen(3000, () => {
  logger.info('Server running on http://localhost:3000');
});
