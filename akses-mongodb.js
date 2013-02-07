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

// Hasil:
//{ _id: 50c74b79a7f83cba11e6b220,
//  name: 'Aditya',
//  address: 'Kalasan',
//  phone: '08787878787' }
//Data pegawai 'Bambang' tersimpan
//Data 'Ahmad' berhasil diperbaharui
//
// Hasil di db:
//> db.employees.find()
//{ "_id" : ObjectId("50c74b63a7f83cba11e6b21e"), "name" : 
//"Zaky", "address" : "Griya Purwa Asri" }
//{ "_id" : ObjectId("50c74b6da7f83cba11e6b21f"), "address" :
//"Finlandia", "email" : "zakyahmadaditya@gmail.com", "name" : "Ahmad" }
//{ "_id" : ObjectId("50c74b79a7f83cba11e6b220"), "name" :
//"Aditya", "address" : "Kalasan", "phone" : "08787878787" }
//{ "name" : "Bambang", "address" : "Yogyakarta", "password" : 
//"ealhadalah", "sex" : "male", "_id" : 
//ObjectId("50c75d43c111384846000001") }
//> 
//  
