const {Router, request} = require('express');
const router = Router();

const books = [];

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
    title,
    author,
    image,
    description,
  };

  books.push(newBook);
  response.send('recived');
  console.log('ver', books);
});

module.exports = router;
