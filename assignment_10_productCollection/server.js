const {PORT,DATA_BASE,app,mongoose} = require('./app'); 
 
 
 mongoose.connect(DATA_BASE); 
   
    
 
 
// server run ...
 
app.listen(PORT,()=>{ 
    console.log(`server run successfuly done http://127.0.0.1:${PORT}`); 
}); 