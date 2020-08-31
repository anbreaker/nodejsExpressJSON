const {Router, request} = require('express');
const router = Router();
const fs = require('fs');
const uuid = require('uuid');

const jsonBooks = fs.readFileSync('src/books.json', 'utf-8');
let books = JSON.parse(jsonBooks);

router.get('/', (request, response) => {
  response.render('index.ejs', {
    books,
  });
});

router.get('/new-entry', (request, response) => {
  response.render('new-entry');
});

router.post('/new-entry', (request, response) => {
  const {title, author, image, description} = request.body;

  if (!title || !author || !image || !description) {
    response.status(400).send('Entries must have all field');
    return;
  }

  let newBook = {
    id: uuid.v4(),
    title,
    author,
    image,
    description,
  };

  books.push(newBook);

  saveItem();

  response.redirect('/');
});

router.get('/delete/:id', (request, response) => {
  books = books.filter((book) => book.id != request.params.id);
  saveItem();
  response.redirect('/');
});

const saveItem = () => {
  const jsonBooks = JSON.stringify(books);
  fs.writeFileSync('src/books.json', jsonBooks, 'utf-8');
};

module.exports = router;
