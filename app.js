const express = require('express');
// chalk will color coat code
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan')
const path = require('path')
const PORT = process.env.PORT || 3000

const app = express();

// this should be above my get request
//this is middlewere
app.use(morgan('tiny')); 

// below is going into the public folder and looking for an in devicePixelRatio.html to display
//this is middlewere thats built in 
app.use(express.static(path.join(__dirname, '/public/')));

app.set('views', './src/views')
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index', {title: 'Welcome to Globomantix', data: ['first', 'second', 'third'], grades: ['v10', 'v11', 'v12'] })
})

app.listen(PORT, () => {
    debug(`listening on port ${chalk.green(PORT)}`)
})