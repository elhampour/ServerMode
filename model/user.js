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

exports.getUser=function(id,callback){
    let sql='SELECT * From users WHERE id=?';
    db.query(sql,[id],function(err,data){
        if(err){
            callback(err);
        }else{
            callback(null,data);
        }
    })
}

exports.getUsers=function(callback){
    let sql='SELECT * From users WHERE 1';
    db.query(sql,function(err,data){
        if(err){
            callback(err);
        }else{
            callback(null,data);
        }
    })
}


exports.insertUser=function(data,callback){
    console.log(data);
    let sql='INSERT into users SET ?';
    db.query(sql,data,function(err,data){
        if(err){
            callback(err);
        }else{
            callback(null,data);
        }
    })
}

exports.updateUser=function(id,data,callback){
    let sql="update users set ? where id = ?";
    db.query(sql,[data,id],function(err,data){
        if(err){
            callback(err);
        }else{
            callback(null,data);
        }
    })
}

exports.deleteUser=function(id,callback){
    let sql="DELETE from users where id = ?";
    db.query(sql,[id],function(err,data){
        if(err){
            callback(err);
        }else{
            callback(null,data);
        }
    })
}
