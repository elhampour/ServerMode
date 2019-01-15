const express=require("express");
const mysql=require("mysql");
const bodyparser=require("body-parser");

const user =require("./model/user");
const land =require("./model/land");
const history =require("./model/history");
const soil =require("./model/soil");

const app=express();
app.listen(9000);

//app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());
app.get("/api/user/:id",function(req,res){
    try{
        user.getUser(req.params.id,function(err,data){
            if(err){
                throw err
            }else{
                res.send(data);
            }
        })
    }catch(error){
        res.status(500).send(error);
    }
});

app.get("/api/user",function(req,res){
    try{
        user.getUsers(function(err,data){
            if(err){
                throw err
            }else{
                res.send(data);
            }
        })
    }catch(error){
        res.status(500).send(error);
    }
});

app.post("/api/user",function(req,res){
    try{
        user.insertUser(req.body,function(err,data){
            if(err){
                throw err;
            }else{
                user.getUser(data.insertId,function(err,data){
                    if(err){
                        throw err;
                    }else{
                        res.send(data);
                    }
                })
            }
        })
    }catch(error){
        res.status(500).send(error);
    }
});

app.put("/api/user/:id",function(req,res){
    try{
        user.updateUser(req.params.id,req.body,function(err,data){
            if(err){
                throw err;
            }else{
                user.getUser(req.params.id,function(err,data){
                    if(err){
                        throw err;
                    }else{
                        res.send(data);
                    }
                })
            }
        })
    }catch(error){
        res.status(500).send(error);
    }
});

app.delete("/api/user/:id",function(req,res){
    try{
        user.deleteUser(req.params.id,function(err,data){
            if(err){
                throw err;
            }else{
                res.send(data);
            }
        })
    }catch(error){
        res.status(500).send(error);
    }
});

app.get("/api/land/:id",function(req,res){
    try{
        land.getLand(req.params.id,function(err,data){
            if(err){
                throw err
            }else{
                res.send(data);
            }
        })
    }catch(error){
        res.status(500).send(error);
    }
});

app.get("/api/land",function(req,res){
    try{
        land.getLands(function(err,data){
            if(err){
                throw err
            }else{
                res.send(data);
            }
        })
    }catch(error){
        res.status(500).send(error);
    }
});

app.post("/api/land",function(req,res){
    try{
        land.insertLand(req.body,function(err,data){
            if(err){
                throw err;
            }else{
                land.getLand(data.insertId,function(err,data){
                    if(err){
                        throw err;
                    }else{
                        res.send(data);
                    }
                })
            }
        })
    }catch(error){
        res.status(500).send(error);
    }
});

app.put("/api/land/:id",function(req,res){
    try{
        land.updateLand(req.params.id,req.body,function(err,data){
            if(err){
                throw err;
            }else{
                land.getLand(req.params.id,function(err,data){
                    if(err){
                        throw err;
                    }else{
                        res.send(data);
                    }
                })
            }
        })
    }catch(error){
        res.status(500).send(error);
    }
});

app.delete("/api/land/:id",function(req,res){
    try{
        land.deleteLand(req.params.id,function(err,data){
            if(err){
                throw err;
            }else{
                res.send(data);
            }
        })
    }catch(error){
        res.status(500).send(error);
    }
});

app.get("/api/history/:id",function(req,res){
    try{
        history.getHistory(req.params.id,function(err,data){
            if(err){
                throw err;
            }else{
                res.send(data);
            }
        })
    }catch(error){
        res.status(500).send(error);
    }
});

app.get("/api/history",function(req,res){
    try{
        history.getHistorys(function(err,data){
            if(err){
                throw err;
            }else{
                res.send(data);
            }
        })
    }catch(error){
        res.status(500).send(error);
    }
});

app.post("/api/history",function(req,res){
    try{
        history.insertHistory(req.body,function(err,data){
            if(err){
                throw err;
            }else{
                history.getHistory(data.insertId,function(err,data){
                    if(err){
                        throw err;
                    }else{
                        res.send(data);
                    }
                })
            }
        })
    }catch(error){
        res.status(500).send(error);
    }
});

app.put("/api/history/:id",function(req,res){
    try{
        history.updateHistory(req.params.id,req.body,function(err,data){
            if(err){
                throw err;
            }else{
                history.getHistory(req.params.id,function(err,data){
                    if(err){
                        throw err;
                    }else{
                        res.send(data);
                    }
                })
            }
        })
    }catch(error){
        res.status(500).send(error);
    }
});

app.delete("/api/history/:id",function(req,res){
    try{
        history.deleteHistory(req.params.id,function(err,data){
            if(err){
                throw err;
            }else{
                res.send(data);
            }
        })
    }catch(error){
        res.status(500).send(error);
    }
});

app.get("/api/soil/:id",function(req,res){
    try{
        soil.getSoil(req.params.id,function(err,data){
            if(err){
                throw err
            }else{
                res.send(data);
            }
        })
    }catch(error){
        res.status(500).send(error);
    }
});

app.get("/api/soil",function(req,res){
    try{
        soil.getSoils(function(err,data){
            if(err){
                throw err
            }else{
                res.send(data);
            }
        })
    }catch(error){
        res.status(500).send(error);
    }
});
