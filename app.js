const express = require('express');
const path = require('path');

const app = express();
const expressHandlebars = require('express-handlebars');

const PORT = process.env.PORT || 3000;

// configure viewEngine to be handlebars
app.set('views', path.join(__dirname, './src/views'));
app.engine('handlebars', expressHandlebars({
    defaultLayout: 'layout'
}));
app.set('view engine', 'handlebars');

// Configure assets router
app.use('/public', express.static('dist'));

// Routes
app.get('/', (req, res) => {
  res.render('pages/home', {
    message: 'Rendered from the server!',
    textItems: [
      'server one',
      'server two',
      'server three',
      'server four'
    ]
  });
});

app.get('/api', (req, res) => {
  res.send({
    textItems: [
      'api one',
      'api two',
      'api three',
      'api four',
      'api five'
    ]
  })
})

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
})