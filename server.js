var exp = require('express')
var app = exp();
var bp = require('body-parser')

app.use(bp.urlencoded({extended:false}))

app.listen(9000,function(){
    console.log("server started at port 9000")
})

app.get('/getform',function(req,res){
    res.sendFile(__dirname+"/form.html")
})

app.post('/getDataTable',function(req,res){
    var name = req.body.name;
    var email = req.body.email;
    var bdate = req.body.bdate;
    var qualification  = req.body.qualification;
    str = "";
    str += "<table border='1'>"
    str+="<tr>"
        str+="<td>"+name+"</td>"
        str+="<td>"+email+"</td>"
        str+="<td>"+bdate+"</td>"
        str+="<td>"+qualification+"</td>"
    str+="</tr>"
    str += "</table>"

    res.send(str)
})