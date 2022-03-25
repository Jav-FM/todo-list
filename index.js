const express = require('express');
const { create } = require('express-handlebars');
const { getTodos, createTodo, deleteTodo } = require('./database');
const app = express();
const port = 3000;

app.use(express.json());

app.use('/static', express.static('public'));

const hbs = create({
  partialsDir: ['views/components'],
  extname: '.hbs',
});
app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');
app.set('views', './views');

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.redirect('/todos');
});

app.get('/todos', async (req, res) => {
  const { data: todos } = await getTodos();
  res.render('Home', { todos });
});

app.get('/todo-create', async (req, res) => {
  res.render('create');
});

app.post('/todo', async (req, res) => {
  const { title, description } = req.body;
  await createTodo(title, description);
  res.send('Todo salio bien');
});

app.get('/todo-delete/:id', async (req, res) => {
  const { id } = req.params;
  res.render('delete', { id });
});

app.delete('/todos/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const response = await deleteTodo(id);
    res.send(`The Todo with title '${response[0].title}' has been deleted.`);
  } catch (e) {
    res.send(e);
  }
});

app.listen(port, () => {
  console.log(`Server ON at: http://localhost:${port}`);
});
