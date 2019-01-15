const mysql=require("mysql");

const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"sarfab"
});

db.connect(function(err){
    if(err){
        console.log(err);
    }else{
        console.log("connected");
    }
})

exports.getSoil=function(id,callback){
    let sql='SELECT * From soil WHERE id=?';
    db.query(sql,[id],function(err,data){
        if(err){
            callback(err);
        }else{
            callback(null,data);
        }
    })
}

exports.getSoils=function(callback){
    let sql='SELECT * From soil WHERE 1';
    db.query(sql,function(err,data){
        if(err){
            callback(err);
        }else{
            callback(null,data);
        }
    })
}
