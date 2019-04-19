const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.json())

// curl http://localhost:8000/items
// curl -d '{"item": "Groceries"}' -H "Content-Type: application/json" -X POST http://localhost:8000/items
// curl -X DELETE http://localhost:8000/items/1

let items = [
  {
    id: 1,
    item: "Make your bed"
  },
  {
    id: 2,
    item: "Fold your clothes"
  },
]

app.get('/api/users', (_, res) => {
  res.jsonp(items);
})

app.post('/api/users', (req, res) => {
  const item = {
    id: Date.now(),
    item: req.body.item
  }
  items.push(item)
  res.jsonp(item);
})

app.patch('/api/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  let pos = -1;
  for (let i = 0; i < items.length; i++) {
    if (items[i].id === id) {
      pos = i;
      break;
    }
  }
  if (pos !== -1) {
    items[pos] = {...items[pos], ...req.body.item};
  }
  res.jsonp(items[pos]);
})

app.delete('/api/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  items = items.filter(found => found.id !== id)
  res.jsonp(items);
})

app.listen(8000, () => {
  console.log('JSON Server is running')
})