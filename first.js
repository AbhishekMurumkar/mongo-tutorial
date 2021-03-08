var mc= require("mongodb").MongoClient;
mc.connect("mongodb://localhost/",function(err,db){
    try{
        if(err)throw err;
        else{
            let adminDB=db.db("admin").admin();
            adminDB.listDatabases((err,dbs)=>{
                if(err) throw err;
                else{
                    console.log(dbs);
                    db.close();
                }
            })
        }        
    }catch(err){
        console.log(err);
        db.close();
    }
    
})