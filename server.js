const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3333;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let lamps = [
  { id: 1, type: 'Rpink', power: 10, leds: 15, manufacturer: 'Promin' },
  { id: 2, type: 'Miwa', power: 25, leds: 0, manufacturer: 'Brille' },
  { id: 3, type: 'Amor', power: 50, leds: 5, manufacturer: 'Iskra' }
];

app.post('/api/lamps', (req, res) => {
  const newLamp = req.body;
  newLamp.id = lamps.length + 1;
  lamps.push(newLamp);
  res.json(newLamp);
});

app.get('/api/lamps', (req, res) => {
  res.json(lamps);
});

app.put('/api/lamps/:id', (req, res) => {
  const lampId = parseInt(req.params.id);
  const updatedLamp = req.body;
  lamps = lamps.map(lamp => (lamp.id === lampId ? updatedLamp : lamp));
  res.send(`Lamp with ID ${lampId} updated`);
});

app.delete('/api/lamps/:id', (req, res) => {
  const lampId = parseInt(req.params.id);
  lamps = lamps.filter(lamp => lamp.id !== lampId);
  res.send(`Lamp with ID ${lampId} deleted`);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
