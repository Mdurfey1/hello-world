// import express from 'express';
var express = require('express');
var app = express();
var path = require('path');
var https = require('https');
var bodyParser = require('body-parser')

app.use('/', express.static(__dirname))
app.use(bodyParser());




app.get("/", function(request, response){response.sendFile(path.join(__dirname + '/index.html'))})

app.get('/getRedditInfo', function(request, response){
	
	var redditData;
	https.get("https://www.reddit.com/r/earthporn/new.json",function(res){
		
		var data = "";
		res.on('data', function(bit){
			data += bit;
		})
		res.on('end', function(){
			console.log("stream ended")			
			response.send(data)
		})
	})
});

app.listen(3000, function(){console.log("server started on port 3000")});