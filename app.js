const express = require('express')
const app = express()
const port = 3000
app.use(express.static('public'))
app.get('/', (req, res) => {
  res.send('Server del mio blog')
})
app.get('/bacheca', (req, res) => {
    res.json([
        {
           title: "Ciambellone",
           description: "ecco a voi il ciambellone appena fatto, super buono e super morbido",
           image: ".images/ciambellone.jpeg",
           tags: ['#delizioso', '#food','#ricetta']
        },
        {
            title: "cracker alla barbabietola",
            description: "ecco a voi i mie crackers alla barbabietola appena fatti, super buono e super morbido",
            image: "images/cracker_barbabietola.jpeg",
            tags: ['#delizioso', '#food','#ricetta']
        },
        {
            title: "pane fritto dolce",
            description: "ecco a voi il mio pane fritto dolce appena fatto, super buono e super morbido",
            image: "images/pane_fritto_dolce.jpeg",
            tags: ['#delizioso', '#food','#ricetta']
        },
        {
            title: "pasta alla barbabietola",
            description: "ecco a voi la mia pasta alla barbabietola appena fatta, super buona",
            image: "images/pasta_barbabietola.jpeg",
            tags: ['#delizioso', '#food','#ricetta']
        },
        {
            title: "torta paesana",
            description: "ecco a voi la mia torta paesana appena fatta, super buona",
            image: "images/torta_paesana.jpeg",
            tags: ['#delizioso', '#food','#ricetta']
        },
    ])
  })
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
}) 