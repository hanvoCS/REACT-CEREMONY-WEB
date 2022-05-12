const mongoose = require('mongoose');

const MONGO_URL = "mongodb+srv://Alhanouf:QolXkF0IQZu6Kw9V@ceremony.ca4mf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"; 
 
 exports.connect =  () => {
       mongoose.connect(MONGO_URL)
      .then(() =>  {
         console.log(("Successfully connected to Database"));
      })
      .catch((error)=>{
           console.log(('Database connection failed!!!')); 
           console.error(error);
      }); 
}