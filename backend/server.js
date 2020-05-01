import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const port = process.env.PORT || 5000;

// Create our express app
const app = express();

// Enable CORS
// TODO: Enable this only for the applicable domains in production
app.use(cors());

// Enable JSON body parsing
app.use(bodyParser.json());

app.use('/api', (req, res) => {
  res.send('API is ready!');
});

// Attach server to port
app.listen(port, () => {
  console.log(`Backend listening to port ${port}`);
});
