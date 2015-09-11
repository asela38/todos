var express    =    require('express');
var app        =    express();

app.use("/todos", express.static('frontend'));
        
var server     =    app.listen(3000, function(){
    console.log("Todos Server started on port 3000");
});