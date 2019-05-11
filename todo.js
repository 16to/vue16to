/**
 * @author 16to
 * @Mysql 操作类
 * 
 */
const conn = require('./config');
const connection = conn();

// 执行
let Query = (sql,callback)=>{
  connection.query(sql,callback);
}

// 查
let Select = (table,where,callback)=>{
  let con='';
  for(let j in where){
    if(typeof(where[j])==='string')
      con+= j+"='"+where[j]+"' AND ";
    else{
      con+= j+"="+where[j]+" AND ";
    }
  }
  con=con.slice(0,-5);
  let sql="SELECT * FROM "+table+' WHERE '+con;
  console.log(sql);
  connection.query(sql,callback);
};

// 增
let Insert = (table,datas,callback)=>{
  let keys='';
  let values='';
  for( let k in datas){
    keys+=k+',';
    if(typeof(datas[k])==='string')
      values+="'"+datas[k]+"',";
    else{
      values+=datas[k]+",";
    }
  }
  keys=keys.slice(0,-1);
  values=values.slice(0,-1);
  let sql="INSERT INTO "+table+'('+keys+') VALUES('+values+')';
  console.log(sql);
  connection.query(sql,callback);
}

// 删
let Delete=function(table,where,callback){
  let con='';
  for(let j in where){
    if(typeof(where[j])==='string')
      con+= j+"='"+where[j]+"' AND ";
    else{
      con+= j+"="+where[j]+" AND ";
    }
  }
  con=con.slice(0,-5);
  let sql="DELETE  FROM "+table+' WHERE '+con;
  console.log(sql);
  connection.query(sql,callback);
}

// 改
let Update=function(table,datas,where,callback){
  let sets='';
  let con='';
  for(let k in datas){
    if(typeof(datas[k])==='string')
      sets+=k+"='"+datas[k]+"',";
    else{
      sets+=k+"="+datas[k]+",";
    }
  }
  sets = sets.slice(0,-1);
  for(let j in where){
    if(typeof(where[j])==='string')
      con+= j+"='"+where[j]+"' AND ";
    else{
      con+= j+"="+where[j]+" AND ";
    }
  }
  con=con.slice(0,-5);
  let sql="UPDATE "+table+' SET '+sets+' WHERE '+con;
  console.log(sql);
  connection.query(sql,callback);
}

exports.Query = Query;
exports.Select = Select;
exports.Insert = Insert;
exports.Delete = Delete;
exports.Update = Update;




const mysql = require('mysql');
const connectdb = () =>{
  let connection = mysql.createConnection({
    host:'localhost',//主机地址
    port:'3306',//主机端口
    user:'root',//用户
    password:'123456',//密码
    database:'test',//库名称
  })
  return connection;
}
module.exports=connectdb;




// npm install -S mysql
const db = require('./db.js');

// 插入数据
const insertCon=[];
insertCon['title']="这是一个demo title";
insertCon['content']="这是一个demo content";
db.Insert("demo",insertCon);

// 查找数据
let selectCon=[];
selectCon['1']=1;
selectCon['id']=2;
db.Select("demo",selectCon,(err,res)=>{
  console.log(res);
});

// 修改数据
let datas=[];
let updateCon=[];
datas['title']="123456";
datas['content']="123456";
updateCon['id']=2;
db.Update("demo",datas,updateCon);

// 删除数据
let delCon=[];
delCon['id']=1;
db.Delete("demo",delCon);

// 执行Query
db.Query("select * from demo where id>10 order by id desc",(err,res)=>{
  console.log(res);
})
