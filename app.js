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
                immagine:"img./",
                tags:["dolce","sfizioso"]
            }, 
            {
                titolo: 'Cracker di barbabietola',
                contenuto: 'croccante e delizioso',
                immagine:"img./",
                tags:["salato","croccante"]
            }, 
            {
                titolo: 'Pane fritto dolce',
                contenuto: 'fritto e accativante',
                immagine:"img./",
                tags:["dolce","sfizioso","ipercalorico"]
            }, 
            {
                titolo: 'pasta alla barbabietola',
                contenuto: 'carboidrati sfiziosi',
                immagine:"img./",
                tags:["salato","sfizioso","colorato"]
            }, 
            {
                titolo: 'Torta Paesana',
                contenuto: 'da nonna a nipote',
                immagine:"img./",
                tags:["dolce","sfizioso","tradizionae"]
            }]

            res.json(infoBlog)

    })


