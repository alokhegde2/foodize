const mysql = require('mysql');
const express = require('express');
const bodyparser = require('body-parser');

var app = express();

app.use(bodyparser.json());

var mysqlConnection = mysql.createConnection({
    host:"localhost",
    user:'root',
    password:"alok14701",
    database:"foodize"

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
           res.send(rows)
        }else{
            console.log(err)
        }
    })
});

//to get single  employee
//${req.params.id}

app.get('/food/:id',(req,res)=>{
    let sql = `SELECT * FROM Food WHERE FID ="${req.params.id}"`;
    let query = mysqlConnection.query(sql,(err,result)=>{
        if(err){
            throw err;
        }else{
        
            res.send(result)
        }
    })
})


// //Delete an employee

// app.delete('/food:id',(req,res)=>{
//     mysqlConnection.query("DELETE FROM Food WHERE FID = ?",[req.params.id],(err,rows,fields)=>{
//         if(!err){
//             console.log('Deleted Sucessfully')
//         }else{
//             console.log(err)
//         }
//     })
// })


//To get soft drinks food

app.get('/soft',(req,res)=>{
    let sql = `SELECT * FROM Food WHERE Ftype ="SD"`;
    let query = mysqlConnection.query(sql,(err,result)=>{
        if(err){
            throw err;
        }else{
          
            res.send(result)
        }
    })
})

//to get north indian food

app.get('/north',(req,res)=>{
    let sql = `SELECT * FROM Food WHERE Ftype ="NI"`;
    let query = mysqlConnection.query(sql,(err,result)=>{
        if(err){
            throw err;
        }else{
            
            res.send(result)
        }
    })
})

//to get south indian food

app.get('/south',(req,res)=>{
    let sql = `SELECT * FROM Food WHERE Ftype ="SI"`;
    let query = mysqlConnection.query(sql,(err,result)=>{
        if(err){
            throw err;
        }else{
           
            res.send(result)
        }
    })
})


//to get fast food

app.get('/fast',(req,res)=>{
    let sql = `SELECT * FROM Food WHERE Ftype ="FF"`;
    let query = mysqlConnection.query(sql,(err,result)=>{
        if(err){
            throw err;
        }else{
           
            res.send(result)
        }
    })
})



app.listen(3001,()=>{
    console.log('Express server is running at port number :3001')
})

