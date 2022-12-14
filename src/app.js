const express = require("express");
const port = process.env.PORT || 8000;
const app = express();
const path = require("path");
const hbs = require("hbs");
const multer = require('multer');
const uuid = require('uuid');
const upload= multer({dest: ' uploads/'});

const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../template/views");

app.set("view engine", "hbs");
app.set("views", template_path);
app.use(express.static(static_path));

app.get("/", (req, res) => {
  res.render("index");
});
app.get("/login", (req, res) => {
  res.render("login");
});
app.get("/signup", (req, res) => {
  res.render("signup");
});
app.get("/vdashboard", (req, res) => {
  res.render("vdashboard");
});
app.get("/sdashboard", (req, res) => {
  res.render("sdashboard");
});
app.get("/vsdashboard", (req, res) => {
  res.render("vsdashboard");
});

app.post('/upload', upload.single('summary'),(req,res)=>{
  return res.json({status:'OK'});
})

app.listen(port, () => {
  console.log("listening");
});
