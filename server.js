const express = require('express');
const app = express();
app.use(express.static(__dirname + '/dist/frontend'));
app.listen(process.env.PORT || 8080,()=>{
    console.log('Server listening');
});
const path = require('path');
app.get('/*', function(req, res){
  res.sendFile(path.join(__dirname + '/dist/frontend/index.html'));
});


