// console.log("hello world")
const express = require('express');

const app = express();
const port = 3000;
app.use(express.static('public'));                    
// inserisco al rotta base per gestire le richieste GET

app.get('/', (req, res) => {
  res.send('server del mio blog');
});

app.get('/posts', (req, res) => {
    const infoBlog = [
            {
                titolo: 'Ciambellone',
                contenuto: 'dolce preferito',
                immagine:"public/images/ciambellone.jpg",
                tags:["dolce","sfizioso"]
            }, 
            {
                titolo: 'Cracker di barbabietola',
                contenuto: 'croccante e delizioso',
                immagine:"public/images/cracker_barbabietola.jpg",
                tags:["salato","croccante"]
            }, 
            {
                titolo: 'Pane fritto dolce',
                contenuto: 'fritto e accativante',
                immagine:"ipublic/images/pane_fritto_dolce.jpg",
                tags:["dolce","sfizioso","ipercalorico"]
            }, 
            {
                titolo: 'pasta alla barbabietola',
                contenuto: 'carboidrati sfiziosi',
                immagine:"public/images/pasta_barbabietola.jpg",
                tags:["salato","sfizioso","colorato"]
            }, 
            {
                titolo: 'Torta Paesana',
                contenuto: 'da nonna a nipote',
                immagine:"public/images/torta_paesana.jpg",
                tags:["dolce","sfizioso","tradizionae"]
            }]

            res.json(infoBlog)

    })


    // creo una rotta che restituisce un oggetto json con la lista dei post

app.listen(port, () => {
    console.log(`lista dei post:${port}`);
  });

