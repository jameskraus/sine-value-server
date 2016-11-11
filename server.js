var express = require('express')
var app = express()

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

function getNumbah(){
	const unixTime = (new Date).getTime() / 1000 / Math.PI
	const sinVal = Math.sin(unixTime)
	console.log('sinVal', sinVal)
	console.log

	return sinVal/2 * 100 + 50
}


app.get('/', function (req, res) {
  res.send('' + getNumbah())
})

app.listen(4444, function () {
  console.log('Example app listening on port 4444!')
})