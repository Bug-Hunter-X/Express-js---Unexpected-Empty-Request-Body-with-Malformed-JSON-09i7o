const express = require('express');
const app = express();
app.use(express.json());
app.post('/data', (req, res) => {
  const data = req.body;
  // ... process data ...
  res.send('Data received');
});

//Problem: If the client sends data that cannot be parsed as JSON, the request body will be empty and cause unexpected behavior.  For example, if the client sends an improperly formatted JSON object or sends a different content type, the server may throw an error or silently ignore the request.

app.listen(3000, () => console.log('Server listening on port 3000'));