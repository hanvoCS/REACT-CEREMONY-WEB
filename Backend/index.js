const app = require('./app'); 

let host = process.env.PORT; 
if(host == null || host == ""){
     host = 4000;
}
//Server 
app.listen(host, ()=>{
    console.log("Server Running");
}); 