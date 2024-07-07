const express = require("express");
const base64 = require("base-64");
const request = require("request");
const PORT = 2023;
const app = express();
const username = "";
const password = "";

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});
app.get("/NavNode",(req,res)=>{
    let url ="https://gws.ings.sk/ws/v2.8/Repositories/Bentley.PW--pwdi.ings.sk~3AiNGs_Demo_2020/Navigation/NavNode";
    request({
        url: url,
        "content-type": "application/json",
        "headers": {
          "Authorization": "Basic " + base64.encode(`${username}:${password}`)
        }
    
      }, function (err, res1) {
        if (err) {
          res.send(err);
        }
        else {
          let data = JSON.parse(res1.body);
          res.send(data);
        }
      });
  })

  app.get("/NavNodeItems",(req,res)=>{
    let fldId=req.query.fldId;
    let url ="https://gws.ings.sk/ws/v2.8/Repositories/Bentley.PW--pwdi.ings.sk~3AiNGs_Demo_2020/Navigation/NavNode/"+fldId+"/NavNode";
    request({
        url: url,
        "content-type": "application/json",
        "headers": {
          "Authorization": "Basic " + base64.encode(`${username}:${password}`)
        }
    
      }, function (err, res1) {
        if (err) {
          res.send(err);
        }
        else {
          let data = JSON.parse(res1.body);
          res.send(data);
        }
      });
  })

  app.get("/DocumentInfo",(req,res)=>{
    let fldId=req.query.fldId;
    let url ="https://gws.ings.sk/ws/v2.8/Repositories/Bentley.PW--pwdi.ings.sk~3AiNGs_Demo_2020/PW_WSG/Document/"+fldId;
    request({
        url: url,
        "content-type": "application/json",
        "headers": {
          "Authorization": "Basic " + base64.encode(`${username}:${password}`)
        }
    
      }, function (err, res1) {
        if (err) {
          res.send(err);
        }
        else {
          let data = JSON.parse(res1.body);
          res.send(data);
        }
      });
  })



app.listen(PORT, () => {
    console.log("server beží na porte " + PORT);
});