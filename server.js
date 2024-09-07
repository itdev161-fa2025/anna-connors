import express from 'express';

// Initialize express applicaiton
const app = express();

//API endpoints
app.get('/', (req, res) =>
    res.send('http get request sent to root api endpoint')
);

//connection listener
app.listen(3000, () => console.log('Express server running on port 3000'));
