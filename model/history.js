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

exports.getHistory=function(id,callback){
    let sql='SELECT * From history WHERE id=?';
    db.query(sql,[id],function(err,data){
        if(err){
            callback(err);
        }else{
            callback(null,data);
        }
    })
}

exports.getHistorys=function(callback){
    let sql='SELECT * From history WHERE 1';
    db.query(sql,function(err,data){
        if(err){
            callback(err);
        }else{
            callback(null,data);
        }
    })
}

exports.insertHistory=function(data,callback){
  let landid=data.body.id;
  
    let sql="INSERT into history set ?";
    db.query(sql,[data],function(err,data){
        if(err){
            callback(err);
        }else{
            callback(null,data);
        }
    })
}

exports.updateHistory=function(id,data,callback){
    let sql="update history set ? where id = ?";
    db.query(sql,[data,id],function(err,data){
        if(err){
            callback(err);
        }else{
            callback(null,data);
        }
    })
}

exports.deleteHistory=function(id,callback){
    let sql="DELETE from history where id = ?";
    db.query(sql,[id],function(err,data){
        if(err){
            callback(err);
        }else{
            callback(null,data);
        }
    })
}
