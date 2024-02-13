const express = require('express');
const bodyParser = require('body-parser');

//creating an express app
const app = express();

//setting up server port
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use(express.json())

//root route for testing
app.get('/', (req, res) => {
    res.send('Hello World from server!');
});

const groceryItemsRoutes = require('./app/routes/groceryItems.routes')

app.use('/api', groceryItemsRoutes);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});