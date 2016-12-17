var express = require('express');
var zapiska ={};
var name="test";

var server = express();
server.use(express.static(__dirname + '/views'));
//server.set('view engine', 'ejs');
// This responds a GET request for the homepage

server.get('/create_note', function (req, res) {
   console.log("Got a GET request for the homepage");
   // Prepare output in JSON format
   zapiska = {
     Name:req.query.name,
	 Note:req.query.note
   };
   console.log(zapiska);
   res.status(200).send(zapiska);//render('zapiska',{name:zapiska.Name, note:zapiska.Note});
});

server.get('/check_note', function(req,res){
 //  res.render('zapiska',{name:zapiska.Name, note:zapiska.Note});
  console.log("Sending note contents");
  res.status(200).send(zapiska);//render('zapiska',{name:zapiska.Name, note:zapiska.Note});
})


var port = 10001;
server.listen(port, function(){
	console.log('server listening on port '+ port);
});