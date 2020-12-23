const mysql = require('mysql');
const express = require('express');
const bodyparser = require('body-parser');

var app = express();

app.use(bodyparser.json());

var mysqlConnection = mysql.createConnection({
    host:"localhost",
    user:'username',
    password:"password",
    database:"database_name"

});

mysqlConnection.connect((err)=>{
    if(!err){
        console.log("Db connection success")
    }else{
        console.log("DB connection failed \n Error :"+JSON.stringify(err));
    }
});

//to get all employees

app.get('/food',(req,res)=>{
    mysqlConnection.query("SELECT * FROM Food",(err,rows,fields)=>{
        if(!err){
            console.log(rows)
        }else{
            console.log(err)
        }
    })
});

//to get single  employee

app.get('/food:id',(req,res)=>{
    mysqlConnection.query("SELECT * FROM Food WHERE FID = ?",[req.params.id],(err,rows,fields)=>{
        if(!err){
            console.log(rows)
        }else{
            console.log(err)
        }
    })
})

//Delete an employee

app.delete('/food:id',(req,res)=>{
    mysqlConnection.query("DELETE FROM Food WHERE FID = ?",[req.params.id],(err,rows,fields)=>{
        if(!err){
            console.log('Deleted Sucessfully')
        }else{
            console.log(err)
        }
    })
    
})




app.listen(3000,()=>{
    console.log('Express server is running at port number :3000')
})

