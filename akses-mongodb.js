var databaseUrl = "localhost/mydb";
var collections = ["employees"];
var db = require("mongojs").connect(databaseUrl, collections);

// mencari data mahasiswa STMIK AKAKOM YOGYAKARTA
db.employees.find({nomor: "105410174"}, function(err, employees) {
  if( err || !employees) console.log("ada mahasiswa dengan nomor 105410174");
  else employees.forEach( function(emps) {
    console.log(emps);
  });
});

// menyimpan data mahasiswa baru: 105410174
db.employees.save({name : "annisa solikhah", address : "Yogyakarta", password: "urangbanua", sex: "vemale"}, function(err, saved) {
  if( err || !saved ) console.log("mahasiswa '105410174' gagal disimpan");
  else console.log("Data mahasiswa '105410174' tersimpan");
});

// mengupdate data mahasiswa: 105410121
db.employees.update({name : "adi irawan"}, {$set: {address: "bantul"}}, function(err, updated) {
  if( err || !updated ) console.log("Data mahasiswa '105410121' gagal diperbaharui");
  else console.log("Data '105410121' berhasil diperbaharui");
});

