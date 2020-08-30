const app = require('./app');

const main = async () => {
  // Listening the server
  const port = app.get('port');
  await app.listen(port);
  console.log(`Server on Port: http://localhost:${port}`);
};

main();
