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

exports.getLand=function(id,callback){
    let sql='SELECT * From land WHERE id=?';
    db.query(sql,[id],function(err,data){
        if(err){
            callback(err);
        }else{
            callback(null,data);
        }
    })
}

exports.getLands=function(callback){
    let sql='SELECT * From land WHERE 1';
    db.query(sql,function(err,data){
        if(err){
            callback(err);
        }else{
            callback(null,data);
        }
    })
}

exports.insertLand=function(data,callback){
    let sql="INSERT into land set ?";
    db.query(sql,[data],function(err,data){
        if(err){
            callback(err);
        }else{
            callback(null,data);
        }
    })
}

exports.updateLand=function(id,data,callback){
    let sql="update land set ? where id = ?";
    db.query(sql,[data,id],function(err,data){
        if(err){
            callback(err);
        }else{
            callback(null,data);
        }
    })
}

exports.deleteLand=function(id,callback){
    let sql="DELETE from land where id = ?";
    db.query(sql,[id],function(err,data){
        if(err){
            callback(err);
        }else{
            callback(null,data);
        }
    })
}
