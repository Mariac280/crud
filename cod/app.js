const path = require('path');
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();

//conectar a la base de datos

mongoose.connect('mongodb://localhost/crudmongo')
.then(db=>console.log('Db connect'))
.catch(err=> console.log(err));


//importacion de rutas

const indexRoutes = require('./routes/index');


//ajustes
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));

//rutas 

app.use('/', indexRoutes);


//inicializacion del servidor


app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);

});
