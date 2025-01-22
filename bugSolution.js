const express = require('express');
const app = express();
app.use(express.json({ strict: false })); // added strict: false
app.post('/data', (req, res) => {
  try {
    const data = req.body;
    if (Object.keys(data).length === 0) { //check if req.body is empty
      return res.status(400).send('Bad Request: Invalid JSON');
    }
    // ... process data ...
    res.send('Data received');
  } catch (error) {
    console.error('Error parsing JSON:', error);
    res.status(400).send('Bad Request: Invalid JSON');
  }
});
app.listen(3000, () => console.log('Server listening on port 3000'));