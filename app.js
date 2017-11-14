const express = require('express');
const app = express();

//declaramos statics
app.use(express.static(__dirname + '/public'  ));


app.listen(process.env.PORT || 3000, (err) =>{
	if (err) return console.log('no se pudo iniciar', process.exit(1));

	console.log('corriendo en http://localhost:3000') 
} );